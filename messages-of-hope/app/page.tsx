import Button from "@/components/ui/button/button";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contact-form/contact-form";
import MessagesPanel from "@/components/messages-panel/messages-panel";

const Home = () => {
  return (
    <>
      <svg
        className={styles.rightLines}
        width="509"
        height="3472"
        viewBox="0 0 509 3472"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M534.116 -370.136C534.116 -370.136 281.033 -405.069 433.832 158.595C586.631 722.259 144.932 765.454 144.932 765.454"
          stroke="#F59F0A"
          strokeWidth="3"
        />
        <path
          d="M631.308 3445.18C631.308 3445.18 878.666 3411.36 499.281 2481.13C119.896 1550.89 507.44 1309.37 507.44 1309.37"
          stroke="#F59F0A"
          strokeWidth="3"
        />
        <path
          d="M370.612 -230.358C370.612 -230.358 739.521 -21.7239 495.548 273.623C251.576 568.97 292.823 903.085 292.823 903.085"
          stroke="#2F4A6F"
          strokeWidth="3"
        />
        <path
          d="M722.282 3138.88C722.282 3138.88 294.849 2911.84 393.802 2302.76C492.755 1693.67 313.195 1123.75 313.195 1123.75"
          stroke="#2F4A6F"
          strokeWidth="3"
        />
        <path
          d="M394.07 -272.907C540.73 151.386 466.244 502.87 187.543 878.765"
          stroke="#98D3E7"
          strokeWidth="4"
        />
        <path
          d="M718.766 3222.24C404.114 2533.89 323.532 1890.09 420.244 1126.83"
          stroke="#98D3E7"
          strokeWidth="4"
        />
      </svg>

      <section className={styles.banner}>
        <div className={styles.hero}>
          <span className={styles.art1} />
          <span className={styles.art2} />

          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743549732/eT3lf4bF2M_tl9glu_1_hmnuzy_rgpkdl.jpg"
            alt="Connections 2024 filming at Convent Gardens London"
            width={4800}
            height={2649}
          />
        </div>

        <div className={styles.content}>
          <h1>Your mental health matters to us.</h1>
          <p>
            Messages of Hope is a Community Interest Company encouraging people
            to write hopeful messages for those struggling with mental health.
            We organise a range of projects each year, each designed to connect
            communities through creativity and collective empathy. Our
            initiatives include collaborative art pieces, video projects for
            mental health awareness days, and public displays of messages of
            hope.
          </p>
          <div className={styles.links}>
            <Button href="/write-a-message" colour="yellow">
              Write a Message
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
            <Button href="/events/react-bag-packing">
              Our Latest Event
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.getInvolved}>
        <div className={styles.ring1}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.ring2}>
          <span />
          <span />
          <span />
        </div>

        <h2>How can you help us change lives?</h2>
        <div className={styles.links}>
          <span className={styles.art1} />
          <span className={styles.art2} />
          <span className={styles.art3} />

          <Link
            href="/get-involved"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dl6zbzu06/image/upload/v1743592893/IMG_1599_wpo5wq.jpg')",
            }}
            className={styles.link1}
          >
            <h3>Donate</h3>
            <p>
              Help us to help more people. Messages of Hope relies on donations
              to continue our work in the community
            </p>
          </Link>
          <Link
            href="https://www.instagram.com/messagesof.hope/"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dl6zbzu06/image/upload/v1743596025/PtSSYegxG0_kqt4qv_1_kc0aqo_jw54ot.jpg')",
            }}
            className={styles.link2}
            target="_blank"
          >
            <h3>Follow our Instagram</h3>
            <p>
              We use our socials to spread our messages, news and our upcoming
              events. Follow and engage to show support
            </p>
          </Link>
          <Link
            href="/our-work"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dl6zbzu06/image/upload/v1743595919/5CnpFGoOdE_k3kxev_1_gkehfp_htcqlm.jpg')",
            }}
            className={styles.link3}
          >
            <h3>Our Work</h3>
            <p>
              Learn more about what we do and how we use our donations to help
              the community
            </p>
          </Link>
        </div>
      </section>

      <section className={styles.upcomingEvents} id="events">
        <h2>Upcoming Events</h2>
        <div className={styles.list}>
          <article>
            <Image
              src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743611410/Speech_at_Connections_2024_2_kwm5ya_py0fcd.jpg"
              width={6000}
              height={4000}
              alt="Speech at Connections 2024 event at Covent Gardens"
            />
            <div>
              <h4>Tuesday 8th April 2025</h4>
              <h3>Bags of Hope at Social Sisters</h3>
              <p>
                On Tuesday 8th of April, Messages of Hope will be collaborating
                with the Barry Social Sisters in a bag-packing event for our
                Bags of Hope campaign. This event marks the start of our efforts
                to run community bag-packing events in the form of MOH Socials.
                Members of Barry's Social Sisters have been collecting items for
                the past few weeks that we will organise and place into bags to
                donate to patients in the South Wales area. This event will
                include bag decorating, message writing, and clay decorating.
              </p>
              <p>
                We aim to provide a space that allows members of the community
                to come together and support each other through creative
                activities. Keep an eye on our socials for updates on the event.
              </p>
              <Button colour="outline" href="/bags-of-hope" className={styles.button}>
                Learn More <ArrowRight strokeWidth={3} size={16} />
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.ourStory}>
        <h2>Our Story So Far...</h2>
        <div className={styles.content}>
          <Image
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743625430/Image_n57zls.png"
            width={535}
            height={616}
            alt="Roadmap of Messages of Hope history"
          />
          <div>
            <p>
              Messages of Hope was first created in 2020 by Bethan Evans. This
              saw the creation of the "There is Hope" video, in which people in
              the South Wales area wrote messages for those struggling with
              their mental health during COVID-19. However, between the years of
              2019 and 2022, Bethan was at war with her mental health, more
              specifically Borderline Personality Disorder, therefore the growth
              and development of Messages of Hope slipped far down on her list
              of priorities.
            </p>
            <p>
              In November 2022 Bethan made an extremely serious attempt to end
              her life which resulted in her hospitalisation. Following this
              suicide attempt, Bethan made a conscious effort to turn her life
              around and to this day, she remains in recovery and out of
              hospital for over a year. This led to a resurgence of Messages of
              Hope in 2023.
            </p>
            <p>
              This started with the Messages of Hope 2023 event in which we got
              more members of the public to participate in a collaborative art
              project at Barry Island. People of all ages, left their marks on
              pre-prepared canvases, filling them with messages of hope which we
              later displayed at the Barry YMCA in the Vale of Glamorgan. Moving
              into 2024, Messages of Hope officially became a CIC and started
              the Bags of Hope campaign. Through this campaign, we provide
              essential items to patients arriving in psychiatric wards. Since
              starting this campaign we have seen thousands of donated items,
              allowing us to create over 300 bags, and we're only just getting
              started.
            </p>
            <p>
              Our work at Messages of Hope is ongoing and we look forward to the
              next chapter in our journey.
            </p>
            <Button
              href="/our-story"
              colour="outline"
              className={styles.button}
            >
              Learn More
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </section>

      <ContactForm />

      <MessagesPanel />
    </>
  );
};
export default Home;
