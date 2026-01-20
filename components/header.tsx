"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Instagram, Menu, XIcon } from "lucide-react";

export default function Header() {
    const navLinks = [
        { name: "About", href: "/our-work" },
        { name: "Campaigns", href: "/campaigns" },
        { name: "Events", href: "/events" },
        { name: "Write a Message", href: "/write-a-message" },
        { name: "Get Involved", href: "/get-involved" },
    ];

    const [showMobile, setShowMobile] = useState(false);

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

            <button
                className="md:hidden cursor-pointer"
                onClick={() => setShowMobile(true)}
            >
                <Menu className="size-6" />
            </button>

            {showMobile && (
                <div className="fixed bg-background w-full h-full top-0 left-0 z-100 md:hidden!">
                    <nav className="flex flex-col gap-2 p-5 items-center">
                        <button
                            className="self-end cursor-pointer"
                            onClick={() => setShowMobile(false)}
                        >
                            <XIcon className="size-6" />
                        </button>
                        <Link
                            href="/"
                            className="w-fit"
                            onClick={() => setShowMobile(false)}
                        >
                            <Image
                                src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/moh-logo.png"
                                alt="Messages of Hope Logo"
                                width={5635}
                                height={2152}
                                className="h-12 w-auto"
                            />
                        </Link>
                        {navLinks.map((item) => (
                            <Link
                                onClick={() => setShowMobile(false)}
                                key={item.href}
                                href={item.href}
                                className="font-semibold text-md hover:underline"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
