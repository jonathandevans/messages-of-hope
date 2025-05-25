"use client";

import {
  AlertCircle,
  ChevronLeft,
  Loader2,
  PartyPopper,
} from "lucide-react";
import { Button } from "../../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { useRouter } from "next/navigation";
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Textarea } from "../../ui/textarea";
import { Message } from "@/lib/types";
import { formatISO } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormEvent, useEffect, useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { RadioGroup, RadioGroupItem } from "../../ui/radio-group";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "../../ui/alert";
import { createBrowserClient } from "@/lib/supabase/client";

export function EditMessageForm({ message }: { message: Message }) {
  const router = useRouter();

  const [storedMessage, setStoredMessage] = useState({
    ...message,
    version: 0,
  });
  const [submitted, setSubmitted] = useState<string | undefined>(
    message.submitted || undefined
  );
  const [source, setSource] = useState<string>(message.source);
  const [category, setCategory] = useState<string>(message.category);
  const [published, setPublished] = useState<string>(
    message.public ? "true" : "false"
  );
  const [used, setUsed] = useState<string>(message.used ? "true" : "false");

  useEffect(() => {
    setSubmitted(storedMessage.submitted || undefined);
    setSource(storedMessage.source);
    setCategory(storedMessage.category);
    setPublished(storedMessage.public ? "true" : "false");
    setUsed(storedMessage.used ? "true" : "false");
  }, [storedMessage]);

  const [pending, startTransition] = useTransition();
  const [response, setResponse] = useState<{
    error?: string;
    success?: boolean;
  }>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        if ((formData.get("message") as string).trim() === "") {
          throw new Error("Message cannot be empty");
        }

        const supabase = createBrowserClient();
        const { error } = await supabase
          .from("messages")
          .update({
            message: formData.get("message"),
            submitted:
              formData.get("submitted") === ""
                ? null
                : formData.get("submitted"),
            source: formData.get("source"),
            category: formData.get("category"),
            public: formData.get("public") === "false" ? false : true,
            used: formData.get("used") === "false" ? false : true,
            instagram_handle:
              formData.get("instagram_handle") === ""
                ? null
                : formData.get("instagram_handle"),
          })
          .eq("id", formData.get("id"));

        if (error) throw new Error(`${error.code} : ${error.message}`);

        setResponse({ success: true });
      } catch (error) {
        setResponse({
          error:
            error instanceof Error ? error.message : "Something went wrong...",
        });
      }
    });
  };

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-4 mt-2 mb-12">
      <div className="flex items-center font-quicksand font-semibold gap-x-2">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ChevronLeft className="size-5" />
        </Button>
        go back
      </div>

      {response?.error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-8" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{response.error}</AlertDescription>
        </Alert>
      )}
      {response?.success && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <PartyPopper className="text-green-500 bg-green-100 p-1.5 rounded-full size-8" />{" "}
            Message updated!
          </AlertTitle>
          <AlertDescription>
            The updated message has now been saved.
          </AlertDescription>
        </Alert>
      )}

      <form key={storedMessage.version} onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-semibold text-2xl">
              Edit Message
            </CardTitle>
            <CardDescription>Edit the contents of the message.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label className="italic">Message Id</Label>
                <input value={storedMessage.id} type="hidden" name="id" />
                <Input value={storedMessage.id} disabled />
              </div>
              <div className="grid gap-2">
                <Label>Message</Label>
                <Textarea
                  className="h-30"
                  defaultValue={storedMessage.message}
                  name="message"
                />
              </div>
              <div className="grid gap-2">
                <Label>Submitted (Optional)</Label>
                <input name="submitted" value={submitted || ""} type="hidden" />
                <DatePicker
                  date={submitted ? new Date(submitted) : undefined}
                  setDate={setSubmitted}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label>Source</Label>
                  <input value={source} type="hidden" name="source" />
                  <Select
                    defaultValue={storedMessage.source}
                    onValueChange={(val) => {
                      setSource(val);
                    }}
                  >
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
                </div>
                <div className="grid gap-2">
                  <Label>Category</Label>
                  <input value={category} type="hidden" name="category" />
                  <Select
                    defaultValue={storedMessage.category}
                    onValueChange={(val) => {
                      setCategory(val);
                    }}
                  >
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
                </div>
              </div>

              <div className="grid gap-2">
                <Label>Message Visibility</Label>
                <input type="hidden" name="public" value={published} />
                <RadioGroup
                  defaultValue={storedMessage.public ? "true" : "false"}
                  className="gap-1"
                  onValueChange={(val) => setPublished(val)}
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
              </div>
              <div className="grid gap-2">
                <Label>Has this message been used in a post?</Label>
                <input type="hidden" name="used" value={used} />
                <RadioGroup
                  defaultValue={storedMessage.public ? "true" : "false"}
                  className="gap-1"
                  onValueChange={(val) => setUsed(val)}
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
              </div>

              <div className="grid gap-2">
                <Label>Instagram Handle (Optional)</Label>
                <Input
                  defaultValue={storedMessage.instagram_handle || ""}
                  name="instagram_handle"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="flex justify-between items-center w-full gap-4">
              <Button
                variant="link"
                className="text-xs"
                type="button"
                onClick={() => {
                  setStoredMessage((prev) => ({
                    ...prev,
                    version: storedMessage.version + 1,
                  }));
                }}
                disabled={pending}
              >
                Reset Message
              </Button>
              <div className="flex gap-4">
                <Button variant="destructive" type="button" disabled={pending}>
                  <Link href={`/dashboard/messages/${storedMessage.id}/delete`}>
                    Delete Message
                  </Link>
                </Button>
                <Button variant="secondary" disabled={pending}>
                  {pending ? (
                    <>
                      <Loader2 className="animate-spin" /> Please wait
                    </>
                  ) : (
                    "Update Message"
                  )}
                </Button>
              </div>
            </div>
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
