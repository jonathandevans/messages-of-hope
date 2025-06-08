import { z } from "zod/v4";

export const newMessageSchema = z.object({
  message: z
    .string({
      error: (i) =>
        i.input === undefined ? "Message cannot be empty" : "Invalid input",
    })
    .min(3),
  submitted: z.date().optional(),
  source: z.enum(["website", "event", "instagram", "other"], {
    error: (i) =>
      i.input === undefined
        ? "Select a source option from the dropdown"
        : "Invalid input",
  }),
  category: z.enum(
    [
      "togetherness",
      "personal_stories",
      "reaching_out",
      "practical_advice",
      "affirmations",
      "recovery",
      "suicide_prevention",
      "uncategorised",
    ],
    {
      error: (i) =>
        i.input === undefined
          ? "Select a category option from the dropdown"
          : "Invalid input",
    }
  ),
  public: z.enum(["true", "false"]).default("false"),
  used: z.enum(["true", "false"]).default("false"),
  instagram_handle: z.string().optional(),
});

export const editMessageSchema = newMessageSchema.extend({
  id: z.uuid(),
  user_id: z.uuid(),
});
