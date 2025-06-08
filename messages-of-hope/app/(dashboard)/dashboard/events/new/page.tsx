"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import { AlertCircle, CalendarIcon, ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function NewEventsRoute() {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement>(null);
  const slugRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | undefined>();

  const [date, setDate] = useState<string | undefined>(undefined);

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-4 mb-12">
      <div className="flex items-center gap-x-2">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ChevronLeft className="size-5" />
        </Button>
        <h3 className="font-quicksand font-semibold tracking-tight text-xl">
          Go Back
        </h3>
      </div>

      {error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-7" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form>
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-bold text-3xl tracking-tighter">
              New Event
            </CardTitle>
            <CardDescription>
              Add the contents of the new event.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Title</Label>
                <Input name="title" ref={titleRef} />
              </div>

              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea name="description" />
              </div>

              <div className="grid gap-2">
                <Label>Slug</Label>
                <span className="flex items-center">
                  <p className="md:text-sm bg-zinc-300 h-full flex items-center justify-center px-3 rounded-l-md">{`${process.env.NEXT_PUBLIC_BASE_URL}/events/`}</p>
                  <Input
                    className="rounded-l-none pl-1"
                    name="slug"
                    ref={slugRef}
                  />
                </span>
                <span className="flex items-center gap-x-2">
                  <Button
                    className="w-fit"
                    variant="outline"
                    size="sm"
                    type="button"
                    onClick={() => {
                      if (!titleRef.current || !slugRef.current) {
                        setError("Title or slug input is not available.");
                        return;
                      }
                      const title = titleRef.current.value;
                      if (!title) {
                        setError("Title cannot be empty when generating a slug.");
                        return;
                      }
                      const slug = title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");
                      slugRef.current.value = slug;
                    }}
                  >
                    Generate Slug
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Use the title to generate an appropriate slug
                  </p>
                </span>
              </div>

              <div className="grid gap-2">
                <Label>Date</Label>
                <input name="date" value={date || ""} type="hidden" />
                <DatePicker
                  date={date ? new Date(date) : undefined}
                  setDate={setDate}
                />
              </div>

              <div className="grid gap-2">
                <Label>Cover Image</Label>
                <Input />
              </div>

              <div className="grid gap-2">
                <Label>Content</Label>
                <Textarea />
              </div>

              <div className="grid gap-2">
                <Label>Status</Label>
                <Input />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="secondary">Create Event</Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}

function DatePicker({
  date,
  setDate,
}: {
  date: Date | undefined;
  setDate: (_: string | undefined) => void;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "justify-start text-left font-normal bg-card",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon />
          {date ? (
            formatISO(date, { representation: "date" })
          ) : (
            <span>Pick a date</span>
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
              if (selectedDate) setDate(selectedDate.toDateString());
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