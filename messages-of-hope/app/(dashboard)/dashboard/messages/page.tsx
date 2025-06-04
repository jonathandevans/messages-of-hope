"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createBrowserClient } from "@/lib/supabase/client";
import { Message } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import {
  CalendarIcon,
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
import { useEffect, useRef, useState } from "react";

export default function MessagesDashboard() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page: number = Number(searchParams.get("page")) || 1;
  const pageSize: number = Number(searchParams.get("pageSize")) || 30;
  const filter = JSON.parse(searchParams.get("filter") || "{}");

  const [count, setCount] = useState<number>(0);

  const filterRef = useRef<Boolean>(false);
  const [currentFilter, setCurrentFilter] = useState(filter);
  const [filterResetCount, setFilterResetCount] = useState(0);

  const [data, setData] = useState<Message[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      const supabase = createBrowserClient();

      const { count, status, statusText } = await supabase
        .from("messages")
        .select("*", { count: "exact", head: true });
      if (!count) {
        setError(`${status}: ${statusText}`);
        return;
      }
      setCount(count);
    };
    getData();
  }, [filter]);

  useEffect(() => {
    const getData = async () => {
      const supabase = createBrowserClient();

      const { data, error, status, statusText } = await supabase
        .from("messages")
        .select("*")
        .range((page - 1) * pageSize, page * pageSize - 1)
        .order("submitted", { ascending: false, nullsFirst: false });

      if (error) {
        setError(`${status}: ${statusText}`);
        return;
      }

      setData(data);
      setError(null);
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
              filterRef.current = !filterRef.current;
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

      <MessagesFilterMenu
        filterRef={filterRef}
        filterResetCount={filterResetCount}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        setFilterResetCount={setFilterResetCount}
        page={page}
        pageSize={pageSize}
        router={router}
      />

      <MessagesTable data={data} error={error} />

      <MessagesPagination
        page={page}
        pageSize={pageSize}
        count={count}
        router={router}
      />
    </main>
  );
}

function MessagesTable({
  data,
  error,
}: {
  data: Message[] | null;
  error: string | null;
}) {
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
    </>
  );
}

