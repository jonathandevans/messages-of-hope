import { MessageSubmissionForm } from "@/components/frontend/message-submission-form";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Write a Message",
  description:
    "Write a message of hope for someone struggling with their mental health. Your message could be the one that makes a difference in someone's life. Messages of Hope collects messages of hope and spreads them far and wide. Keep an eye on our social media pages to see if your message is shared.",
});

export default function WriteAMessageRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <section className="bg-moh-blue">
        <div className="mx-auto max-w-7xl w-[90%] py-12 flex flex-col justify-center items-start gap-4">
          <div className="flex flex-col items-center gap-4 md:grid grid-cols-2 md:gap-8">
            <Image
              src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/i_wrote_a_message.jpg"
              alt="A crate filled with handwritten messages"
              width={3375}
              height={3375}
              className="object-cover h-72 max-w-lg w-full col-start-2 md:h-88 md:mx-auto"
            />

            <div className="flex flex-col justify-center items-start gap-3 row-start-1">
              <h1 className="font-coiny text-5xl tracking-tighter">
                Write a Message
              </h1>
              <p>
                Write a message of hope for someone struggling with their mental
                health. Your message could be the one that makes a difference in
                someone's life. Messages of Hope collects messages of hope and
                spreads them far and wide. Keep an eye on our social media pages
                to see if your message is shared.
              </p>
              <p>
                If you'd like us to tag you on social media when your message of
                hope is posted, leave your Instagram handle below. Please note,
                this is optional and if you'd like your message of hope to
                remain anonymous just leave it blank. Thank you for your help in
                spreading hope.
              </p>
            </div>
          </div>
        </div>
      </section>

      <MessageSubmissionForm />

      <MessagesPanel />
    </main>
  );
}
