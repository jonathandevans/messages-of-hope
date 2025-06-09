"use server";

import { createServerClient } from "@/lib/supabase/server";
import { newEventSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";
import { redirect } from "next/navigation";

export async function newEventAction(prevState: any, formData: FormData) {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getUser();

  // Validate user
  if (!data.user) redirect("/");

  // Validate form data
  const submission = parseWithZod(formData, {
    schema: newEventSchema,
  });
  if (submission.status !== "success") return { zod_error: submission.reply() };

  const { error } = await supabase.from("events").insert({
    ...submission.value,
    updated_by: data.user.id,
    updated_at: new Date(),
  });

  if (error) return { error: `${error.code}: ${error.message}` };

  redirect("/dashboard/events");
}
