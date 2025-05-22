"use client";

import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ArrowRight, CircleUser } from "lucide-react";
import { createBrowserClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export function Header() {
  return (
    <header className="py-6 flex items-center justify-between w-[90%] max-w-7xl mx-auto">
      <nav className="font-quicksand font-semibold flex gap-8 items-center">
        <Link href="/dashboard" className="flex gap-2">
          <Image
            src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/mohLogo.png"
            alt=""
            width={5635}
            height={2152}
            className="h-12 w-auto"
          />
          <div className="flex flex-col font-coiny tracking-tighter text-2xl/5 text-moh-dark-blue">
            <span>Admin</span>
            <span>Console</span>
          </div>
        </Link>
        <Link href="/dashboard/messages">Messages</Link>
        <Link href="/dashboard/events">Events</Link>
      </nav>

      <div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="rounded-full" size="icon" variant="secondary">
              <CircleUser className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={async () => {
                const supabase = createBrowserClient();
                await supabase.auth.signOut();
                redirect("/login");
              }}
            >
              Log out
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/" className="flex justify-between">
                Go to site
                <ArrowRight className="size-4" />
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
