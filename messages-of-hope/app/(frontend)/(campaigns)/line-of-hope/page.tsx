import { Button } from "@/components/frontend/button";
import { ContactForm } from "@/components/frontend/contact-form";
import { EventsBanner } from "@/components/frontend/events-banner";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Line of Hope",
  description:
    "Line of Hope displays are a collaborative art project, which provide a space in which people can reflect on their current mindfulness and read messages of hope provided from those around them displayed on a line. These messages are about providing people in a time of need and the space to get them. We partner with other organisations to setup a stall to gather messages from the community, these are written on cards.",
});

export default function LineOfHopeRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <EventsBanner
        title="Line of Hope"
        description="When you need a lifeline"
        backgroundStyling={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/line_city_lit.jpg')",
          backgroundPosition: "left 50% top 50%",
        }}
      />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 md:grid grid-cols-[3fr_2fr] md:gap-12">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
            What is a Line of Hope?
          </h2>
          <p>
            Line of Hope displays are a collaborative art project, which provide
            a space in which people can reflect on their current mindfulness and
            read messages of hope provided from those around them displayed on a
            line. These messages are about providing people in a time of need
            and the space to get them. We partner with other organisations to
            setup a stall to gather messages from the community, these are
            written on cards. These cards are displayed hanging from a line and
            we recommend the local community to keep hanging up new messages
            each time they visit the line.
          </p>
          <p>
            The construction of one of these displays is often part of a larger
            event, in which we have other creative activities, and often perform
            bag packing.
          </p>
          <Button
            href="/events/feeling-blue-2024"
            colour="outline"
            text="Check out our Latest Line"
            size="sm"
            className="self-end"
          />
        </div>

        <Image
          src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/line_urdang.jpg"
          alt="The Line of Hope at City Lit"
          width={3024}
          height={4032}
          className="w-full h-auto max-w-sm aspect-square object-cover mx-auto rounded-lg md:max-w-md"
        />
      </section>

      <ContactForm title="Want To Create Your Own Line?" />

      <MessagesPanel />
    </main>
  );
}
