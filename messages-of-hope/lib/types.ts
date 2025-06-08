export const sourceOptions = [
  { value: "website", label: "Website" },
  { value: "event", label: "Event" },
  { value: "instagram", label: "Instagram" },
  { value: "other", label: "Other" },
];

export const categoryOptions = [
  { value: "personal_stories", label: "Personal Stories" },
  { value: "togetherness", label: "Togetherness" },
  { value: "reaching_out", label: "Reaching Out" },
  { value: "practical_advice", label: "Practical Advice" },
  { value: "affirmations", label: "Affirmations" },
  { value: "recovery", label: "Recovery" },
  { value: "suicide_prevention", label: "Suicide Prevention" },
  { value: "uncategorised", label: "Uncategorised" },
];

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