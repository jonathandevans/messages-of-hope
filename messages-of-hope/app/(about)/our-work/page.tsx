import Image from "next/image";
import Banner from "../banner";
import styles from "./page.module.css";
import ContactForm from "@/components/contact-form/contact-form";
import MessagePanel from "@/components/messages-panel/messages-panel";
import Button from "@/components/ui/button/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";

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
          they've been heard. It also provides individuals with a chance to know
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
                  we've had people, write messages, colour their feelings, and
                  draw on canvases. This again allows people to perform a
                  well-being check-i, provides a nice creative outlet in the
                  day, and gives the opportunity to talk and meet new people.
                </p>
                <p>
                  All of these activities are done the in form of events that
                  Messages of Hope puts on throughout the year.
                </p>
              </div>

              <Button href="/" className={styles.button}>
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
                  'Receiving a Bag of Hope when I was admitted to hospital gave
                  me hope and reminded me that I wasn't alone.' We are in
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
                  We're actively looking for organisations to partner with to
                  run MOH Social events, so please reach out if you want to be
                  involved.
                </p>
              </div>

              <Button href="/" className={styles.button}>
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
                  difference in someone's life.
                </p>
              </div>

              <Button href="/" className={styles.button} colour="yellow">
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

      <section className={styles.donate}>
        <div className={styles.inner}>
          <h2>Donate now to help bring a struggling patient some dignity</h2>
          <Link href="/get-involved">Donate Now</Link>
        </div>

        <svg
          width="579"
          height="219"
          viewBox="0 0 579 219"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.art}
        >
          <path
            d="M167.403 -41.8926L238.881 -29.4667L201.081 33.937L129.603 21.511L167.403 -41.8926Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M124.202 29.4785L195.68 41.9044L157.88 105.308L86.4022 92.8821L124.202 29.4785Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M81.0008 100.849L152.479 113.275L114.679 176.678L43.201 164.252L81.0008 100.849Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M37.7996 172.219L109.278 184.645L71.4779 248.048L-0.000150147 235.622L37.7996 172.219Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M255.776 -26.5293L327.254 -14.1034L289.454 49.3003L217.976 36.8743L255.776 -26.5293Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M212.574 44.8408L284.052 57.2667L246.252 120.67L174.774 108.244L212.574 44.8408Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M169.374 116.211L240.852 128.637L203.052 192.04L131.574 179.615L169.374 116.211Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M126.173 187.582L197.651 200.008L159.851 263.412L88.3729 250.986L126.173 187.582Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M344.149 -11.166L415.627 1.25989L377.828 64.6635L306.349 52.2376L344.149 -11.166Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M300.947 60.2041L372.425 72.63L334.625 136.034L263.147 123.608L300.947 60.2041Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M257.746 131.574L329.224 144L291.424 207.404L219.946 194.978L257.746 131.574Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M214.546 202.944L286.024 215.37L248.224 278.774L176.746 266.348L214.546 202.944Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M432.522 4.19626L504 16.6222L466.201 80.0258L394.723 67.5999L432.522 4.19626Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M389.32 75.5673L460.798 87.9933L422.998 151.397L351.52 138.971L389.32 75.5673Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M346.12 146.936L417.598 159.362L379.798 222.766L308.32 210.34L346.12 146.936Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M302.918 218.308L374.396 230.734L336.596 294.137L265.118 281.711L302.918 218.308Z"
            fill="#4C7194"
            fillOpacity="0.5"
          />
          <path
            d="M242.403 -58.5147L313.881 -46.0887L276.081 17.3149L204.603 4.88897L242.403 -58.5147Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M199.202 12.8564L270.68 25.2823L232.88 88.686L161.402 76.2601L199.202 12.8564Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M156.001 84.2265L227.479 96.6525L189.679 160.056L118.201 147.63L156.001 84.2265Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M112.8 155.597L184.278 168.023L146.478 231.426L74.9998 219L112.8 155.597Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M330.776 -43.1514L402.254 -30.7255L364.454 32.6782L292.976 20.2523L330.776 -43.1514Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M287.574 28.2187L359.052 40.6447L321.252 104.048L249.774 91.6224L287.574 28.2187Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M244.374 99.5888L315.852 112.015L278.052 175.418L206.574 162.992L244.374 99.5888Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M201.173 170.96L272.651 183.386L234.851 246.79L163.373 234.364L201.173 170.96Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M419.149 -27.7881L490.627 -15.3622L452.828 48.0415L381.349 35.6155L419.149 -27.7881Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M375.947 43.582L447.425 56.0079L409.625 119.412L338.147 106.986L375.947 43.582Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M332.746 114.952L404.224 127.378L366.424 190.782L294.946 178.356L332.746 114.952Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M289.546 186.322L361.024 198.748L323.224 262.152L251.746 249.726L289.546 186.322Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M507.522 -12.4258L579 0.000119533L541.201 63.4038L469.723 50.9778L507.522 -12.4258Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M464.32 58.9453L535.798 71.3712L497.998 134.775L426.52 122.349L464.32 58.9453Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M421.12 130.314L492.598 142.74L454.798 206.144L383.32 193.718L421.12 130.314Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
          <path
            d="M377.918 201.686L449.396 214.111L411.596 277.515L340.118 265.089L377.918 201.686Z"
            fill="#4C7194"
            fillOpacity="0.75"
          />
        </svg>
      </section>

      <ContactForm title="Get Involved" />

      <MessagePanel />
    </>
  );
};
export default OurWork;
