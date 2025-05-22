"use client";

import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  // TODO: Implement form

  return (
    <section className="bg-moh-dark-blue py-12">
      <div className="w-[90%] mx-auto max-w-7xl flex flex-col gap-4">
        <h2 className="font-quicksand text-zinc-100 tracking-tight text-3xl font-semibold text-center">
          Contact Us
        </h2>
        <p className="text-zinc-100">
          Messages of Hope welcomes collaborations with other businesses,
          organisations, charities, projects, schools and communities. If you're
          interested in hosting a Messages of Hope event or would like to
          collaborate with us in any capacity we would love to hear from you.
        </p>

        <form className="flex flex-col gap-2 lg:grid grid-cols-2 grid-rows-5 lg:gap-4 xl:grid-cols-3">
          <Input
            placeholder="Name*"
            className="bg-zinc-100 border-moh-blue border-3"
          />
          <Input
            placeholder="Email*"
            className="bg-zinc-100 border-moh-blue border-3"
          />
          <Input
            placeholder="Business/Organisation"
            className="bg-zinc-100 border-moh-blue border-3"
          />
          <Input
            placeholder="Subject*"
            className="bg-zinc-100 border-moh-blue border-3"
          />
          <Textarea
            placeholder="Write your message here..."
            className="bg-zinc-100 border-moh-blue border-3 h-50 lg:row-start-1 lg:row-end-5 lg:col-start-2 lg:h-auto xl:col-end-4"
          />
          <button className="font-quicksand font-semibold bg-moh-blue py-2 rounded-md hover:opacity-80 transition-all lg:col-span-2 xl:col-span-3">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
