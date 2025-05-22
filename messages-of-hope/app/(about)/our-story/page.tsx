import MessagePanel from "@/components/frontend/messages-panel/messages-panel";
import Banner from "../banner";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Our Story",
  description:
    "Messages of Hope started as a single video to help people feeling lonely and struggling in isolation. After a series of viral social media posts, the interest in Messages of Hope greatly expanded, leading us to establish Messages of Hope as a Community Interest Company.",
});

const OurStory = () => {
  return (
    <>
      <Banner
        title="Our Story"
        image={{
          src: "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743799491/Bethan_Evans_-_Connections_2024_1_ocefdr_t8dnbr.jpg",
          alt: "Bethan Evans at the scene of Connections 2024 video",
          width: 6000,
          height: 2400,
        }}
        text={[
          "Messages of Hope was never meant to become this, it was never our intention. Starting in Covid, Messages of Hope was just a single video to help people feeling lonely and struggling in isolation. After a series of viral social media posts, the interest in Messages of Hope greatly expanded, leading us to establish Messages of Hope as a Community Interest Company.",
          "As a company, we're only just getting started and we're still growing. Messages of Hope has lots of plans for the future, so keep an eye on our social media for more.",
        ]}
      />

      <section className={styles.timeline}>
        <article className={styles.year}>
          <h2>
            <span />
            2020 - The start of Messages of Hope
          </h2>
          <div className={styles.content}>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743801009/Messages_of_Hope_2020_1_w82msv_hkkvzh.jpg"
              alt="Messages of Hope 2020 video"
              width={864}
              height={864}
            />
            <div className={styles.text}>
              <p>
                Bethan Evans is the Creator and Director of Messages of Hope.
              </p>
              <p>
                Messages of Hope was first created in 2020. However between the
                years of 2019 and 2022 Bethan was at war with her mental health,
                more specifically Borderline Personality Disorder, therefore the
                growth and development of Messages of Hope slipped far down on
                her list of priorities. In November 2022 Bethan made an
                extremely serious attempt to end her life which resulted in her
                hospitalisation. Following this suicide attempt Bethan made a
                conscious effort to turn her life around and to this day, she
                remains in recovery and out of hospital for over a year. Bethan
                wants to use her story to inspire others to keep fighting. She
                wants everyone to know that they have a purpose in this world
                and usually we feel most lost right before we are found. Suicide
                is not the answer and it never will be.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.year}>
          <h2>
            <span />
            2023 - Our first event
          </h2>
          <div className={styles.content}>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772678/9ntrQUf34S_sophiw_1_biixot_foa54p.jpg"
              alt="Canvas painting at the Messages of Hope 2023 event at Barry Island"
              width={5376}
              height={3584}
            />
            <div className={styles.text}>
              <p>
                On July 29, 2023, Messages of Hope hosted its first
                collaborative art project at Barry Island, which turned out to
                be a resounding success. The event saw an overwhelming
                outpouring of support, with over 200 heartfelt messages
                collected and countless inspiring and empowering conversations
                shared. People of all ages, from children to adults, left their
                marks on pre-prepared canvases, filling them with messages of
                hope and encouragement.
              </p>
              <p>
                Beyond the canvases, attendees had the opportunity to write
                their messages on pebbles, adding a unique touch to the project.
                A dedicated colouring station provided a space for mindfulness
                and creativity, allowing participants to take a peaceful break
                and express their hopes through art.
              </p>
              <p>
                We are immensely grateful to everyone who supported and
                participated in this event. Your contributions have created a
                tapestry of hope that we are excited to share with the broader
                community. You can view the finished canvases at the Barry YMCA
                in The Vale of Glamorgan, a testament to the collective spirit
                of hope and resilience.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.year}>
          <h2>
            <span />
            2024 - Getting the ball rolling
          </h2>
          <div className={styles.content}>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743549732/eT3lf4bF2M_tl9glu_1_hmnuzy_rgpkdl.jpg"
              alt="Connections 2024 event at Convent Gardens London"
              width={4800}
              height={2649}
            />
            <div className={styles.text}>
              <p>
                2024 was a big year for Messages of Hope. This year MOH saw the
                official start of the Bags of Hope campaign and hosted a major
                event in the form of Connections 2024. Early 2024 saw the
                interest in our organisation raised considerably with a number
                of viral TikTok posts. It was in this year we truly saw the
                effect of what our work can do for both the community and the
                individual. Bags of Hope received over 5000 donations allowing
                us to make over 250 bags, an incredible outpouring of support
                from the community. We also had the opportunity to partner with
                Thrive LDN, and with the backing of the Mayor of London,
                participated in Great Mental Health Day in the form of a video
                project.
              </p>
              <p>
                Bethan&apos;s work was also recognised this year being awarded the
                Mental Health and Wellbeing Award in Wales for Most Inspiring
                Individual.
              </p>
            </div>
          </div>
        </article>

        <article className={styles.year}>
          <h2>
            <span />
            2025 - When life doesn&apos;t give you lemons, go and find some
          </h2>
          <div className={styles.content}>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743801009/Messages_of_Hope_2020_1_w82msv_hkkvzh.jpg"
              alt=""
              width={864}
              height={864}
            />
            <div className={styles.text}>
              <p>
                Moving from our big year, we were really excited to see how we
                could keep growing. Unfortunately, the funding we applied for
                fell through, which admittedly knocked our confidence and had us
                doubting the work we do and our value. This led us to get back
                out into the community to remind us why Messages of Hope was
                created. This slight setback will not stop us from working to
                help others, if anything, we will work harder.
              </p>
              <p>
                Our resilience has already started to be rewarded with our Bags
                of Hope packing events with React Support Services and Barry&apos;s
                Social Sisters.
              </p>
            </div>
          </div>
        </article>
      </section>

      <MessagePanel className={styles.messages} />
    </>
  );
};
export default OurStory;
