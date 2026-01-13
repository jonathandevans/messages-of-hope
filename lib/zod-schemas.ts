import { z } from "zod/v4";

export const contactFormSchema = z.object({
    name: z
        .string("Name required")
        .trim()
        .min(2, "Name must be at least 2 characters")
        .max(45, "Name must be less than 45 characters"),
    email: z.email("Email required"),
    organisation: z.optional(z.string()),
    subject: z.string("Subject required"),
    message: z.string("Message required").trim().min(5, "Message is too short"),
});
