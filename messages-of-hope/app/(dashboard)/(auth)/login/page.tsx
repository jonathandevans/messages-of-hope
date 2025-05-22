"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useActionState, useState, useTransition } from "react";
import { passwordLoginAction } from "../actions";
import { cn } from "@/lib/utils";

export default function LoginRoute() {
  const [response, loginAction] = useActionState(passwordLoginAction, null);
  const [pending, startTransition] = useTransition();

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let valid = true;

    if ((formData.get("email") as string).trim() === "") {
      valid = false;
      setEmailError("Missing email address");
    } else if (
      (formData.get("email") as string).trim().length < 5 ||
      !(formData.get("email") as string).trim().includes("@")
    ) {
      valid = false;
      setEmailError("Invalid email address");
    }

    if ((formData.get("password") as string).trim() === "") {
      valid = false;
      setPasswordError("Missing password");
    }

    if (!valid) return;

    startTransition(() => {
      loginAction(formData);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Link
        href="/"
        className="w-fit text-xs text-zinc-500 flex gap-1 m-4 hover:underline"
      >
        <ChevronLeft className="size-4" />
        Back to main site
      </Link>
      <Card className="w-[90%] max-w-xl mx-auto mt-10">
        <CardHeader>
          <Image
            src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/mohLogo.png"
            alt=""
            width={5635}
            height={2152}
            className="h-14 w-auto mx-auto mb-4"
          />
          <CardTitle className="font-quicksand text-xl font-semibold tracking-tight">
            Log in.
          </CardTitle>
          <CardDescription>
            Log in to your account to access the MOH admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              disabled={pending}
              name="email"
              onChange={() => setEmailError(null)}
              className={cn(emailError ? "bg-red-100" : "")}
            />
            {emailError && <p className="text-xs text-red-500">{emailError}</p>}
          </div>
          <div className="grid gap-2">
            <Label>Password</Label>
            <Input
              disabled={pending}
              name="password"
              type="password"
              onChange={() => setPasswordError(null)}
              className={cn(passwordError ? "bg-red-100" : "")}
            />
            {passwordError && (
              <p className="text-xs text-red-500">{passwordError}</p>
            )}
          </div>
          {response?.error && (
            <p className="text-xs text-red-500">{response.error}</p>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-moh-dark-blue" disabled={pending}>
            {pending ? (
              <>
                <Loader2 className="size-4 animate-spin" /> Please wait
              </>
            ) : (
              <>Log in</>
            )}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
