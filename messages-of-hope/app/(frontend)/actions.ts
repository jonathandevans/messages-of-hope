"use server";

import { createAdminClient } from "@/lib/supabase/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_KEY);

export async function sendEmailAction(prevState: any, formData: FormData) {
  try {
    await resend.emails.send({
      from: "NO-REPLY <no-reply@messagesofhope.co.uk>",
      to: "contact@messagesofhope.co.uk",
      replyTo: formData.get("email") as string,
      subject: formData.get("organisation")
        ? `${formData.get("organisation")}: ${formData.get("subject")}`
        : (formData.get("subject") as string),
      text: `${formData.get("message")}\n\n${formData.get("name")}`,
    });
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong...",
    };
  }

  return { success: true };
}

export async function getMessagesAction() {
  try {
    const supabase = await createAdminClient();
    const { data, error } = await supabase.from("public_messages").select();

    if (error) throw new Error(error.message);

    return { messages: data.map((item) => item.message) };
  } catch (error) {
    return { error: "Failed" };
  }
}
