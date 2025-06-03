import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Events",
  description:
    "Messages of Hope puts on numerous events throughout the year to further support our campaigns. These events over the years have included video projects, pop-up art events, and bag packing. From 2025, we're starting MOH socials, where we partner with other groups to organise several creative activities, such as Line of Hope setups and bag decorating for Bags of Hope, in a fun social environment.",
});

export default function EventRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <section className="py-12 bg-moh-blue">
        <div className="max-w-7xl mx-auto w-[90%] grid gap-3">
          <h1 className="font-coiny text-5xl tracking-tighter">Events</h1>
          <p>
            Messages of Hope puts on numerous events throughout the year to
            further support our campaigns. These events over the years have
            included video projects, pop-up art events, and bag packing. From
            2025, we're starting MOH socials, where we partner with other groups
            to organise several creative activities, such as Line of Hope setups
            and bag decorating for Bags of Hope, in a fun social environment.
          </p>
        </div>
      </section>
    </main>
  );
}