function DatePicker({
  date,
  setDate,
  text = "Pick a Date",
}: {
  date: Date | undefined;
  setDate: (_: Date | undefined) => void;
  text?: string;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal bg-card min-w-[200px]",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            formatISO(date, { representation: "date" })
          ) : (
            <span>{text}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col space-y-2 p-2">
        <div className="rounded-md border">
          <Calendar
            mode="single"
            defaultMonth={
              new Date(
                date?.getFullYear() ?? new Date().getFullYear(),
                date?.getMonth() ?? new Date().getMonth()
              )
            }
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate ?? undefined);
            }}
          />
          <Button
            variant="ghost"
            className="w-full"
            type="button"
            onClick={() => setDate(undefined)}
          >
            Clear Date
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function MessagesFilterMenu({
  filterRef,
  filterResetCount,
  currentFilter,
  setCurrentFilter,
  setFilterResetCount,
  page,
  pageSize,
  router,
}: {
  filterRef: React.MutableRefObject<Boolean>;
  filterResetCount: number;
  currentFilter: any;
  setCurrentFilter: (f: any) => void;
  setFilterResetCount: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  pageSize: number;
  router: any;
}) {
  return (
    <Card
      key={filterResetCount}
      className={cn(filterRef.current ? "" : "hidden")}
    >
      <CardContent className="grid gap-4">
        <p className="text-muted-foreground">
          You can filter the messages by source, category, and public/private
          status. The filters are applied to the current page.
        </p>
        <div className="flex gap-6">
          {/* Date */}
          <div className="flex flex-col gap-2">
            <p className="font-quicksand font-semibold tracking-tight">
              Date Range
            </p>
            <DatePicker
              date={
                currentFilter.fromDate
                  ? new Date(currentFilter.fromDate)
                  : undefined
              }
              setDate={(submitted) => {
                const newFilter = { ...currentFilter, fromDate: submitted };
                setCurrentFilter(newFilter);
              }}
              text="From Date"
            />
            <DatePicker
              date={
                currentFilter.toDate
                  ? new Date(currentFilter.toDate)
                  : undefined
              }
              setDate={(submitted) => {
                const newFilter = { ...currentFilter, toDate: submitted };
                setCurrentFilter(newFilter);
              }}
              text="To Date"
            />
          </div>

          {/* Source */}
          <div className="flex flex-col gap-2">
            <p className="font-quicksand font-semibold tracking-tight">
              Source
            </p>
            <div className="flex items-center gap-2">
              <Checkbox
                id="source-website"
                checked={currentFilter.source?.includes("website")}
                onCheckedChange={(checked) => {
                  const newSource = checked
                    ? [...(currentFilter.source || []), "website"]
                    : (currentFilter.source || []).filter(
                        (s: string) => s !== "website"
                      );
                  setCurrentFilter({ ...currentFilter, source: newSource });
                }}
              />
              <Label htmlFor="source-website" className="text-sm font-medium">
                Website
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="source-event"
                checked={currentFilter.source?.includes("event")}
                onCheckedChange={(checked) => {
                  const newSource = checked
                    ? [...(currentFilter.source || []), "event"]
                    : (currentFilter.source || []).filter(
                        (s: string) => s !== "event"
                      );
                  setCurrentFilter({ ...currentFilter, source: newSource });
                }}
              />
              <Label htmlFor="source-event" className="text-sm">
                Event
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="source-instagram"
                checked={currentFilter.source?.includes("instagram")}
                onCheckedChange={(checked) => {
                  const newSource = checked
                    ? [...(currentFilter.source || []), "instagram"]
                    : (currentFilter.source || []).filter(
                        (s: string) => s !== "instagram"
                      );
                  setCurrentFilter({ ...currentFilter, source: newSource });
                }}
              />
              <Label htmlFor="source-instagram" className="text-sm">
                Instagram
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="source-other"
                checked={currentFilter.source?.includes("other")}
                onCheckedChange={(checked) => {
                  const newSource = checked
                    ? [...(currentFilter.source || []), "other"]
                    : (currentFilter.source || []).filter(
                        (s: string) => s !== "other"
                      );
                  setCurrentFilter({ ...currentFilter, source: newSource });
                }}
              />
              <Label htmlFor="source-other" className="text-sm">
                Other
              </Label>
            </div>
          </div>

          {/* Category */}
          <div className="flex flex-col gap-2">
            <p className="font-quicksand font-semibold tracking-tight">
              Category
            </p>

            <div className="flex items-center gap-2">
              <Checkbox
                id="category-personal_stories"
                checked={currentFilter.category?.includes("personal_stories")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "personal_stories"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "personal_stories"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label
                htmlFor="category-personal_stories"
                className="text-sm font-medium"
              >
                Personal Stories
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-togetherness"
                checked={currentFilter.category?.includes("togetherness")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "togetherness"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "togetherness"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-togetherness" className="text-sm">
                Togetherness
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-reaching_out"
                checked={currentFilter.category?.includes("reaching_out")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "reaching_out"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "reaching_out"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-reaching_out" className="text-sm">
                Reaching Out
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-practical_advice"
                checked={currentFilter.category?.includes("practical_advice")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "practical_advice"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "practical_advice"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-practical_advice" className="text-sm">
                Practical Advice
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-affirmations"
                checked={currentFilter.category?.includes("affirmations")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "affirmations"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "affirmations"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-affirmations" className="text-sm">
                Affirmations
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-recovery"
                checked={currentFilter.category?.includes("recovery")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "recovery"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "recovery"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-recovery" className="text-sm">
                Recovery
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-suicide_prevention"
                checked={currentFilter.category?.includes("suicide_prevention")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "suicide_prevention"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "suicide_prevention"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-suicide_prevention" className="text-sm">
                Suicide Prevention
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="category-uncategorised"
                checked={currentFilter.category?.includes("uncategorised")}
                onCheckedChange={(checked) => {
                  const newCategory = checked
                    ? [...(currentFilter.category || []), "uncategorised"]
                    : (currentFilter.category || []).filter(
                        (s: string) => s !== "uncategorised"
                      );
                  setCurrentFilter({
                    ...currentFilter,
                    category: newCategory,
                  });
                }}
              />
              <Label htmlFor="category-uncategorised" className="text-sm">
                Uncategorised
              </Label>
            </div>
          </div>

          {/* Published */}
          <div className="flex flex-col gap-2">
            <p className="font-quicksand font-semibold tracking-tight">
              Published Status
            </p>
            <div className="flex items-center gap-2">
              <Checkbox
                id="public"
                checked={currentFilter.public?.includes("true")}
                onCheckedChange={(checked) => {
                  const newPublished = checked
                    ? [...(currentFilter.public || []), "true"]
                    : (currentFilter.public || []).filter(
                        (s: string) => s !== "true"
                      );
                  setCurrentFilter({ ...currentFilter, public: newPublished });
                }}
              />
              <Label htmlFor="public" className="text-sm font-medium">
                Published
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="private"
                checked={currentFilter.public?.includes("false")}
                onCheckedChange={(checked) => {
                  const newPublished = checked
                    ? [...(currentFilter.public || []), "false"]
                    : (currentFilter.public || []).filter(
                        (s: string) => s !== "false"
                      );
                  setCurrentFilter({ ...currentFilter, public: newPublished });
                }}
              />
              <Label htmlFor="private" className="text-sm">
                Private
              </Label>
            </div>
          </div>

          {/* Used */}
          <div className="flex flex-col gap-2">
            <p className="font-quicksand font-semibold tracking-tight">Used</p>
            <div className="flex items-center gap-2">
              <Checkbox
                id="used"
                checked={currentFilter.used?.includes("true")}
                onCheckedChange={(checked) => {
                  const newUsed = checked
                    ? [...(currentFilter.used || []), "true"]
                    : (currentFilter.used || []).filter(
                        (s: string) => s !== "true"
                      );
                  setCurrentFilter({ ...currentFilter, used: newUsed });
                }}
              />
              <Label htmlFor="used" className="text-sm font-medium">
                Used
              </Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox
                id="unused"
                checked={currentFilter.used?.includes("false")}
                onCheckedChange={(checked) => {
                  const newUsed = checked
                    ? [...(currentFilter.used || []), "false"]
                    : (currentFilter.used || []).filter(
                        (s: string) => s !== "false"
                      );
                  setCurrentFilter({ ...currentFilter, used: newUsed });
                }}
              />
              <Label htmlFor="unused" className="text-sm">
                Unused
              </Label>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <Button
            variant="link"
            className="font-quicksand font-semibold tracking-tight"
            onClick={() => {
              setCurrentFilter({});
              setFilterResetCount((c) => c + 1);
              filterRef.current = false;
              router.push(
                `/dashboard/messages?page=${page}&pageSize=${pageSize}`
              );
            }}
          >
            Clear Filter
          </Button>
          <Button
            className="bg-moh-dark-blue hover:bg-moh-dark-blue/80 font-quicksand font-semibold tracking-tight"
            onClick={() => {
              filterRef.current = false;
              router.push(
                `/dashboard/messages?page=${page}&pageSize=${pageSize}&filter=${JSON.stringify(
                  currentFilter
                )}`
              );
            }}
          >
            Filter Results
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function MessagesPagination({
  page,
  pageSize,
  count,
  router,
}: {
  page: number;
  pageSize: number;
  count: number;
  router: any;
}) {
  return (
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
                page: page === count / pageSize ? page : page + 1,
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
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={45}>45</option>
        </select>
      </div>
    </div>
  );
}
