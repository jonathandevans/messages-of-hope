"use client";

import { submitMessageAction } from "@/app/(frontend)/actions";
import { ArrowRight } from "lucide-react";
import { useActionState } from "react";

export function MessageSubmissionForm() {
  const [ state, action, pending ] = useActionState(submitMessageAction, null);

  return (
    <form className="w-[90%] max-w-7xl mx-auto flex flex-col gap-4" action={action}>
      <textarea
        name="message"
        placeholder="Write your message of hope here..."
        className="h-120 p-4 w-full rounded-xl border-4 border-moh-dark-blue focus:border-moh-blue sm:h-80"
      />
      <div className="flex flex-col gap-4 md:flex-row md:gap-8 items-end">
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="instagram-handle">Instagram Handle (optional):</label>
          <input
            type="text"
            id="instagram-handle"
            name="instagram-handle"
            className="p-4 w-full rounded-xl border-4 border-moh-dark-blue focus:border-moh-blue"
            placeholder="@yourhandle"
          />
        </div>
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-moh-yellow p-4 rounded-xl font-quicksand font-semibold hover:opacity-80 transition-all md:px-8 md:py-5 md:w-fit md:min-w-fit"
          disabled={pending}
        >
          Submit Message <ArrowRight className="size-4 relative top-[1px]" />
        </button>
      </div>
      {state?.error && (
        <p className="text-red-500 text-center">
          {state.error}
        </p>
      )}
    </form>
  );
}
