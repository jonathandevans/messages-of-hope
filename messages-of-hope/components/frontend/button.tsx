import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Button({
  text,
  colour = "blue",
  href,
  className: _className = "",
  size = "base",
}: {
  text: string;
  colour?: "blue" | "yellow" | "outline";
  href: string;
  className?: string;
  size?: "base" | "sm";
}) {
  return (
    <Link
      href={href}
      className={cn(
        `${_className}`,
        "flex gap-2 items-center font-quicksand font-semibold tracking-tight w-fit py-2 px-4 transition-all rounded-md hover:opacity-85",
        colour === "blue" ? "bg-moh-blue" : "",
        colour === "yellow" ? "bg-moh-yellow" : "",
        colour === "outline"
          ? "border-2 border-moh-dark-blue text-moh-dark-blue"
          : "",
        size === "sm" ? "text-sm py-1.5 px-3" : ""
      )}
    >
      {text} <ArrowRight className="size-4" />
    </Link>
  );
}
