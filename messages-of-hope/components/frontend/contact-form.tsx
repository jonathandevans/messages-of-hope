"use client";

import { useActionState, useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import styles from "./custom-css/contact-form.module.css";
import { sendEmailAction } from "@/app/(frontend)/actions";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { Loader2 } from "lucide-react";

export function ContactForm({
  title = "Contact Us",
  description = "Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope event or would like to collaborate with us in any capacity we would love to hear from you.",
}: {
  title?: string;
  description?: string;
}) {
  const [response, sendEmail, pending] = useActionState(sendEmailAction, null);
  const alertRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (response?.error || response?.success) {
      alertRef.current?.click();
    }
  }, [response]);

  return (
    <section className="bg-moh-dark-blue py-12 relative overflow-hidden">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className="hidden" ref={alertRef} />
        </AlertDialogTrigger>
        {response?.error && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Oops something went wrong...</AlertDialogTitle>
              <AlertDialogDescription>
                We are currently unable to send your email. {response.error}
              </AlertDialogDescription>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogHeader>
          </AlertDialogContent>
        )}
        {response?.success && (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Message has been sent!</AlertDialogTitle>
              <AlertDialogDescription>
                We've just received your message and will get back to you soon.
              </AlertDialogDescription>
              <AlertDialogCancel>Close</AlertDialogCancel>
            </AlertDialogHeader>
          </AlertDialogContent>
        )}
      </AlertDialog>

      <div className={styles.ring1}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.ring2}>
        <span />
        <span />
        <span />
      </div>

      <div className="w-[90%] mx-auto max-w-7xl flex flex-col gap-4">
        <h2 className="font-quicksand text-zinc-100 tracking-tight text-3xl font-semibold text-center">
          {title}
        </h2>
        <p className="text-zinc-100">{description}</p>

        <form
          action={sendEmail}
          className="flex flex-col gap-2 lg:grid grid-cols-2 grid-rows-5 lg:gap-4 xl:grid-cols-3 relative z-3"
        >
          <Input
            placeholder="Name*"
            className="bg-zinc-100 border-moh-blue border-3 text-sm"
            disabled={pending}
            name="name"
            required
          />
          <Input
            placeholder="Email*"
            className="bg-zinc-100 border-moh-blue border-3 text-sm"
            disabled={pending}
            name="email"
            type="email"
          />
          <Input
            placeholder="Business/Organisation"
            className="bg-zinc-100 border-moh-blue border-3 text-sm"
            disabled={pending}
            name="organisation"
          />
          <Input
            placeholder="Subject*"
            className="bg-zinc-100 border-moh-blue border-3 text-sm"
            disabled={pending}
            name="subject"
            required
          />
          <Textarea
            placeholder="Write your message here..."
            className="bg-zinc-100 border-moh-blue border-3 h-50 lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:h-auto xl:col-end-4 text-sm"
            disabled={pending}
            name="message"
            required
          />
          <button
            disabled={pending}
            className="font-quicksand font-semibold bg-moh-blue py-2 rounded-md hover:opacity-80 transition-all lg:col-span-2 xl:col-span-3"
          >
            {pending ? (
              <>
                <Loader2 className="animate-spin" /> Please wait
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
