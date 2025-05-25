import { MessagesTable } from "@/components/dashboard/messages-table";
import { Button } from "@/components/ui/button";
import { createServerClient } from "@/lib/supabase/server";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default async function MessagesDashboard() {
  const supabase = await createServerClient();
  const { count, status, statusText } = await supabase
    .from("messages")
    .select("*", { count: "exact", head: true });

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-6 mb-12">
      <section className="flex items-center justify-between">
        <p className="text-lg font-semibold font-quicksand">
          {count ? <>Total Collected Messages: {count}</> : ""}
        </p>

        <Button
          className="w-fit flex gap-2 self-end font-quicksand font-semibold bg-moh-dark-blue hover:bg-moh-dark-blue/80"
          asChild
        >
          <Link href="/dashboard/messages/new">
            <CirclePlus /> Add Message
          </Link>
        </Button>
      </section>

      <MessagesTable />
    </main>
  );
}
