"use client";

import { useActionState } from "react";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod/v4";
import { Check, Loader2, XIcon } from "lucide-react";
import { contactFormSchema } from "@lib/zod-schemas";
import { sendEmailAction } from "@/app/(frontend)/actions";
import styles from "@components/custom-css/contact-form.module.css";

export default function ContactForm({
    title = "Contact Us",
    description = "Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope event or would like to collaborate with us in any capacity we would love to hear from you.",
}: {
    title?: string;
    description?: string;
}) {
    const [prev, sendEmail, pending] = useActionState(
        sendEmailAction,
        undefined
    );
    const [form, fields] = useForm({
        lastResult: prev?.zodError,
        onValidate({ formData }) {
            return parseWithZod(formData, { schema: contactFormSchema });
        },
        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    return (
        <section className="bg-moh-dark-blue py-12 relative overflow-hidden">
            <div className={styles.ring1}>
                <span />
                <span />
                <span />
            </div>
            <div className={styles.ring2}>
                <span />
                <span />
                <span />
            </div>

            <div className="w-[90%] mx-auto max-w-(--section-width) flex flex-col gap-4">
                <h2 className="font-quicksand text-zinc-100 tracking-tighter text-3xl font-bold text-center">
                    {title}
                </h2>
                <p className="text-zinc-100">{description}</p>

                <form
                    action={sendEmail}
                    onSubmit={form.onSubmit}
                    id={form.id}
                    className="flex flex-col gap-2 z-3 lg:grid grid-cols-2 grid-rows-5 lg:gap-4 xl:grid-cols-3 relative"
                >
                    <div className="flex flex-col gap-2">
                        <input
                            placeholder="Name*"
                            aria-label="Name"
                            className="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md h-auto px-4 py-2"
                            disabled={pending}
                            key={fields.name.key}
                            name={fields.name.name}
                            defaultValue={fields.name.initialValue}
                        />
                        {fields.name.errors && (
                            <ul className="text-red-200 text-xs">
                                {fields.name.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input
                            placeholder="Email*"
                            aria-label="Email"
                            className="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md h-auto px-4 py-2"
                            disabled={pending}
                            key={fields.email.key}
                            name={fields.email.name}
                            defaultValue={fields.email.initialValue}
                            type="email"
                        />
                        {fields.email.errors && (
                            <ul className="text-red-200 text-xs">
                                {fields.email.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input
                            placeholder="Business/Organisation"
                            aria-label="Business/Organisation"
                            className="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md h-auto px-4 py-2"
                            disabled={pending}
                            key={fields.organisation.key}
                            name={fields.organisation.name}
                            defaultValue={fields.organisation.initialValue}
                        />
                        {fields.organisation.errors && (
                            <ul className="text-red-200 text-xs">
                                {fields.organisation.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <input
                            placeholder="Subject*"
                            aria-label="Subject"
                            className="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md h-auto px-4 py-2"
                            disabled={pending}
                            key={fields.subject.key}
                            name={fields.subject.name}
                            defaultValue={fields.subject.initialValue}
                        />
                        {fields.subject.errors && (
                            <ul className="text-red-200 text-xs">
                                {fields.subject.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <div className="flex flex-col gap-2 lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:h-auto xl:col-end-4">
                        <textarea
                            placeholder="Write your message here..."
                            aria-label="Message"
                            className="bg-zinc-100 border-moh-blue border-3 h-50 text-sm rounded-md px-2 py-2 lg:h-full"
                            disabled={pending}
                            key={fields.message.key}
                            name={fields.message.name}
                            defaultValue={fields.message.initialValue}
                        />
                        {fields.message.errors && (
                            <ul className="text-red-200 text-xs">
                                {fields.message.errors.map((error) => (
                                    <li key={error}>{error}</li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <button
                        disabled={pending}
                        className="font-heading font-semibold h-11 tracking-tight bg-moh-blue py-2 rounded-md hover:opacity-80 transition-all lg:col-span-2 xl:col-span-3 hover:cursor-pointer flex flex-row gap-2 justify-center items-center"
                    >
                        {pending ? (
                            <>
                                <Loader2 className="animate-spin size-4" />{" "}
                                Please wait
                            </>
                        ) : (
                            "Send Message"
                        )}
                    </button>
                </form>

                {prev?.error && (
                    <p className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-md flex gap-2 items-center font-heading font-semibold border-red-400 border-2">
                        <XIcon className="size-4 relative top-[1px]" />
                        {prev.error}
                    </p>
                )}

                {prev?.success && (
                    <p className="text-sm text-green-600 bg-green-50 px-3 py-2 rounded-md flex gap-2 items-center font-heading font-semibold border-green-400 border-2">
                        <Check className="size-4 relative top-[1px]" />
                        Your message has been sent! We'll be in touch soon
                    </p>
                )}
            </div>
        </section>
    );
}
