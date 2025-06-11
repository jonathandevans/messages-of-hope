import { AboutBanner } from "@/components/frontend/about-banner";
import { ContactForm } from "@/components/frontend/contact-form";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Our Team",
  description:
    "Meet the team behind Messages of Hope and find out how you can get involved. Messages of Hope is a small team that all volunteer our time to help support our community. Each of us has our own history and our own reasons for why we do this work, but we all understand how important our work is.",
});

const teamMembers = [
  {
    name: "Bethan Evans",
    pronouns: "she/her",
    role: "Founder and Director",
    email: "bethan@messagesofhope.co.uk",
    text: "Hi, I'm Beth, the founder of Messages of Hope. I'm a mental health advocate and a filmmaker, using creativity to spread messages of hope and support to those struggling with their mental health. My personal experiences with Borderline Personality Disorder and journey through recovery deeply inform my work, driving my commitment to inspire others and advocate for better mental health care.",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/static/bethan_evans.jpg",
      alt: "Bethan Evans",
      width: 1536,
      height: 2048,
    },
  },
  {
    name: "Jonathan Evans",
    pronouns: "he/him",
    role: "Director",
    email: "jonathan@messagesofhope.co.uk",
    text: "Hi, I'm Jonny, a director of Messages of Hope. My passion for using creativity to spread messages of hope stems from witnessing the toll mental health struggles have taken on people in his life. In the beginning, I was motivated by the personal experiences of the people around me. However, after a mental health crisis whilst away at university, I was admitted into a psychiatric ward and came to understand the work Messages of Hope does even more. I work behind the scenes in organising and overseeing various events to inspire and uplift individuals struggling with their mental health.",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/static/jonathan_evans.jpg",
      alt: "Jonathan Evans",
      width: 2419,
      height: 3226,
    },
  },
  {
    name: "Liv Bell",
    pronouns: "she/her",
    role: "Director",
    email: "liv@messagesofhope.co.uk",
    text: "Hey, I'm Liv, the newest director of Messages of Hope. After seeing the work that Beth has been doing this past year, I decided to join the team. I'm looking forward to seeing how my contributions help Messages of Hope in the future.",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/static/moh_2020.jpg",
      alt: "Liv Bell",
      width: 864,
      height: 864,
    },
  },
  {
    name: "Teddy Bear",
    pronouns: "she/her",
    role: "(Unofficial) Director",
    email: null,
    text: "Woof woof! woof! Teddy is an unofficial director of Messages of Hope as Companies House won't let her be on the paperwork. Teddy is Bethan's constant companion and has been apart of the Messages of Hope team since adoption. With a wagging tail and a heart full of love, she is passionate about using cuddles to spread messages of hope and support to those struggling with their mental health. Her role as a director is crucial in creating a warm and welcoming environment.",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/static/teddy_bear.jpg",
      alt: "Teddy Bear",
      width: 936,
      height: 1403,
    },
  },
];

export default function OurTeamRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <AboutBanner
        title="Meet The Team"
        image={{
          src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/static/connections_hoodies.jpg",
          alt: "Behind the scenes of Connections 2024 video",
          width: 4000,
          height: 6000,
        }}
        text={[
          "Messages of Hope is a small team that all volunteer our time to help support our community. Initially started by just Bethan, Jonathan has been behind the scenes helping her from the start. After incorporating into a Community Interest Company, Liv joined the team seeing the good work we do. We are always looking to make connections with other groups and organisations and would love to work with people just as passionate as us.",
          "Each of us has our own history and our own reasons for why we do this work, but we all understand how important our work is.",
        ]}
      />

      <section className="grid gap-8 w-[90%] max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="flex flex-col justify-center items-center gap-4 md:flex-row md:gap-8 md:justify-start"
          >
            <Image
              src={member.image.src}
              alt={member.image.alt}
              width={member.image.width}
              height={member.image.height}
              className="w-full aspect-square object-cover rounded-lg border-8 border-moh-yellow max-w-xs"
            />
            <div className="grid gap-1">
              <h2 className="text-2xl font-semibold tracking-tight font-quicksand">
                {member.name}{" "}
                <span className="text-sm font-normal italic text-muted-foreground">
                  ({member.pronouns})
                </span>
              </h2>
              <h3 className="text-lg tracking-tight font-quicksand">
                {member.role}
              </h3>
              {member.email && (
                <a
                  className="underline text-moh-dark-blue"
                  href={`mailto:${member.email}`}
                >
                  {member.email}
                </a>
              )}

              <p>{member.text}</p>
            </div>
          </article>
        ))}
      </section>

      <ContactForm
        title="Join Our Team"
        description="We're a small team and we're always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we'll be in touch."
      />

      <MessagesPanel />
    </main>
  );
}
