import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function EventsDashboardRoute() {
  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-6 mb-12">
      <section className="flex items-center justify-end">
        <Button
          className="w-fit flex gap-2 self-end font-quicksand font-semibold bg-moh-dark-blue hover:bg-moh-dark-blue/80"
          asChild
        >
          <Link href="/dashboard/events/new">
            <CirclePlus /> Create Event
          </Link>
        </Button>
      </section>
    </main>
  );
}
