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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import { AlertCircle, CalendarIcon, ChevronLeft, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useRef, useState } from "react";
import { newEventAction } from "../actions";
import { useForm } from "@conform-to/react";
import { newEventSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";
import { ImageUploader } from "@/components/dashboard/image-uploader";

export default function NewMessageRoute() {
  const router = useRouter();

  const titleRef = useRef<HTMLInputElement | null>(null);
  const slugRef = useRef<HTMLInputElement | null>(null);
  const [date, setDate] = useState<string | undefined>();

  const [prevResult, newEvent, pending] = useActionState(
    newEventAction,
    undefined
  );
  const [form, fields] = useForm({
    id: "new-event",
    lastResult: prevResult?.zod_error || null,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: newEventSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

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

      {prevResult?.error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-7" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{prevResult.error}</AlertDescription>
        </Alert>
      )}

      <form id={form.id} onSubmit={form.onSubmit} action={newEvent} noValidate>
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
                <Input
                  name={fields.title.name}
                  key={fields.title.key}
                  ref={titleRef}
                />
                {fields.title.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.title.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Description</Label>
                <Textarea
                  name={fields.description.name}
                  key={fields.description.key}
                />
                {fields.description.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.description.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Slug</Label>
                <span className="flex items-center">
                  <p className="md:text-sm bg-zinc-300 h-full flex items-center justify-center px-3 rounded-l-md">{`${process.env.NEXT_PUBLIC_BASE_URL}/events/`}</p>
                  <Input
                    className="rounded-l-none pl-1"
                    name={fields.slug.name}
                    key={fields.slug.key}
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
                      if (!titleRef.current || !slugRef.current) return;

                      const title = titleRef.current.value;
                      if (!title) return;

                      const slug = title
                        .toLowerCase()
                        .replace(/[^a-z0-9]+/g, "-")
                        .replace(/^-|-$/g, "");
                      slugRef.current.value = `${slug}-${new Date().getFullYear()}`;
                    }}
                  >
                    Generate Slug
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Use the title to generate an appropriate slug
                  </p>
                </span>
                {fields.slug.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.slug.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Date</Label>
                <input
                  type="hidden"
                  key={fields.date.key}
                  name={fields.date.name}
                />
                <DatePicker
                  date={date ? new Date(date) : undefined}
                  setDate={setDate}
                />
                {fields.date.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.date.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Cover Image</Label>
                <ImageUploader />
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
            <Button variant="secondary" disabled={pending} type="submit">
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Please wait
                </>
              ) : (
                <>Create Message</>
              )}
            </Button>
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
              if (selectedDate)
                setDate(formatISO(selectedDate, { representation: "date" }));
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
