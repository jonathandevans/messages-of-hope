"use server";

import { createServerClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function passwordLoginAction(prevState: any, formData: FormData) {
  try {
    if ((formData.get("email") as string).trim() === "") {
      throw new Error("Missing email address");
    }

    if (
      (formData.get("email") as string).trim().length < 5 ||
      !(formData.get("email") as string).trim().includes("@")
    ) {
      throw new Error("Invalid email address");
    }

    if ((formData.get("password") as string).trim() === "") {
      throw new Error("Missing password");
    }

    const supabase = await createServerClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
    if (error) throw new Error(error.message);
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Something went wrong...",
    };
  }

  redirect("/dashboard");
}
