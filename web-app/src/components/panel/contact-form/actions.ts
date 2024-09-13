"use server";

import { db } from "@/db";

const nameRegex = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendMessage = async (name : string, email : string, organisation : string, subject : string, message : string) => {
  if (!name.match(nameRegex) && !email.match(emailRegex) && subject.length <= 1 && message.length <= 5)
    return { error: "Invalid data" };

  try {
    await db.contactForm.create({
      data: {
        name,
        email,
        organisation: organisation == "" ? null : organisation,
        subject,
        message
      },
    });
  } catch {
    return { error: "We couldn't send the message right now" };
  }

  return { success: "Message sent successfully" };
};