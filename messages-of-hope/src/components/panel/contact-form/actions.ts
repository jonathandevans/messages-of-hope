"use server";

import { checkContactForm } from "@/lib/validator";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formContent: {
  name: string;
  email: string;
  organisation: string;
  subject: string;
  message: string;
}) => {
  const valid = checkContactForm(formContent);
  if (valid.error) return { error: valid.error };

  try {
    await resend.emails.send({
      from: "<NO-REPLY> no-reply@messagesofhope.co.uk",
      to: "contact@messagesofhope.co.uk",
      replyTo: formContent.email,
      subject: formContent.organisation
        ? `${formContent.organisation}: ${formContent.subject}`
        : formContent.subject,
      text: `${formContent.message}\n\n${formContent.name}`,
    });
  } catch (err) {
    console.log(err);
    return {
      error:
        "Oops...We couldn't send the message right now. Please try again later.",
    };
  }

  return { success: "Message sent successfully." };
};
