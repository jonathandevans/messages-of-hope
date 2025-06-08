"use server";

import { createServerClient } from "@/lib/supabase/server";
import { editMessageSchema, newMessageSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";
import { redirect } from "next/navigation";

export async function newMessageAction(prevState: any, formData: FormData) {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getUser();

  // Validate user
  if (!data.user) redirect("/");

  // Validate form data
  const submission = parseWithZod(formData, {
    schema: newMessageSchema,
  });
  if (submission.status !== "success") return { zod_error: submission.reply() };

  const { error } = await supabase.from("messages").insert({
    ...submission.value,
    updated_by: data.user.id,
    updated_at: new Date(),
  });

  if (error) return { error: `${error.code}: ${error.message}` };

  redirect("/dashboard/messages");
}

export async function editMessageAction(prevState: any, formData: FormData) {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getUser();

  // Validate user
  if (!data.user) redirect("/");

  // Validate form data
  const submission = parseWithZod(formData, {
    schema: editMessageSchema,
  });
  if (submission.status !== "success") return { zod_error: submission.reply() };

  const { error } = await supabase
    .from("messages")
    .update({
      message: submission.value.message,
      submitted: submission.value.submitted,
      source: submission.value.source,
      category: submission.value.category,
      public: submission.value.public,
      used: submission.value.public,
      instagram_handle: submission.value.instagram_handle,
      updated_by: submission.value.user_id,
      updated_at: new Date(),
    })
    .eq("id", submission.value.id);
  if (error) return { error: `${error.code}: ${error.message}` };

  return { success: true };
}
