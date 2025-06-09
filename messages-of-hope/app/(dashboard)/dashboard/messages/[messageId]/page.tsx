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
import { Message } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import {
  AlertCircle,
  CalendarIcon,
  ChevronLeft,
  Loader2,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  FormEvent,
  useActionState,
  useEffect,
  useState,
  useTransition,
} from "react";
import { editMessageAction } from "../actions";
import { createBrowserClient } from "@/lib/supabase/client";

export default function EditMessageRoute() {
  const { messageId } = useParams();

  const router = useRouter();
  const [supabase] = useState(() => createBrowserClient());

  const [message, setMessage] = useState<Message | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [messageError, setMessageError] = useState<string | undefined>();

  const [counter, setCounter] = useState<number>(0);
  const [submitted, setSubmitted] = useState<string | undefined>();

  const [prevResult, editMessage] = useActionState(
    editMessageAction,
    undefined
  );
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    const getData = async () => {
      setError(undefined);

      const { data, error } = await supabase
        .from("messages")
        .select()
        .eq("id", messageId)
        .single();

      if (error) {
        setError(`${error.code}: ${error.message}`);
      } else {
        setMessage(data);
        if ((data as Message).submitted) {
          const date = (data as Message).submitted || undefined;
          setSubmitted(date);
        }
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (prevResult?.success) {
      setMessage(prevResult.success);
      if ((prevResult.success as Message).submitted) {
        const date = (prevResult.success as Message).submitted || undefined;
        setSubmitted(date);
      }
      setCounter((prev) => prev + 1);
    }
  }, [prevResult]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    setMessageError(undefined);

    startTransition(() => {
      if (
        !formData.get("message") ||
        (formData.get("message") as string).trim() === ""
      ) {
        setMessageError("Message cannot be empty");
        return;
      } else if ((formData.get("message") as string).trim().length < 3) {
        setMessageError("Message is too short");
        return;
      }

      editMessage(formData);
    });
  };

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

      {error ? (
        <Alert className="max-w-3xl mx-auto">
          <AlertTitle>Failed to fetch message</AlertTitle>
          <AlertDescription>
            {error || "Something went wrong..."}
          </AlertDescription>
        </Alert>
      ) : !message ? (
        <Alert className="max-w-xl mx-auto">
          <AlertTitle className="text-lg font-quicksand font-semibold flex items-center gap-2">
            <Loader2 className="animate-spin" /> Fetching data...
          </AlertTitle>
          <AlertDescription>
            Currently fetching the message using the message id.
          </AlertDescription>
        </Alert>
      ) : (
        <>
          {prevResult?.error && (
            <Alert>
              <AlertTitle className="text-lg flex gap-2 items-center">
                <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-8" />{" "}
                Oops something went wrong...
              </AlertTitle>
              <AlertDescription>{prevResult.error}</AlertDescription>
            </Alert>
          )}
          {prevResult?.success && (
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

          <form key={counter} onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="font-quicksand font-bold text-3xl tracking-tighter">
                  Edit Message
                </CardTitle>
                <CardDescription>
                  Edit the contents of the message.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label className="italic">Message Id</Label>
                    <input type="hidden" name="id" defaultValue={message.id} />
                    <Input defaultValue={message.id} disabled />
                  </div>

                  <div className="grid gap-2">
                    <Label>Message</Label>
                    <Textarea
                      className="h-30"
                      defaultValue={message.message}
                      name="message"
                    />
                    {messageError && (
                      <p className="text-xs text-red-500">{messageError}</p>
                    )}
                  </div>

                  <div className="grid gap-2">
                    <Label>Submitted (Optional)</Label>
                    <input
                      defaultValue={submitted}
                      type="hidden"
                      name="submitted"
                    />
                    <DatePicker
                      date={submitted ? new Date(submitted) : undefined}
                      setDate={setSubmitted}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2">
                      <Label>Source</Label>
                      <Select name="source" defaultValue={message.source}>
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

                    <div className="flex flex-col gap-2">
                      <Label>Category</Label>
                      <Select name="category" defaultValue={message.category}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="togetherness">
                            Togetherness
                          </SelectItem>
                          <SelectItem value="personal_stories">
                            Personal Stories
                          </SelectItem>
                          <SelectItem value="reaching_out">
                            Reaching Out
                          </SelectItem>
                          <SelectItem value="practical_advice">
                            Practical Advice
                          </SelectItem>
                          <SelectItem value="affirmations">
                            Affirmations
                          </SelectItem>
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
                    <RadioGroup
                      defaultValue={message.public ? "true" : "false"}
                      className="gap-1"
                      name="public"
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
                    <RadioGroup
                      defaultValue={message.used ? "true" : "false"}
                      className="gap-1"
                      name="used"
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
                      name="instagram_handle"
                      defaultValue={message.instagram_handle || undefined}
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
                    disabled={pending}
                    onClick={() => {
                      setSubmitted(message.submitted || undefined);
                      setCounter((prev) => prev + 1);
                    }}
                  >
                    Reset Message
                  </Button>
                  <div className="flex gap-4">
                    <Button
                      variant="destructive"
                      type="button"
                      disabled={pending}
                      asChild
                    >
                      <Link href={`/dashboard/messages/${messageId}/delete`}>
                        Delete Message
                      </Link>
                    </Button>
                    <Button
                      variant="secondary"
                      disabled={pending}
                      type="submit"
                    >
                      {pending ? (
                        <>
                          <Loader2 className="size-4 animate-spin" /> Please
                          wait
                        </>
                      ) : (
                        <>Update Message</>
                      )}
                    </Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </form>
        </>
      )}
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
