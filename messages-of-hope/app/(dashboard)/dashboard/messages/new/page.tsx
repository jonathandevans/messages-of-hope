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
import { createBrowserClient } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import { AlertCircle, CalendarIcon, ChevronLeft, Loader2 } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { FormEvent, useState, useTransition } from "react";

export default function NewMessageRoute() {
  const router = useRouter();

  const [submitted, setSubmitted] = useState<string | undefined>();
  const [source, setSource] = useState<string | undefined>();
  const [category, setCategory] = useState<string | undefined>();
  const [published, setPublished] = useState<string | undefined>("false");
  const [used, setUsed] = useState<string | undefined>("false");

  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    startTransition(async () => {
      try {
        if ((formData.get("message") as string).trim() === "") {
          throw new Error("Message cannot be empty");
        }
        if (
          !formData.get("source") ||
          (formData.get("source") as string).trim() === ""
        ) {
          throw new Error("Source cannot be empty");
        }
        if (
          !formData.get("category") ||
          (formData.get("category") as string).trim() === ""
        ) {
          throw new Error("Category cannot be empty");
        }

        const supabase = createBrowserClient();
        const { error } = await supabase.from("messages").insert({
          message: formData.get("message"),
          submitted:
            formData.get("submitted") === "" ? null : formData.get("submitted"),
          source: formData.get("source"),
          category: formData.get("category"),
          public: formData.get("public") === "false" ? false : true,
          used: formData.get("used") === "false" ? false : true,
          instagram_handle:
            formData.get("instagram_handle") === ""
              ? null
              : formData.get("instagram_handle"),
        });

        if (error) throw new Error(`${error.code} : ${error.message}`);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong..."
        );
      }

      redirect("/dashboard/messages");
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

      {error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-8" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-semibold text-2xl">
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
                <Textarea className="h-30" name="message" />
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
                  <input defaultValue={source} type="hidden" name="source" />
                  <Select
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
                  <input
                    defaultValue={category}
                    type="hidden"
                    name="category"
                  />
                  <Select
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
                <input type="hidden" name="public" defaultValue={published} />
                <RadioGroup
                  defaultValue={"false"}
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
                <input type="hidden" name="used" defaultValue={used} />
                <RadioGroup
                  defaultValue={"false"}
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
                <Input name="instagram_handle" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="secondary" disabled={pending}>
              {pending ? (
                <>
                  <Loader2 className="animate-spin" /> Please wait
                </>
              ) : (
                "Create Message"
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
