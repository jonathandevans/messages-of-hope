import Button from "@/components/frontend/button";
import styles from "./page.module.css";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/frontend/contact-form";
import MessagesPanel from "@/components/frontend/messages-panel";

const changeLivesLinks = [
  {
    href: "/get-involved",
    title: "Donate",
    _className: styles.link1,
    description:
      "Help us to help more people. Messages of Hope relies on donations to continue our work in the community",
    backgroundImage:
      "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743592893/IMG_1599_wpo5wq.jpg",
  },
  {
    href: "https://www.instagram.com/messagesof.hope/",
    title: "Follow our Instagram",
    _className: styles.link2,
    description:
      "We use our socials to spread our messages, news and our upcoming events. Follow and engage to show support",
    backgroundImage:
      "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743596025/PtSSYegxG0_kqt4qv_1_kc0aqo_jw54ot.jpg",
  },
  {
    href: "/our-work",
    title: "Our Work",
    _className: styles.link3,
    description:
      "Learn more about what we do and how we use our donations to help the community",
    backgroundImage:
      "https://res.cloudinary.com/dl6zbzu06/image/upload/v1743595919/5CnpFGoOdE_k3kxev_1_gkehfp_htcqlm.jpg",
  },
];

export default function HomeRoute() {
  return (
    <main className="flex flex-col gap-y-16 mt-4 mb-12 relative">
      <section className={styles.banner}>
        <div className={styles.hero}>
          <span className={styles.art1} />
          <span className={styles.art2} />

          <Image
            src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/connections2024.jpg"
            alt="Connections 2024 filming at Convent Gardens London"
            width={4800}
            height={2649}
          />
        </div>

        <div className={styles.content}>
          <h1 className="font-coiny text-5xl tracking-tighter">
            Your mental health matters to us.
          </h1>
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
            <Button href="/events/react-bag-packing-2024">
              Our Latest Event
              <ArrowRight size={16} strokeWidth={3} />
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.changeLives}>
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

        <h2 className="font-quicksand text-3xl">
          How can you help us change lives?
        </h2>
        <div className={styles.links}>
          <span className={styles.art1} />
          <span className={styles.art2} />
          <span className={styles.art3} />

          {changeLivesLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                backgroundImage: `url('${item.backgroundImage}')`,
              }}
              className={item._className}
            >
              <h3 className="font-quicksand text-2xl">{item.title}</h3>
              <p>{item.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.events} id="events">
        <h2 className="font-quicksand text-3xl">Recent Events</h2>
        <div className={styles.list}>
          <article>
            <Image
              src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/socialSisters.jpg"
              width={600}
              height={600}
              alt="Speech at Connections 2024 event at Covent Gardens"
            />
            <div>
              <h4>Tuesday 8th April 2025</h4>
              <h3>Bags of Hope at Social Sisters</h3>
              <p>
                On Tuesday 8th of April, Messages of Hope collaborated with the
                Barry Social Sisters in a bag-packing event for our Bags of Hope
                campaign. This event marked the start of our efforts to run
                community bag-packing events in the form of MOH Socials. Members
                of Barry&apos;s Social Sisters had been collecting items for the
                past few weeks that we organised and placed into bags to donate
                to patients in the South Wales area. This event included bag
                decorating, message writing, and clay decorating.
              </p>
              <p>
                We aimed to provide a space that allows members of the community
                to come together and support each other through creative
                activities. Through this event we were able to donate over 70
                bags of hope across the wards at LLandough hospital. We want to
                give a special thank you to all those who donated items and
                helped us make the bags.
              </p>
              <Button
                colour="outline"
                href="/bags-of-hope"
                className={styles.button}
              >
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
            src="https://rqrmdylmzqlsucevuikq.supabase.co/storage/v1/object/public/published/assets/storyMap.png"
            width={535}
            height={616}
            alt="Roadmap of Messages of Hope history"
          />
          <div>
            <p>
              Messages of Hope was first created in 2020 by Bethan Evans. This
              saw the creation of the &quot;There is Hope&quot; video, in which
              people in the South Wales area wrote messages for those struggling
              with their mental health during COVID-19. However, between the
              years of 2019 and 2022, Bethan was at war with her mental health,
              more specifically Borderline Personality Disorder, therefore the
              growth and development of Messages of Hope slipped far down on her
              list of priorities.
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
              allowing us to create over 300 bags, and we&apos;re only just
              getting started.
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
    </main>
  );
}
