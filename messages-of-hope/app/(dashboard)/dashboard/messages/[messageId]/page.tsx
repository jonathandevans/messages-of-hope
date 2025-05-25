import { EditMessageForm } from "@/components/dashboard/form/edit-message";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { createServerClient } from "@/lib/supabase/server";

export default async function MessageIdRoute({
  params,
}: {
  params: { messageId: string };
}) {
  const supabase = await createServerClient();
  const { data, error } = await supabase
    .from("messages")
    .select()
    .eq("id", params.messageId)
    .single();

  return (
    <>
      {data ? (
        <EditMessageForm message={data} />
      ) : (
        <Alert className="max-w-3xl mx-auto mt-4 w-[90%]">
          <AlertTitle>Failed to fetch message</AlertTitle>
          <AlertDescription>
            {error
              ? `${error.code}: ${error.message}`
              : "Something went wrong..."}
          </AlertDescription>
        </Alert>
      )}
    </>
  );
}
