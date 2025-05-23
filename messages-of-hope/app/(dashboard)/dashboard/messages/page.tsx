import { MessagesTable } from "@/components/dashboard/messages-table";

export default async function MessagesDashboard() {
  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-16 mt-2 mb-12">
      <MessagesTable />
    </main>
  );
}
