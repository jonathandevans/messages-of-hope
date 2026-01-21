import type { FormEvent } from "preact/compat";
import { useState } from "preact/hooks";
import styles from "@components/custom-css/contact-form.module.css"

export default function ContactForm({
    title = "Contact Us",
    description = "Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope event or would like to collaborate with us in any capacity we would love to hear from you.",
}) {
    interface ResponseState {
        status: "ready" | "pending" | "error" | "success";
        message?: string;
    }
    const [status, setStatus] = useState<ResponseState>({ status: "ready" });

    const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            setStatus({ status: "pending" });

            const form = event.currentTarget;
            const formElements = form.elements;
            const formContent = {
                name: (formElements.namedItem("name") as HTMLInputElement)
                    .value,
                email: (formElements.namedItem("email") as HTMLInputElement)
                    .value,
                organisation: (
                    formElements.namedItem("organisation") as HTMLInputElement
                ).value,
                subject: (formElements.namedItem("subject") as HTMLInputElement)
                    .value,
                message: (
                    formElements.namedItem("message") as HTMLTextAreaElement
                ).value,
            };

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formContent),
            });
            const data = await response.json();

            if (data.error)
                setStatus({ status: "error", message: data.message });
            if (data.success) {
                form.reset();
                setStatus({
                    status: "success",
                    message:
                        "Your message has been sent! We'll get back to you soon.",
                });
            }
        } catch {
            setStatus({
                status: "error",
                message: "Oops! Something went wrong, try again later.",
            });
        }
    };

    return (
        <section class="bg-moh-dark-blue py-12 relative overflow-hidden">
            <div class={styles.ring1}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class={styles.ring2}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div class="w-[90%] mx-auto max-w-(--custom-width) flex flex-col gap-4">
                <h2 class="font-quicksand text-zinc-100 tracking-tighter text-3xl font-bold text-center">
                    {title}
                </h2>
                <p class="text-zinc-100">{description}</p>

                {status.status === "success" && (
                    <p class="px-4 py-2 rounded-md bg-green-200 border-green-400 border-2">
                        Your message has been sent! We'll get back to you soon.
                    </p>
                )}
                {status.status === "error" && (
                    <p class="px-4 py-2 rounded-md bg-red-200 border-red-400 border-2">
                        {status.message}
                    </p>
                )}

                <form
                    class="flex flex-col gap-2 lg:grid grid-cols-2 grid-rows-5 lg:gap-4 xl:grid-cols-3 relative z-3"
                    onSubmit={onSubmit}
                >
                    <input
                        placeholder="Name*"
                        aria-label="Name"
                        class="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md py-2 px-4"
                        name="name"
                        required
                        disabled={status.status === "pending"}
                    />
                    <input
                        placeholder="Email*"
                        aria-label="Email"
                        class="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md py-2 px-4"
                        name="email"
                        type="email"
                        disabled={status.status === "pending"}
                    />
                    <input
                        placeholder="Business/Organisation"
                        aria-label="Business/Organisation"
                        class="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md py-2 px-4"
                        name="organisation"
                        disabled={status.status === "pending"}
                    />
                    <input
                        placeholder="Subject*"
                        aria-label="Subject"
                        class="bg-zinc-100 border-moh-blue border-3 text-sm rounded-md py-2 px-4"
                        name="subject"
                        required
                        disabled={status.status === "pending"}
                    />
                    <textarea
                        placeholder="Write your message here..."
                        aria-label="Message"
                        class="bg-zinc-100 border-moh-blue border-3 h-50 lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:h-auto xl:col-end-4 text-sm rounded-md py-2 px-4"
                        name="message"
                        required
                        disabled={status.status === "pending"}
                    ></textarea>
                    <button
                        class={`font-heading font-semibold tracking-tight bg-moh-blue py-2 rounded-md hover:opacity-80 transition-all lg:col-span-2 xl:col-span-3 cursor-pointer ${
                            status.status === "pending" ? "text-zinc-500" : ""
                        }`}
                        type="submit"
                        disabled={status.status === "pending"}
                    >
                        {status.status === "pending"
                            ? "Please Wait"
                            : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}
