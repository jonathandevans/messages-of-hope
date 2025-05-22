import MessagePanel from "@/components/frontend/messages-panel/messages-panel";
import styles from "./page.module.css";
import Image from "next/image";
import ContactForm from "@/components/frontend/contact-form/contact-form";
import Banner from "@/components/frontend/banner/banner";
import Button from "@/components/frontend/button/button";
import { ArrowRight } from "lucide-react";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Line of Hope",
  description:
    "Line of Hope displays are a collaborative art project, which provide a space in which people can reflect on their current mindfulness and read messages of hope provided from those around them displayed on a line. These messages are about providing people in a time of need and the space to get them. We partner with other organisations to setup a stall to gather messages from the community, these are written on cards.",
});

const LineOfHope = () => {
  return (
    <>
      <Banner
        backgroundCss={styles.banner}
        title="Line of Hope"
        description="When you need a lifeline"
      />

      <section className={styles.what}>
        <div className={styles.text}>
          <h2>What is Line of Hope?</h2>
          <p>
            Line of Hope displays are a collaborative art project, which provide
            a space in which people can reflect on their current mindfulness and
            read messages of hope provided from those around them displayed on a
            line. These messages are about providing people in a time of need
            and the space to get them. We partner with other organisations to
            setup a stall to gather messages from the community, these are
            written on cards. These cards are displayed hanging from a line and
            we recommend the local community to keep hanging up new messages
            each time they visit the line.
          </p>
          <p>
            The construction of one of these displays is often part of a larger
            event, in which we have other creative activities, and often perform
            bag packing.
          </p>
          <Button
            className={styles.button}
            href="/events/feeling-blue-2024"
            colour="outline"
          >
            Check out our Latest Line
            <ArrowRight size={16} strokeWidth={3} />
          </Button>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743941814/9ABE0968-F0FB-4DEE-9599-76481991A720_bamcgz.jpg"
          alt="The Line of Hope at City Lit"
          width={3024}
          height={4032}
        />
      </section>

      <ContactForm
        title="Want To Create Your Own Line?"
        description="Messages of Hope welcomes collaborations with other businesses, organisations, charities, projects, schools and communities. If you're interested in hosting a Messages of Hope event and building a Line of Hope, or would like to collaborate with us in any capacity we would love to hear from you."
      />

      <MessagePanel />
    </>
  );
};
export default LineOfHope;
