import { Banner } from "@/components/panel/banner/banner";
import styles from "./page.module.css";
import { MessageSlideshow } from "@/components/panel/message-slideshow/message-slideshow";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";

const Page = () => {
  return (
    <>
      <Banner title="Messages of Hope 2023" image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726436475/591zjjboIe_xgbsiy.jpg" short={true} />

      <MaxWidthWrapper className={styles.panel}>
        <div className={styles.content}>
          <div className={styles.images}>
            <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726436211/9ntrQUf34S_sophiw.jpg" alt="A group of people writing messages of hope on canvases at the Messages of Hope 2023 event" />
            <img src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726427892/Messages%20of%20Hope%202023.jpg" alt="Painted rocks with messages written on them" />
          </div>
          <div className={styles.text}>
            <p>On the 29th of July 2023, Messages of Hope hosted a transformative collaborative art project at Barry Island, which turned out to be a resounding success. The event saw an overwhelming outpouring of support, with over 200 heartfelt messages collected and countless inspiring and empowering conversations shared. People of all ages, from children to adults, left their marks on pre-prepared canvases, filling them with messages of hope and encouragement.</p>
            <p>Beyond the canvases, attendees had the opportunity to write their messages on pebbles, adding a unique touch to the project. A dedicated colouring station provided a space for mindfulness and creativity, allowing participants to take a peaceful break and express their hopes through art.</p>
            <p>We are immensely grateful to everyone who supported and participated in this campaign. Your contributions have created a tapestry of hope that we are excited to share with the broader community. You can view the finished canvases at the Barry YMCA in The Vale of Glamorgan, a testament to the collective spirit of hope and resilience.</p>
          </div>
        </div>

        <img className={styles.image} src="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726436669/64iJ879h4k_f2a9ga.jpg" alt="Bethan Evans standing in front of the full canvases created at the Messages of Hope 2023 event in the Barry YMCA" />
      </MaxWidthWrapper>

      <MessageSlideshow />
    </>
  );
};
export default Page;