"use client";

import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import {
  ChevronLeft,
  ChevronRight,
  Loader2,
  MoreHorizontal,
  OctagonAlert,
} from "lucide-react";
import { createBrowserClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Message } from "@/lib/types";

export function MessagesTable() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;
  const pageSize: number = Number(searchParams.get("pageSize")) || 15;

  const [totalCount, setTotalCount] = useState<number>(0);

  const [data, setData] = useState<Message[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      setError(null);
      setData(null);

      const supabase = createBrowserClient();
      const { count, status, statusText } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true });
      if (!count) {
        setError(`${status}: ${statusText}`);
        return;
      }
      setTotalCount(count);

      const { data: rows, error } = await supabase
        .from("messages")
        .select("*")
        .order("submitted", { ascending: false, nullsFirst: false })
        .limit(pageSize)
        .range(pageSize * (page - 1), pageSize * page - 1);
      if (error) {
        setError(`${error.code}: ${error.message}`);
        return;
      }
      setData(rows);
    };
    getData();
  }, [page, pageSize]);

  return (
    <>
      {error ? (
        <Alert className="max-w-xl mx-auto">
          <AlertTitle className="text-lg font-quicksand font-semibold flex items-center gap-2">
            <OctagonAlert className="text-red-500" /> Failed to fetch data
          </AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      ) : !data ? (
        <Alert className="max-w-xl mx-auto">
          <AlertTitle className="text-lg font-quicksand font-semibold flex items-center gap-2">
            <Loader2 className="animate-spin" /> Fetching data...
          </AlertTitle>
          <AlertDescription>
            Currently fetching the table data based on the filters.
          </AlertDescription>
        </Alert>
      ) : (
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="font-quicksand font-semibold">
                  Message
                </TableHead>
                <TableHead className="font-quicksand font-semibold">
                  Submitted
                </TableHead>
                <TableHead className="font-quicksand font-semibold">
                  Source
                </TableHead>
                <TableHead className="font-quicksand font-semibold">
                  Category
                </TableHead>
                <TableHead className="font-quicksand font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-end">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="max-w-lg overflow-hidden text-ellipsis">
                    {item.message}
                  </TableCell>
                  <TableCell>{item.submitted || <span className="text-muted-foreground italic">NULL</span>}</TableCell>
                  <TableCell className="capitalize">{item.source}</TableCell>
                  <TableCell className="capitalize">
                    {(item.category as string).replace("_", " ")}
                  </TableCell>
                  <TableCell>
                    {item.public ? (
                      <Badge variant="outline">public</Badge>
                    ) : (
                      <Badge variant="outline">private</Badge>
                    )}
                  </TableCell>
                  <TableCell className="text-end">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="size-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                          <Link href={`/dashboard/messages/${item.id}`}>
                            Edit
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link className="text-red-500 focus:text-red-600" href={`/dashboard/messages/${item.id}/delete`}>
                            Delete
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="grid grid-cols-3">
            <div className="flex items-center justify-center gap-2 col-start-2">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={{
                    pathname: "/dashboard/messages",
                    query: { page: page === 1 ? 1 : page - 1, pageSize },
                  }}
                >
                  <ChevronLeft />
                </Link>
              </Button>
              <p>{page}</p>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href={{
                    pathname: "/dashboard/messages",
                    query: {
                      page: page === totalCount / pageSize ? page : page + 1,
                      pageSize,
                    },
                  }}
                >
                  <ChevronRight />
                </Link>
              </Button>
            </div>

            <div className="flex items-center justify-end gap-2">
              <p className="text-sm text-muted-foreground">page size:</p>
              <select
                className="col-start-3 w-fit text-sm"
                defaultValue={pageSize}
                onChange={(e) => {
                  router.push(
                    `/dashboard/messages?page=${page}&pageSize=${e.target.value}`
                  );
                }}
              >
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
