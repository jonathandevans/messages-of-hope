import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Campaigns",
  description:
    "The campaigns Messages of Hope organise are a form of long term projects that has been created to support our goals as a CIC. These campaigns are used as a part of events, for example at MOH Socials we will do Bags of Hope bag packing, or create a new Line of Hope. The pop-up art events that we do all go to support the original Messages of Hope campaign.",
});

export default function CampaignsRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <section className="py-12 bg-moh-blue">
        <div className="max-w-7xl mx-auto w-[90%] grid gap-3">
          <h1 className="font-coiny text-5xl tracking-tighter">Campaigns</h1>
          <p>
            The campaigns Messages of Hope organise are a form of long term
            projects that has been created to support our goals as a CIC. These
            campaigns are used as a part of events, for example at MOH Socials
            we will do Bags of Hope bag packing, or create a new Line of Hope.
            The pop-up art events that we do all go to support the original
            Messages of Hope campaign. All of these campaigns focus on using
            creativity to bring people together, which is at the very heart of
            what Messages of Hope does.
          </p>
        </div>
      </section>

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col gap-4 items-center sm:grid grid-cols-2 grid-rows-[3fr_2fr] sm:justify-stretch sm:items-stretch">
        <Link
          href="/bags-of-hope"
          className="w-full aspect-square rounded-2xl border-6 border-moh-dark-blue p-8 flex flex-col justify-end items-start max-w-sm transition-all text-white hover:text-moh-blue bg-cover bg-no-repeat bg-border sm:aspect-auto sm:max-w-none lg:gap-1"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/react_bag_packing.jpg')",
            backgroundColor: "var(--color-moh-dark-blue)",
            backgroundPosition: "left 50% top 90%",
          }}
        >
          <h2 className="text-2xl font-bold font-quicksand tracking-tight sm:text-3xl lg:text-4xl">
            Bags of Hope
          </h2>
          <p className="text-sm italic md:text-base lg:text-lg">
            Because no patient should feel alone
          </p>
        </Link>
        <Link
          href="/line-of-hope"
          className="w-full aspect-square rounded-2xl border-6 border-moh-dark-blue p-8 flex flex-col justify-end items-start max-w-sm transition-all text-white hover:text-moh-blue bg-cover bg-no-repeat bg-border sm:aspect-auto sm:max-w-none lg:gap-1"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/urdang_line.jpg')",
            backgroundColor: "var(--color-moh-dark-blue)",
            backgroundPosition: "left 50% top 50%",
          }}
        >
          <h2 className="text-2xl font-bold font-quicksand tracking-tight sm:text-3xl lg:text-4xl">
            Line of Hope
          </h2>
          <p className="text-sm italic md:text-base lg:text-lg">
            When you need a lifeline
          </p>
        </Link>
        <Link
          href="/messages-of-hope"
          className="w-full aspect-square rounded-2xl border-6 border-moh-dark-blue p-8 flex flex-col justify-end items-start max-w-sm transition-all text-white hover:text-moh-blue bg-cover bg-no-repeat bg-border sm:aspect-auto sm:max-w-none lg:gap-1 col-start-1 col-end-3 sm:h-80 md:h-60"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/barry_ymca.jpg')",
            backgroundColor: "var(--color-moh-dark-blue)",
            backgroundPosition: "left 50% top 50%",
          }}
        >
          <h2 className="text-2xl font-bold font-quicksand tracking-tight sm:text-3xl lg:text-4xl">
            Messages of Hope
          </h2>
          <p className="text-sm italic md:text-base lg:text-lg">
            Reaching out to support each other
          </p>
        </Link>
      </section>

      <MessagesPanel />
    </main>
  );
}
