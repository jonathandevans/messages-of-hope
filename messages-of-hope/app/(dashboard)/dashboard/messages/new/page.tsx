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
import { useActionState, useState } from "react";
import { newMessageAction } from "../actions";
import { useForm } from "@conform-to/react";
import { newMessageSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";

export default function NewMessageRoute() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState<string | undefined>();

  const [prevResult, newMessage, pending] = useActionState(
    newMessageAction,
    undefined
  );
  const [form, fields] = useForm({
    id: "new-message",
    lastResult: prevResult?.zod_error || null,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: newMessageSchema });
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

      <form
        id={form.id}
        onSubmit={form.onSubmit}
        action={newMessage}
        noValidate
      >
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-bold text-3xl tracking-tighter">
              New Message
            </CardTitle>
            <CardDescription>
              Add the contents of the new message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Message</Label>
                <Textarea
                  className="h-30"
                  key={fields.message.key}
                  name={fields.message.name}
                />
                {fields.message.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.message.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Submitted (Optional)</Label>
                <input
                  defaultValue={submitted}
                  type="hidden"
                  key={fields.submitted.key}
                  name={fields.submitted.name}
                />
                <DatePicker
                  date={submitted ? new Date(submitted) : undefined}
                  setDate={setSubmitted}
                />
                {fields.submitted.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.submitted.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label>Source</Label>
                  <Select name={fields.source.name} key={fields.source.key}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Source" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="website">Website</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {fields.source.errors && (
                    <ul className="text-red-500 text-xs">
                      {fields.source.errors.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <Label>Category</Label>
                  <Select key={fields.category.key} name={fields.category.name}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="togetherness">Togetherness</SelectItem>
                      <SelectItem value="personal_stories">
                        Personal Stories
                      </SelectItem>
                      <SelectItem value="reaching_out">Reaching Out</SelectItem>
                      <SelectItem value="practical_advice">
                        Practical Advice
                      </SelectItem>
                      <SelectItem value="affirmations">Affirmations</SelectItem>
                      <SelectItem value="recovery">Recovery</SelectItem>
                      <SelectItem value="suicide_prevention">
                        Suicide Prevention
                      </SelectItem>
                      <SelectItem value="uncategorised">
                        Uncategorised
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  {fields.category.errors && (
                    <ul className="text-red-500 text-xs">
                      {fields.category.errors.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Message Visibility</Label>
                <RadioGroup
                  defaultValue={"false"}
                  className="gap-1"
                  key={fields.public.key}
                  name={fields.public.name}
                >
                  <div className="flex gap-2 items-center">
                    <RadioGroupItem value="true" />
                    <p className="text-xs">Published</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <RadioGroupItem value="false" />
                    <p className="text-xs">Private</p>
                  </div>
                </RadioGroup>
                {fields.public.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.public.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Has this message been used in a post?</Label>
                <RadioGroup
                  defaultValue={"false"}
                  className="gap-1"
                  key={fields.used.key}
                  name={fields.used.name}
                >
                  <div className="flex gap-2 items-center">
                    <RadioGroupItem value="true" />
                    <p className="text-xs">Yes</p>
                  </div>
                  <div className="flex gap-2 items-center">
                    <RadioGroupItem value="false" />
                    <p className="text-xs">No</p>
                  </div>
                </RadioGroup>
                {fields.used.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.used.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Instagram Handle (Optional)</Label>
                <Input
                  name={fields.instagram_handle.name}
                  key={fields.instagram_handle.key}
                />
                {fields.instagram_handle.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.instagram_handle.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
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
