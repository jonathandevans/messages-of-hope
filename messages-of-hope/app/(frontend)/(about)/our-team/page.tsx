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

export default function OurTeamRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <AboutBanner
        title="Meet The Team"
        image={{
          src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_hoodies.jpg",
          alt: "Behind the scenes of Connections 2024 video",
          width: 4000,
          height: 6000,
        }}
        text={[
          "Messages of Hope is a small team that all volunteer our time to help support our community. Initially started by just Bethan, Jonathan has been behind the scenes helping her from the start. After incorporating into a Community Interest Company, Liv joined the team seeing the good work we do. We are always looking to make connections with other groups and organisations and would love to work with people just as passionate as us.",
          "Each of us has our own history and our own reasons for why we do this work, but we all understand how important our work is.",
        ]}
      />

      <section>
        <article>
          <Image src="" alt="Bethan Evans" width={1536} height={2048} />
          <div>
            <h2>
              Bethan Evans <span>(she/her)</span>
            </h2>
            <h3>Founder and Director</h3>
            <p>
              <a href="mailto:bethan@messagesofhope.co.uk">
                bethan@messagesofhope.co.uk
              </a>
            </p>
            <p>
              Hi, I&apos;m Beth, the founder of Messages of Hope. I&apos;m a
              mental health advocate and a filmmaker, using creativity to spread
              messages of hope and support to those struggling with their mental
              health. My personal experiences with Borderline Personality
              Disorder and journey through recovery deeply inform my work,
              driving my commitment to inspire others and advocate for better
              mental health care.
            </p>
          </div>
        </article>
      </section>

      <ContactForm
        title="Join Our Team"
        description="We're a small team and we're always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we'll be in touch."
      />

      <MessagesPanel />
    </main>
  );
}
