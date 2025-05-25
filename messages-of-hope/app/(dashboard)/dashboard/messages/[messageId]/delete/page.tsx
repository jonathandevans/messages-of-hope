"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { createBrowserClient } from "@/lib/supabase/client";
import { AlertCircle } from "lucide-react";
import { redirect, useParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function MessageDeleteRoute() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { messageId } = useParams();

  return (
    <>
      {error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-8" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Card className="max-w-xl mx-auto w-[90%]">
        <CardHeader>
          <CardTitle className="font-quicksand font-semibold text-xl">
            Are you sure?
          </CardTitle>
          <CardDescription>
            You are about to delete a message from the server. All copies of
            this message will be lost and cannot be restored.
          </CardDescription>
          <div className="flex justify-between">
            <Button variant="outline" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={async () => {
                try {
                  const supabase = createBrowserClient();
                  const { error } = await supabase
                    .from("messages")
                    .delete()
                    .eq("id", messageId);
                  if (error) throw new Error(`${error.code}: ${error.message}`);
                } catch (error) {
                  setError(
                    error instanceof Error
                      ? error.message
                      : "Couldn't delete the message"
                  );
                }

                redirect(`/dashboard/messages`);
              }}
            >
              Delete Forever
            </Button>
          </div>
        </CardHeader>
      </Card>
    </>
  );
}
