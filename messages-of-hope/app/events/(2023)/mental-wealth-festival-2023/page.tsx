import Banner from "@/components/banner/banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Image from "next/image";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Mental Wealth Festival 2023",
  description:
    "Messages of Hope hosted a very successful project at City Lit on the 12th October 2023 as part of their Mental Wealth Festival. The afternoon was spent encouraging individuals to write messages of hope for people struggling with their mental health in order to fill a canvas that will be displayed in City Lit.",
});

const MentalWealthFestival2023 = () => {
  return (
    <>
      <Banner
        title="Mental Wealth Festival 2023"
        description="12th October 2023"
        backgroundCss={styles.banner}
      />

      <section className={styles.panel}>
        <div className={styles.text}>
          <p>
            Messages of Hope hosted a very successful project at City Lit on the
            12th October 2023 as part of their Mental Wealth Festival. The
            afternoon was spent encouraging individuals to write messages of
            hope for people struggling with their mental health in order to fill
            a canvas that will be displayed in City Lit.
          </p>
          <p>
            In addition to our usual message writing we also encouraged people
            to colour in the emotion they were feeling in order to create a
            colourful collaborative art piece. Each colour was assigned an
            emotion and members of the public were encouraged to colour in the
            canvas as they please. City Lit&apos;s Mental Wealth Festival was an
            incredible opportunity for us to connect with other creatives that
            use art and creativity to aid their mental health and well-being.
          </p>
          <p>
            To view these canvases, make sure you visit City Lit next time
            you&apos;re in London. Be sure to follow{" "}
            <a
              href="https://www.instagram.com/messagesof.hope/"
              target="_blank"
            >
              @messagesof.hope
            </a>{" "}
            on Instagram in order to see the anonymous message that you wrote,
            posted.
          </p>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743979621/Photo1_vol0nl.jpg"
          alt=""
          width={1200}
          height={1600}
        />
      </section>

      <MessagePanel />
    </>
  );
};
export default MentalWealthFestival2023;
