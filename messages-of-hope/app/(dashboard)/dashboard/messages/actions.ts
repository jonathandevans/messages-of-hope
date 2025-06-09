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

  console.log(submission.value);

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
  if (submission.status !== "success")
    return { error: `Error when parsing the data` };

  const { data: _data, error } = await supabase
    .from("messages")
    .update({
      ...submission.value,
      updated_by: data.user.id,
      updated_at: new Date(),
    })
    .eq("id", submission.value.id)
    .select()
    .single();
  if (error) return { error: `${error.code}: ${error.message}` };

  return { success: _data };
}
