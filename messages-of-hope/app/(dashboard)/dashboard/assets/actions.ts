"use server";

import { createServerClient } from "@/lib/supabase/server";
import { newAssetSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";
import { redirect } from "next/navigation";

export async function newAssetAction(prevState: any, formData: FormData) {
  const supabase = await createServerClient();
  const { data } = await supabase.auth.getUser();

  // Validate user
  if (!data.user) redirect("/");

  // Validate form data
  const submission = parseWithZod(formData, {
    schema: newAssetSchema,
  });
  if (submission.status !== "success") return { zod_error: submission.reply() };

  const { data: image, error } = await supabase
    .from("assets")
    .insert({
      name: submission.value.name,
      alt_text: submission.value.alt_text,
      updated_by: data.user.id,
      file_type: submission.value.file_type,
    })
    .select("id")
    .single();

  if (error) return { error: `${error.code}: ${error.message}` };

  const { data: _data, error: _error } = await supabase.storage
    .from("private")
    .move(
      `temp/${data.user.id}.${submission.value.file_type}`,
      `general/${image.id}.${submission.value.file_type}`,
      {
        destinationBucket: "published",
      }
    );

  if (_error) return { error: `${_error.message}` };

  redirect("/dashboard/assets");
}
