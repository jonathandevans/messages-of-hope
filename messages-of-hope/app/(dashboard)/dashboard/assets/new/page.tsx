"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { formatISO } from "date-fns";
import {
  AlertCircle,
  CalendarIcon,
  ChevronLeft,
  FileImage,
  Loader2,
  XIcon,
} from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { useActionState, useRef, useState, useTransition } from "react";
import { useForm } from "@conform-to/react";
import { newAssetSchema, newMessageSchema } from "@/lib/zod-schemas";
import { parseWithZod } from "@conform-to/zod/v4";
import { newMessageAction } from "../../messages/actions";
import { createBrowserClient } from "@/lib/supabase/client";
import { newAssetAction } from "../actions";

export default function NewMessageRoute() {
  const router = useRouter();

  const [filetype, setFiletype] = useState<string | undefined>();
  const [tempImagePath, setTempImagePath] = useState<string | undefined>();

  const [prevResult, newAsset, pending] = useActionState(
    newAssetAction,
    undefined
  );
  const [form, fields] = useForm({
    id: "new-asset",
    lastResult: prevResult?.zod_error || null,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: newAssetSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <main className="w-[90%] mx-auto max-w-7xl flex flex-col gap-y-4 mb-12">
      <div className="flex items-center gap-x-2">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ChevronLeft className="size-5" />
        </Button>
        <h3 className="font-quicksand font-semibold tracking-tight text-xl">
          Go Back
        </h3>
      </div>

      {prevResult?.error && (
        <Alert>
          <AlertTitle className="text-lg flex gap-2 items-center">
            <AlertCircle className="text-red-500 bg-red-200 p-1.5 rounded-full size-7" />{" "}
            Oops something went wrong...
          </AlertTitle>
          <AlertDescription>{prevResult.error}</AlertDescription>
        </Alert>
      )}

      <form id={form.id} onSubmit={form.onSubmit} action={newAsset} noValidate>
        <Card>
          <CardHeader>
            <CardTitle className="font-quicksand font-bold text-3xl tracking-tighter">
              New Asset
            </CardTitle>
            <CardDescription>Add the details on the new asset.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>File Upload</Label>
                <input
                  type="hidden"
                  defaultValue={tempImagePath}
                  name={fields.image_path.name}
                  key={fields.image_path.key}
                />
                <input
                  type="hidden"
                  defaultValue={filetype}
                  name={fields.file_type.name}
                  key={fields.file_type.key}
                />
                <ImageUploader
                  setImagePath={setTempImagePath}
                  setFileType={setFiletype}
                />
                {fields.image_path.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.image_path.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
                {fields.file_type.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.file_type.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Name</Label>
                <Input name={fields.name.name} key={fields.name.key} />
                {fields.name.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.name.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="grid gap-2">
                <Label>Alt Text</Label>
                <Textarea
                  name={fields.alt_text.name}
                  key={fields.alt_text.key}
                />
                {fields.alt_text.errors && (
                  <ul className="text-red-500 text-xs">
                    {fields.alt_text.errors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button variant="secondary" disabled={pending} type="submit">
              {pending ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Please wait
                </>
              ) : (
                <>Add Asset</>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </main>
  );
}

function ImageUploader({
  setFileType,
  setImagePath,
}: {
  setFileType: (_: string | undefined) => void;
  setImagePath: (_: string | undefined) => void;
}) {
  const [dragOver, setDragOver] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [pending, startTransition] = useTransition();
  const [url, setUrl] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();

  const handleUpload = async (file: File) => {
    setError(undefined);

    const supabase = createBrowserClient();
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) redirect("/");
    let _filetype = file.name.split(".");
    let filetype = _filetype[_filetype.length - 1];
    const { data, error } = await supabase.storage
      .from("private")
      .upload(`temp/${user.user.id}.${filetype}`, file, {
        upsert: true,
      });
    if (error) {
      setError(`${error.name}: ${error.message}`);
      return;
    }

    if (data?.path) {
      const _url = await supabase.storage
        .from("private")
        .createSignedUrl(data.path, 600);
      setUrl(_url.data?.signedUrl!);
      setImagePath(data.path);
      setFileType(filetype);
    }
  };

  return (
    <>
      {url ? (
        <div>
          <div className="relative w-fit">
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="absolute -right-2 -top-2"
              onClick={() => {
                setImagePath(undefined);
                setUrl(undefined);
                setFileType(undefined);
              }}
            >
              <XIcon />
            </Button>
            <img src={url} alt="Uploaded image" className="max-w-[250px]" />
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col items-center justify-center gap-y-1 border transition-all rounded-md py-10",
            dragOver ? "border-primary" : "border-zinc-200"
          )}
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setDragOver(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();

            setDragOver(false);
            const file = e.dataTransfer.files[0];
            startTransition(async () => await handleUpload(file));
          }}
        >
          <input
            form=""
            type="file"
            name="image"
            accept="image/*"
            className="hidden"
            ref={inputRef}
            onChange={(e) => {
              if (!e.target.files) return;
              const file = e.target.files[0];

              startTransition(async () => await handleUpload(file));
            }}
          />

          {pending ? (
            <>
              <Loader2 className="bg-primary/20 p-2 size-15 rounded-full mx-auto text-primary animate-spin" />
              <h6 className="text-lg font-quicksand font-semibold tracking-tight">
                Image is being uploaded
              </h6>
              <p className="text-muted-foreground text-sm">
                Just bear with us a moment, your image is being uploaded.
              </p>
            </>
          ) : (
            <>
              {" "}
              <FileImage className="bg-primary/20 p-2 size-15 rounded-full mx-auto text-primary" />
              <h6 className="text-lg font-quicksand font-semibold tracking-tight">
                Upload an Image
              </h6>
              <p className="text-muted-foreground text-sm">
                Either{" "}
                <Button
                  variant="link"
                  className="p-0"
                  onClick={() => inputRef.current?.click()}
                  type="button"
                >
                  click here
                </Button>{" "}
                to upload an image, or drag and drop.
              </p>
              {error && <p className="text-xs text-red-500">{error}</p>}
            </>
          )}
        </div>
      )}
    </>
  );
}
