"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createBrowserClient } from "@/lib/supabase/client";
import { categoryOptions, Message, sourceOptions } from "@/lib/types";
import {
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Filter,
  Loader2,
  MoreHorizontal,
  OctagonAlert,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useMemo } from "react";

export default function MessagesDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;
  const pageSize: number = Number(searchParams.get("pageSize")) || 30;
  const filter = useMemo(
    () => JSON.parse(searchParams.get("formFilter") || "{}"),
    [searchParams.get("formFilter")]
  );

  const [supabase] = useState(() => createBrowserClient());

  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<Message[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [openFilter, setOpenFilter] = useState<boolean>(false);
  const [currentFilter, setCurrentFilter] = useState(filter);

  useEffect(() => {
    const getData = async () => {
      setError(null);

      const { data, error, count } = await supabase
        .from("messages")
        .select("*", { count: "exact" })
        .in("source", filter.source || sourceOptions.map((o) => o.value))
        .in("category", filter.category || categoryOptions.map((o) => o.value))
        .range((page - 1) * pageSize, page * pageSize - 1)
        .order("submitted", { ascending: false, nullsFirst: false });

      if (error) {
        setError(`${error.code}: ${error.message}`);
        return;
      }

      setCount(count || 0);
      setData(data);
    };
    getData();
  }, [page, pageSize, filter]);

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-6 mb-12">
      <section className="flex items-center justify-between">
        <p className="text-xl font-semibold font-quicksand tracking-tight">
          Collected Messages: {count}
        </p>

        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            className="w-fit flex gap-2 self-end font-quicksand font-semibold"
            onClick={() => {
              setOpenFilter((prev) => !prev);
            }}
          >
            <Filter className="size-4" />
            Filter
          </Button>
          <Button
            className="w-fit flex gap-2 self-end font-quicksand font-semibold bg-moh-dark-blue hover:bg-moh-dark-blue/80"
            asChild
          >
            <Link href="/dashboard/messages/new">
              <CirclePlus /> Add Message
            </Link>
          </Button>
        </div>
      </section>

      {openFilter && (
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-semibold tracking-tight text-xl">
              Filter Messages
            </CardTitle>
            <CardDescription>
              You can filter the messages by source, category, and
              public/private status. The filters are applied to the current
              page.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex gap-6">
            {/* Source */}
            <div className="flex flex-col gap-2">
              <p>Source:</p>
              {sourceOptions.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`source-${option.value}`}
                    checked={
                      Array.isArray(currentFilter.source) &&
                      currentFilter.source.includes(option.value)
                    }
                    onCheckedChange={(checked) => {
                      const newSource = checked
                        ? [...(currentFilter.source || []), option.value]
                        : (currentFilter.source || []).filter(
                            (s: string) => s !== option.value
                          );

                      // If no source is selected, remove the source filter
                      if (newSource.length === 0) {
                        const newFilter = { ...currentFilter };
                        delete newFilter.source;
                        setCurrentFilter(newFilter);
                        return;
                      }

                      setCurrentFilter({ ...currentFilter, source: newSource });
                    }}
                  />
                  <Label htmlFor={`source-${option.value}`} className="text-sm">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>

            {/* Category */}
            <div className="flex flex-col gap-2">
              <p>Category:</p>
              {categoryOptions.map((option) => (
                <div key={option.value} className="flex items-center gap-2">
                  <Checkbox
                    id={`category-${option.value}`}
                    checked={
                      Array.isArray(currentFilter.category) &&
                      currentFilter.category.includes(option.value)
                    }
                    onCheckedChange={(checked) => {
                      const newCategory = checked
                        ? [...(currentFilter.category || []), option.value]
                        : (currentFilter.category || []).filter(
                            (s: string) => s !== option.value
                          );

                      // If no category is selected, remove the category filter
                      if (newCategory.length === 0) {
                        const newFilter = { ...currentFilter };
                        delete newFilter.category;
                        setCurrentFilter(newFilter);
                        return;
                      }

                      setCurrentFilter({
                        ...currentFilter,
                        category: newCategory,
                      });
                    }}
                  />
                  <Label
                    htmlFor={`category-${option.value}`}
                    className="text-sm"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button
              variant="link"
              className="font-quicksand font-semibold"
              onClick={() => {
                setOpenFilter(false);
                setCurrentFilter({});
                router.push(`/dashboard/messages?page=1&pageSize=${pageSize}`);
              }}
            >
              Reset Filter
            </Button>
            <Button
              className="bg-moh-dark-blue hover:bg-moh-dark-blue/80 font-quicksand font-semibold tracking-tight"
              onClick={() => {
                setOpenFilter(false);
                router.push(
                  `/dashboard/messages?page=1&pageSize=${pageSize}&formFilter=${JSON.stringify(
                    currentFilter
                  )}`
                );
              }}
            >
              Apply Filter
            </Button>
          </CardFooter>
        </Card>
      )}

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
                <TableCell>
                  {item.submitted || (
                    <span className="text-muted-foreground italic">NULL</span>
                  )}
                </TableCell>
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
                        <Link
                          className="text-red-500 focus:text-red-600"
                          href={`/dashboard/messages/${item.id}/delete`}
                        >
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
      )}

      <section className="grid grid-cols-3">
        <div className="flex items-center justify-center gap-2 col-start-2">
          <Button variant="ghost" size="icon" asChild>
            <Link
              href={{
                pathname: "/dashboard/messages",
                query: {
                  page: count === 0 ? 1 : page === 1 ? 1 : page - 1,
                  pageSize,
                  formFilter: JSON.stringify(filter),
                },
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
                  page:
                    count === 0
                      ? 1
                      : page >= count / pageSize
                        ? page
                        : page + 1,
                  pageSize,
                  formFilter: JSON.stringify(filter),
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
                `/dashboard/messages?page=1&pageSize=${e.target.value}&formFilter=${JSON.stringify(filter)}`
              );
            }}
          >
            <option value={15}>15</option>
            <option value={30}>30</option>
            <option value={45}>45</option>
          </select>
        </div>
      </section>
    </main>
  );
}
