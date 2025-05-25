export type Message = {
  id: string;
  message: string;
  submitted: string | null;
  source: "website" | "event" | "instagram" | "other";
  category:
    | "togetherness"
    | "personal_stories"
    | "reaching_out"
    | "practical_advice"
    | "affirmations"
    | "recovery"
    | "suicide_prevention"
    | "uncategorised";
  public: boolean;
  used: boolean;
  instagram_handle: string | null;
};