import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Header() {
    const navLinks = [
        { name: "About", href: "/our-work" },
        { name: "Campaigns", href: "/campaigns" },
        { name: "Events", href: "/events" },
        { name: "Write a Message", href: "/write-a-message" },
        { name: "Get Involved", href: "/get-involved" },
    ];

    return (
        <header className="h-20 w-[90%] max-w-(--section-width) mx-auto flex items-center justify-between font-heading font-semibold">
            <nav className="flex items-center gap-x-6">
                <Link href="/">
                    <Image
                        src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/moh-logo.png"
                        alt="Messages of Hope Logo"
                        title="Messages of Hope"
                        loading="eager"
                        width={5635}
                        height={2152}
                        className="h-12 w-auto"
                    />
                </Link>
                {navLinks.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="hidden tracking-tight md:block hover:text-foreground/75 transition-all"
                    >
                        {item.name}
                    </Link>
                ))}
            </nav>

            <a
                href="https://www.instagram.com/messagesof.hope/"
                target="_blank"
                className="hidden lg:flex items-center gap-x-1.5 tracking-tight bg-moh-blue transition-all py-1 px-3 rounded-sm hover:bg-moh-blue/75 hover:cursor-pointer"
            >
                <Instagram aria-hidden="true" className="size-5" />
                Instagram
            </a>
        </header>
    );
}
