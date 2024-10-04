import { Metadata } from "next";

export const generateMetadata = ({
  title,
  absolute,
  description = "Collecting your messages of hope and spreading them far and wide.",
}: {
  title?: string;
  absolute?: string;
  description?: string;
} = {}): Metadata => {
  const _title = absolute ? absolute : title ? `${title} - Messages of Hope` : "Messages of Hope";

  return {
    title: _title,
    description,
    keywords: ["Mental Health", "Mental Illness", "BPD", "MOH", "Messages of Hope", "Hope"],

    openGraph: {
      title,
      description,
      images: [{ url: "/icon.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/icon.png"],
    },

    metadataBase: new URL(`${process.env.NEXT_PUBLIC_SERVER_URL}`),
    referrer: "origin-when-cross-origin",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
};
