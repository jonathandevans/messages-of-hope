import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { TextPanel } from "@/components/panel/text-panel/text-panel";
import styles from "./page.module.css";
import { Metadata } from "next";
import { generateMetadata } from "@/lib/utils";

export const metadata : Metadata = generateMetadata({ absolute: "Messages of Hope 2020", description: "Messages of Hope 2020 was the first campaign created by Messages of Hope. Learn more about the campaign and watch the video." }); 


const Page = () => {
  return (
    <>
      <Banner title="Messages of Hope 2020" image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg" short={true} />

      <TextPanel imageSrc="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726700836/zrsECJjlTf_tx1c9o_1_tawdab.jpg" imageAlt="A photographer taking a photo of someone holding a whiteboard with a message of hope" contentClassName={styles.text}>
        <p>2020 was the year in which Messages of Hope was created. I was twenty years old and had been struggling with my mental health for a long time. I was extremely passionate about mental health advocacy and desperately wanted to think of a way to give hope to others. At this point in my mental health journey, I had not yet been diagnosed with Borderline Personality Disorder but the symptoms of this illness were beginning to seep into my life.</p>
        <p>I had just moved home to South Wales after dropping out of my second year of university because my mental health was severly impacting my studies, when the idea of Messages of Hope came to me.</p>
        <p>In 2020 I collected 200 messages in a week. I displayed all of these messages on a mural that I created in my kitchen, recorded a video of the me creating the mural and tried to share as many of the messages as I could.</p>
        <p>I was determined to show everyone that was struggling how many strangers cared about them. I needed people to know that so many people cared about them.</p>
        <p>Reading all of the message submissions, it was truly incredible and inspiring. People had written about their circumstances and struggles, they provided signposting information, and they wrote their favourite quotes, books, films and TV shows that have helped them through difficult times, practical advice, and words of support, love, and wisdom.</p>
        <p>It was becoming clear that not only was this campaign giving hope to people who needed it most, but it was also giving a voice to people who just wanted to be heard.</p>
        <p>In addition to all of the messages that were collected, I also gave everyone an opportunity to submit a video of themselves, which would allow them to be featured in the campaign video.</p>
      </TextPanel>

      <MaxWidthWrapper>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/8fgUuvxVQMA?si=9VihF4hNWLOhZckK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={styles.iframe} />
      </MaxWidthWrapper>

      <MessageSlideshow />
    </>
  );
};
export default Page;