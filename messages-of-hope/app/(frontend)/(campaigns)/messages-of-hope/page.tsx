import { Button } from "@/components/frontend/button";
import { ContactForm } from "@/components/frontend/contact-form";
import { EventsBanner } from "@/components/frontend/events-banner";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  absolute: "Messages of Hope Campaign",
  description:
    "Messages of Hope collects messages of hope and spreads them far and wide. Collecting these messages is part of our initial Messages of Hope campaign which started this organisation. You can often find us out in the community collecting messages from strangers. Not only do these messages help others but we give people the opportunity to perform a wellbeing check-in.",
});

const galleryImages = [
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/canvas_painting.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/painted_pebbles.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_dog_message.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_costume_message.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_family_message.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/moh_2023.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/moh_2023_beth.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_foreign_message.jpg",
  "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_beth_message.jpg",
];

export default function LineOfHopeRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <EventsBanner
        title="Messages of Hope"
        description="Reaching out to support each other"
        backgroundStyling={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_foreign_message.jpg')",
          backgroundPosition: "left 50% top 60%",
        }}
      />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 md:grid grid-cols-[3fr_2fr] md:gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
            What is the MOH Campaign?
          </h2>
          <p>
            Messages of Hope collects messages of hope and spreads them far and
            wide. Keep an eye on our social media pages to see if your message
            is shared. You can submit a message of hope via our website whenever
            you like. We will then post the submitted messages of hope on our
            social media, or your message might be turned into a sticker and
            placed in various spots around the local community.
          </p>
          <p>
            Collecting these messages is part of our initial Messages of Hope
            campaign which started this organisation. You can often find us out
            in the community collecting messages from strangers. Not only do
            these messages help others but we give people the opportunity to
            perform a wellbeing check-in.
          </p>
          <p>
            As an organisation we have done many pop-up art sessions where
            we&apos;ve had people, write messages, colour their feelings, and
            draw on canvases. This again allows people to perform a well-being
            check-in, provides a nice creative outlet in the day, and gives the
            opportunity to talk and meet new people. This is all a part of the
            of the original Messages of Hope campaign, using creativity to
            spread hope.
          </p>
          <Button
            href="/write-a-message"
            colour="outline"
            text="Write a Message"
            size="sm"
            className="self-end"
          />
        </div>

        <Image
          src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_message.jpg"
          alt="'You're loved' written on a whiteboard at the Connections 2024 event"
          width={4000}
          height={6000}
          className="w-full h-auto max-w-sm aspect-square object-cover mx-auto rounded-lg md:max-w-md md:self-end"
        />
      </section>

      <section className="py-12 bg-moh-blue">
        <div className="w-[90%] max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-8 xs:grid xs:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Messages of Hope Gallery Image ${index + 1}`}
              className="w-full aspect-square object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      <MessagesPanel />
    </main>
  );
}
