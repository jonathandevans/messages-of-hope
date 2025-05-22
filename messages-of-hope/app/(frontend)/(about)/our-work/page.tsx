import Image from "next/image";
import Banner from "../banner";
import styles from "./page.module.css";
import ContactForm from "@/components/frontend/contact-form";
import MessagePanel from "@/components/frontend/messages-panel";
import Button from "@/components/frontend/button";
import { ArrowRight } from "lucide-react";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import DonatePanel from "@/components/frontend/donate-panel";

export const metadata: Metadata = generateMetadata({
  title: "Our Work",
  description:
    "By working with members of the community and other community organisations we look to improve the infrastructure in place for patients going through recovery, provide support for the individual through group activities and raise awareness for the current issues around mental health through collaborative art projects.",
});

const OurWork = () => {
  return (
    <>
      <Banner
        title="Our Work"
        image={{
          src: "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743783151/Thrive-LDN-home-page_uzgwqi.jpg",
          alt: "Behind the scenes of Connections 2024 video",
          width: 576,
          height: 352,
        }}
        text={[
          "Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. By working with members of the community and other community organisations we look to improve the infrastructure in place for patients going through recovery, provide support for the individual through group activities and raise awareness for the current issues around mental health through collaborative art projects. This is all done through our campaigns and events which are built around bringing people together through creative works.",
          "All the work we do is to support the three goals that we have identified as an organisation. It's so sad that our organisation is needed, yet the work we do is more important than ever.",
        ]}
      />

      <section className={styles.goals}>
        <h2>Our goals are to:</h2>
        <div className={styles.inner}>
          <div className={styles.content}>
            <p className={styles.number}>1.</p>
            <p className={styles.text}>
              Demonstrate the importance of <b>community support</b> in mental
              health. How many people feel alone?
            </p>
            <p className={styles.number}>2.</p>
            <p className={styles.text}>
              Bring mental health into the forefront of conversation alongside
              physical health.
            </p>
            <p className={styles.number}>3.</p>
            <p className={styles.text}>
              Provide direct support to those struggling with their mental
              health.
            </p>
          </div>

          <div className={styles.image}>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743595919/5CnpFGoOdE_k3kxev_1_gkehfp_htcqlm.jpg"
              alt="Speaker Box Party at Covent Gardens during Connections 2024 event"
              width={6000}
              height={4000}
            />
            <span />
          </div>
        </div>
      </section>

      <section className={styles.details}>
        <p>
          Whilst the goals of Messages of Hope are simple, they are at the heart
          of everything we do. From our own experiences in suffering from issues
          surrounding mental health, we have come to understand the importance
          of community in both recovery and prevention. This community could be
          as close as family or friends, or as wide as those with similar
          thoughts and feelings just in your area. By enabling an environment to
          allow a variety of people to come together in possibly a large
          creative project such as a video, or smaller arts and crafts, we
          strive to create a space in which people can share and feel like
          they&apos;ve been heard. It also provides individuals with a chance to know
          that they are not alone.
        </p>
        <p>
          Moving forward Messages of Hope would love to partner with more groups
          and organisations that to put on these events. All our campaigns and
          individual events exist to address our goals as well as providing key
          opportunities to help raise awareness.
        </p>
      </section>

      <section className={styles.facts}>
        <h2>Not-So-Fun Facts</h2>
        <div className={styles.inner}>
          <article>
            <p>1 in 4 people struggle with their mental health.</p>
          </article>
          <article>
            <p>1 in 5 people have suicidal thoughts.</p>
          </article>
          <article>
            <p>Suicide is the biggest killer of men under 45 in the UK.</p>
          </article>
        </div>

        <svg
          width="231"
          height="295"
          viewBox="0 0 231 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.art}
        >
          <circle cx="107" cy="132" r="117" stroke="#5E88A6" strokeWidth="14" />
          <circle cx="31" cy="202" r="82" stroke="#84B9D2" strokeWidth="22" />
          <circle cx="18" cy="44" r="139.5" stroke="#4C7194" strokeWidth="7" />
        </svg>
      </section>

      <section className={styles.doing}>
        <h2>What Are We Doing About It?</h2>
        <div className={styles.inner}>
          <article>
            <span />
            <div>
              <div className={styles.text}>
                <h3>Collaborative Art Projects</h3>
                <p>
                  Messages of Hope collaborates with other community
                  organisations to create videos for mental health awareness
                  days throughout the year. These videos will involve members of
                  the public sharing their messages of hope. We also work to
                  create Line of Hope displays which provide a space in which
                  people can reflect on their current head space and read
                  messages of hope provided from those around them displayed on
                  a line.
                </p>
                <p>
                  As an organisation we have done many pop-up art sessions where
                  we&apos;ve had people, write messages, colour their feelings, and
                  draw on canvases. This again allows people to perform a
                  well-being check-in, provides a nice creative outlet in the
                  day, and gives the opportunity to talk and meet new people.
                </p>
                <p>
                  All of these activities are done the in form of events that
                  Messages of Hope puts on throughout the year.
                </p>
              </div>

              <Button href="/line-of-hope" className={styles.button}>
                Learn More
                <ArrowRight size={16} strokeWidth={3} />
              </Button>
            </div>

            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743771007/Writing_a_Message_-_MOH_2023_1_ebwwtg_wbft8z.jpg"
              alt="Child writing on a canvas at the Messages of Hope 2023 event"
              width={3143}
              height={3143}
            />
          </article>

          <article>
            <span className={styles.yellow} />
            <div>
              <div className={styles.text}>
                <h3>Bags of Hope</h3>
                <p>
                  Bags of Hope is a project set up to provide patients arriving
                  on psychiatric wards with a bag of both essential and
                  self-care items. These bags contain items such as body wash,
                  wipes, socks, underwear, colouring books, phone chargers, and
                  activity books, all of which offer comfort and dignity to
                  patients during a challenging time. The bags are delivered to
                  local psychiatric wards across South Wales and England.
                </p>
                <p>
                  In 2024 alone, we received over 5000 donations and donated
                  over 250 bags to psychiatric wards. One patient commented,
                  &apos;Receiving a Bag of Hope when I was admitted to hospital gave
                  me hope and reminded me that I wasn&apos;t alone.&apos; We are in
                  constant communication with psychiatric patients and staff to
                  ensure that the items we are providing are useful and
                  appropriate.
                </p>
                <p>
                  Moving into 2025, we are partnering with organisations for bag
                  packing and bag decorating MOH socials.
                </p>
              </div>

              <Button
                href="/bags-of-hope"
                colour="yellow"
                className={styles.button}
              >
                Learn More
                <ArrowRight size={16} strokeWidth={3} />
              </Button>
            </div>

            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772017/Bags_of_Hope_1_kxut4v_knbzf5.jpg"
              alt="Bethan Evans behind a collection of bags for Bags of Hope"
              width={1536}
              height={1433}
            />
          </article>

          <article className={styles.swap1}>
            <span />
            <div>
              <div className={styles.text}>
                <h3>MOH Socials</h3>
                <p>
                  MOH Socials is a new type of event starting in 2025. These
                  socials are events in which we organise a few different
                  activities, such as bag packing, bag decorating, and clay
                  decorating, giving a space for the community to check in and
                  reach out to each other. At these events, we also perform
                  speeches explaining our experiences and the important work
                  that we do.
                </p>
                <p>
                  These socials also provide an opportunity to introduce some of
                  our other campaigns, such as getting attendees to donate items
                  and help pack bags. When partnering with other organisations
                  we also try and get attendees to submit messages so they can
                  be turned into a Line of Hope.
                </p>
                <p>
                  We&apos;re actively looking for organisations to partner with to
                  run MOH Social events, so please reach out if you want to be
                  involved.
                </p>
              </div>

              <Button href="/#events" className={styles.button}>
                Learn More
                <ArrowRight size={16} strokeWidth={3} />
              </Button>
            </div>

            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772678/9ntrQUf34S_sophiw_1_biixot_foa54p.jpg"
              alt="Canvas painting at the Messages of Hope 2023 event at Barry Island"
              width={5376}
              height={3584}
            />
          </article>

          <article className={styles.swap2}>
            <span className={styles.yellow} />
            <div>
              <div className={styles.text}>
                <h3>Collecting Your Messages</h3>
                <p>
                  Messages of Hope collects messages of hope and spreads them
                  far and wide. Keep an eye on our social media pages to see if
                  your message is shared. You can submit a message of hope via
                  our website whenever you like. We will then post the submitted
                  messages of hope on our social media, or your message might be
                  turned into a sticker and placed in various spots around the
                  local community.
                </p>
                <p>
                  Collecting these messages is part of our initial Messages of
                  Hope campaign which started this organisation. You can often
                  find us out in the community collecting messages from
                  strangers. Not only do these messages help others but we give
                  people the opportunity to perform a wellbeing check-in.
                </p>
                <p>
                  Write a message of hope for someone struggling with their
                  mental health. Your message could be the one that makes a
                  difference in someone&apos;s life.
                </p>
              </div>

              <Button href="/messages-of-hope" className={styles.button} colour="yellow">
                Learn More
                <ArrowRight size={16} strokeWidth={3} />
              </Button>
            </div>

            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772447/Writing_a_Message_-_Connections_2024_1_1_z5u3a0_kppujy.jpg"
              alt="Collecting messages in public"
              width={6000}
              height={4000}
            />
          </article>
        </div>
      </section>

      <DonatePanel />

      <ContactForm title="Get Involved" />

      <MessagePanel />
    </>
  );
};
export default OurWork;
