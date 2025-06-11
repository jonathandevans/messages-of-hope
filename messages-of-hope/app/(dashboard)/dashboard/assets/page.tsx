"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createBrowserClient } from "@/lib/supabase/client";
import {
  CirclePlus,
  Loader2,
  MoreHorizontal,
  OctagonAlert,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AssetsDashboardRoute() {
  const [supabase] = useState(() => createBrowserClient());

  const [publicImages, setPublicImages] = useState<any>();
  const [publicError, setPublicError] = useState<string | undefined>();

  useEffect(() => {
    const getData = async () => {
      setPublicError(undefined);

      const { data, error } = await supabase.from("assets").select("*");
      if (error) {
        setPublicError(`${error.code}: ${error.message}`);
        return;
      }
      setPublicImages(data);
    };

    getData();
  }, []);

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-6 mb-12">
      <section className="flex items-center justify-end">
        <Button
          className="w-fit flex gap-2 self-end font-quicksand font-semibold bg-moh-dark-blue hover:bg-moh-dark-blue/80"
          asChild
        >
          <Link href="/dashboard/assets/new">
            <CirclePlus /> Add Asset
          </Link>
        </Button>
      </section>

      <section className="flex flex-col gap-2">
        {publicError ? (
          <Alert className="max-w-xl mx-auto">
            <AlertTitle className="text-lg font-quicksand font-semibold flex items-center gap-2">
              <OctagonAlert className="text-red-500" /> Failed to fetch data
            </AlertTitle>
            <AlertDescription>{publicError}</AlertDescription>
          </Alert>
        ) : !publicImages ? (
          <Alert className="max-w-xl mx-auto">
            <AlertTitle className="text-lg font-quicksand font-semibold flex items-center gap-2">
              <Loader2 className="animate-spin" /> Fetching data...
            </AlertTitle>
            <AlertDescription>
              Currently fetching the table data based on the filters.
            </AlertDescription>
          </Alert>
        ) : (
          <div className="flex flex-wrap gap-4">
            {publicImages.map((item, index) => (
              <Card key={index} className="w-full max-w-xs relative">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-1 right-1"
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard.writeText(
                          supabase.storage
                            .from("published")
                            .getPublicUrl(
                              `general/${item.id!}.${item.file_type!}`
                            ).data.publicUrl
                        );
                      }}
                    >
                      Copy URL
                    </DropdownMenuItem>
                    <DropdownMenuItem>Download</DropdownMenuItem>
                    <DropdownMenuItem>Options</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <img
                  src={
                    supabase.storage
                      .from("published")
                      .getPublicUrl(`general/${item.id!}.${item.file_type!}`)
                      .data.publicUrl
                  }
                  alt="Uploaded asset"
                  className="h-50 object-contain"
                />
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.alt_text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
