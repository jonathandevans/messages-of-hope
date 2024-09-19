"use server";

import { db } from "@/db";
import { checkMessageSubmission } from "@/lib/validator";

export const submitMessage = async (messageContents : { message: string, handle: string }) => {
  const valid = checkMessageSubmission(messageContents);
  if (valid.error) return { error: valid.error };

  let _handle = null;
  if (messageContents.handle.trim() != "") {
    _handle = messageContents.handle.trim();
    if (_handle.startsWith("@")) _handle = _handle.substring(1);
  }

  try {
    await db.message.create({
      data: {
        message: messageContents.message,
        instagramHandle: _handle,
      }
    });
  } catch (err) {
    console.log(err);
    return { error: "Oops...Something went wrong. Please try again later." }
  }

  return { success: "Message submitted." };
};