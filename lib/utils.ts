import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Metadata } from "next";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const generateMetadata = ({
    title,
    absolute,
    description = "Your mental health matters to us. Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. We organise a range of projects each year, each designed to connect communities through creativity and collective empathy.",
    index = true,
    canonical,
    path,
}: {
    title?: string;
    absolute?: string;
    description?: string;
    index?: boolean;
    canonical?: string;
    path?: string;
} = {}): Metadata => {
    const _title = absolute
        ? absolute
        : title
        ? `${title} | Messages of Hope`
        : "Messages of Hope";

    return {
        title: _title,
        description,
        keywords: [
            "Mental Health",
            "Mental Illness",
            "BPD",
            "MOH",
            "Messages of Hope",
            "Hope",
        ],

        openGraph: {
            title,
            description,
            images: [{ url: "/favicon.svg" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/favicon.svg"],
        },

        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        referrer: "origin-when-cross-origin",
        formatDetection: {
            email: false,
            address: false,
            telephone: false,
        },

        robots: {
            index: index,
            follow: index,
            nocache: !index,
        },

        alternates: {
            canonical: canonical
                ? canonical
                : path
                ? `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
                : "",
        },
    };
};
