import ContactForm from "@/components/frontend/contact-form/contact-form";
import Banner from "../banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/frontend/messages-panel/messages-panel";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Our Team",
  description:
    "Meet the team behind Messages of Hope and find out how you can get involved. Messages of Hope is a small team that all volunteer our time to help support our community. Each of us has our own history and our own reasons for why we do this work, but we all understand how important our work is.",
});

const OurTeam = () => {
  return (
    <>
      <Banner
        title="Meet The Team"
        image={{
          src: "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743849077/Connections_2024_Hoodies_1_gt6l1z_wt6lhj.jpg",
          alt: "Behind the scenes of Connections 2024 video",
          width: 4000,
          height: 6000,
        }}
        text={[
          "Messages of Hope is a small team that all volunteer our time to help support our community. Initially started by just Bethan, Jonathan has been behind the scenes helping her from the start. After incorporating into a Community Interest Company, Liv joined the team seeing the good work we do. We are always looking to make connections with other groups and organisations and would love to work with people just as passionate as us.",
          "Each of us has our own history and our own reasons for why we do this work, but we all understand how important our work is.",
        ]}
      />

      <section className={styles.team}>
        <article className={styles.member}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743849421/Bethan_Evans_Profile_1_ma8qkk_cawloa.jpg"
            alt="Bethan Evans"
            width={1536}
            height={2048}
          />
          <div className={styles.text}>
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

        <article className={styles.member}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743849699/Jonathan_Evans_Profile_1_liza9t_wnvo96.jpg"
            alt="Jonathan Evans"
            width={2419}
            height={3226}
          />
          <div className={styles.text}>
            <h2>
              Jonathan Evans <span>(he/him)</span>
            </h2>
            <h3>Director</h3>
            <p>
              <a href="mailto:jonathan@messagesofhope.co.uk">
                jonathan@messagesofhope.co.uk
              </a>
            </p>
            <p>
              Hi, I&apos;m Jonny, a director of Messages of Hope. My passion for
              using creativity to spread messages of hope stems from witnessing
              the toll mental health struggles have taken on people in his life.
              In the beginning, I was motivated by the personal experiences of
              the people around me. However, after a mental health crisis whilst
              away at university, I was admitted into a psychiatric ward and
              came to understand the work Messages of Hope does even more. I
              work behind the scenes in organising and overseeing various events
              to inspire and uplift individuals struggling with their mental
              health.
            </p>
          </div>
        </article>

        <article className={styles.member}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743801009/Messages_of_Hope_2020_1_w82msv_hkkvzh.jpg"
            alt="Liv Bell"
            width={864}
            height={864}
          />
          <div className={styles.text}>
            <h2>
              Liv Bell <span>(she/her)</span>
            </h2>
            <h3>Director</h3>
            <p>
              <a href="mailto:liv@messagesofhope.co.uk">
                liv@messagesofhope.co.uk
              </a>
            </p>
            <p>
              Hey, I&apos;m Liv, the newest director of Messages of Hope. After
              seeing the work that Beth has been doing this past year, I decided
              to join the team. I&apos;m looking forward to seeing how my
              contributions help Messages of Hope in the future.
            </p>
          </div>
        </article>

        <article className={styles.member}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743851918/Teddy_Bear_Profile_1_sf5rcj_faterz.jpg"
            alt="Teddy Bear"
            width={936}
            height={1403}
          />
          <div className={styles.text}>
            <h2>
              Teddy Bear <span>(she/her)</span>
            </h2>
            <h3>(Unofficial) Director</h3>
            <p>
              Woof woof! woof! Teddy is an unofficial director of Messages of
              Hope as Companies House won&apos;t let her be on the paperwork. Teddy
              is Bethan&apos;s constant companion and has been apart of the Messages
              of Hope team since adoption. With a wagging tail and a heart full
              of love, she is passionate about using cuddles to spread messages
              of hope and support to those struggling with their mental health.
              Her role as a director is crucial in creating a warm and welcoming
              environment.
            </p>
          </div>
        </article>
      </section>

      <ContactForm
        title="Join Our Team"
        description="We're a small team and we're always looking to make connections with teams, organisations and individuals. Use the form below to send us a message and we'll be in touch."
      />

      <MessagePanel />
    </>
  );
};
export default OurTeam;
