import Banner from "@/components/frontend/banner";
import styles from "./page.module.css";
import MessagePanel from "@/components/frontend/messages-panel";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Messages of Hope 2020",
  description:
    "2020 was the year in which Messages of Hope was created. In 2020 Bethan collected 200 messages in a week. She then displayed all of these messages on a mural that she created in her kitchen, recorded a video of herself creating the mural and tried to share as many of the messages as possible. Bethan was determined to show everyone that was struggling how many strangers cared about them. She needed people to know that so many people cared about them.",
});

const MessagesOfHope2020 = () => {
  return (
    <>
      <Banner
        title="Messages of Hope 2020"
        description="21st May 2020"
        backgroundCss={styles.banner}
      />

      <section className={styles.text}>
        <h2>Where it all began...</h2>
        <p>
          2020 was the year in which Messages of Hope was created. Bethan was
          twenty years old and had been struggling with her mental health for a
          long time. Beth was extremely passionate about mental health advocacy
          and desperately wanted to think of a way to give hope to others. At
          this point in her mental health journey, Bethan had not yet been
          diagnosed with Borderline Personality Disorder but the symptoms of
          this illness were beginning to seep into her life.
        </p>
        <p>
          Beth had just moved home to South Wales after dropping out of her
          second year of university because Bethan&apos;s mental health was severly
          impacting her studies, when the idea of Messages of Hope came to her.
        </p>
        <p>
          In 2020 Bethan collected 200 messages in a week. She then displayed
          all of these messages on a mural that she created in her kitchen,
          recorded a video of herself creating the mural and tried to share as
          many of the messages as possible.
        </p>
        <p>
          Bethan was determined to show everyone that was struggling how many
          strangers cared about them. She needed people to know that so many
          people cared about them.
        </p>
        <p>
          Reading all of the message submissions, it was truly incredible and
          inspiring. People had written about their circumstances and struggles,
          they provided signposting information, and they wrote their favourite
          quotes, books, films and TV shows that have helped them through
          difficult times, practical advice, and words of support, love, and
          wisdom.
        </p>
        <p>
          It was became clear that not only was this campaign giving hope to
          people who needed it most, but it was also giving a voice to people
          who just wanted to be heard.
        </p>
        <p>
          In addition to all of the messages that were collected, Bethan also
          gave everyone an opportunity to submit a video of themselves, which
          would allow them to be featured in the campaign video.
        </p>
      </section>

      <section className={styles.text}>
        <h2>The video...</h2>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/8fgUuvxVQMA?si=i6M7_OtfSXpfxk0q"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </section>

      <MessagePanel />
    </>
  );
};
export default MessagesOfHope2020;
