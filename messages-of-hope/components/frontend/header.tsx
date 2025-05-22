import Link from "next/link";
import Image from "next/image";
import { Instagram, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";

const navLinks = [
  { name: "About", href: "/our-work" },
  { name: "Campaigns", href: "/campaigns" },
  { name: "Events", href: "/events" },
  { name: "Write a Message", href: "/write-a-message" },
  { name: "Get Involved", href: "/get-involved" },
];

export function Header() {
  return (
    <header
      className={`h-20 w-[90%] max-w-7xl mx-auto flex items-center justify-between font-quicksand font-semibold`}
    >
      <nav className="flex items-center gap-x-6">
        <Link href="/">
          <Image
            src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/mohLogo.png"
            alt="Messages of Hope Logo"
            width={5635}
            height={2152}
            className="h-12 w-auto"
          />
        </Link>
        {navLinks.map((item) => (
          <Link key={item.href} href={item.href} className="hidden md:block">
            {item.name}
          </Link>
        ))}
      </nav>

      <div>
        <Link
          href="https://www.instagram.com/messagesof.hope/"
          target="_blank"
          className="hidden lg:flex items-center gap-x-2 bg-moh-blue transition-all py-1 px-3 rounded-sm hover:bg-moh-blue/70"
        >
          <Instagram className="size-5" />
          Instagram
        </Link>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button size="icon" variant="ghost">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-sky-100 overflow-y-scroll scrollbar-hidden">
            <SheetHeader>
              <SheetTitle />
            </SheetHeader>
            <nav className={`flex flex-col items-center gap-y-8`}>
              <Link href="/">
                <Image
                  src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/mohLogo.png"
                  alt="Messages of Hope Logo"
                  width={5635}
                  height={2152}
                  className="h-12 w-auto"
                />
              </Link>
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-semibold text-md"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
