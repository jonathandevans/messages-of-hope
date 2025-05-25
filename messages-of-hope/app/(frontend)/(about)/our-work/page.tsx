import { AboutBanner } from "@/components/frontend/about-banner";
import { Button } from "@/components/frontend/button";
import { ContactForm } from "@/components/frontend/contact-form";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { cn, generateMetadata } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = generateMetadata({
  title: "Our Work",
  description:
    "By working with members of the community and other community organisations we look to improve the infrastructure in place for patients going through recovery, provide support for the individual through group activities and raise awareness for the current issues around mental health through collaborative art projects.",
});

const doingAboutIt = [
  {
    title: "Collaborative Art Projects",
    text: [
      "Messages of Hope collaborates with other community organisations to create videos for mental health awareness days throughout the year. These videos will involve members of the public sharing their messages of hope. We also work to create Line of Hope displays which provide a space in which people can reflect on their current head space and read messages of hope provided from those around them displayed on a line.",
      "As an organisation we have done many pop-up art sessions where we've had people, write messages, colour their feelings, and draw on canvases. This again allows people to perform a well-being check-in, provides a nice creative outlet in the day, and gives the opportunity to talk and meet new people.",
      "All of these activities are done the in form of events that Messages of Hope puts on throughout the year.",
    ],
    href: "/line-of-hope",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/moh_2023.jpg",
      alt: "Child writing on a canvas at the Messages of Hope 2023 event",
      width: 3143,
      height: 3143,
    },
  },
  {
    title: "Bags of Hope",
    text: [
      "Bags of Hope is a project set up to provide patients arriving on psychiatric wards with a bag of both essential and self-care items. These bags contain items such as body wash, wipes, socks, underwear, colouring books, phone chargers, and activity books, all of which offer comfort and dignity to patients during a challenging time. The bags are delivered to local psychiatric wards across South Wales and England.",
      "In 2024 alone, we received over 5000 donations and donated over 250 bags to psychiatric wards. One patient commented, 'Receiving a Bag of Hope when I was admitted to hospital gave me hope and reminded me that I wasn't alone.' We are in constant communication with psychiatric patients and staff to ensure that the items we are providing are useful and appropriate.",
      "Moving into 2025, we are partnering with organisations for bag packing and bag decorating MOH socials.",
    ],
    href: "/bags-of-hope",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/boh_2024.jpg",
      alt: "Bethan Evans behind a collection of bags for Bags of Hope",
      width: 1536,
      height: 1433,
    },
  },
  {
    title: "Collecting Your Messages",
    text: [
      "Messages of Hope collects messages of hope and spreads them far and wide. Keep an eye on our social media pages to see if your message is shared. You can submit a message of hope via our website whenever you like. We will then post the submitted messages of hope on our social media, or your message might be turned into a sticker and placed in various spots around the local community.",
      "Collecting these messages is part of our initial Messages of Hope campaign which started this organisation. You can often find us out in the community collecting messages from strangers. Not only do these messages help others but we give people the opportunity to perform a wellbeing check-in.",
      "Write a message of hope for someone struggling with their mental health. Your message could be the one that makes a difference in someone's life.",
    ],
    href: "/messages-of-hope",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/writing_a_message.jpg",
      alt: "Collecting messages in public",
      width: 6000,
      height: 4000,
    },
  },
  {
    title: "MOH Socials",
    text: [
      "MOH Socials is a new type of event starting in 2025. These socials are events in which we organise a few different activities, such as bag packing, bag decorating, and clay decorating, giving a space for the community to check in and reach out to each other. At these events, we also perform speeches explaining our experiences and the important work that we do.",
      "These socials also provide an opportunity to introduce some of our other campaigns, such as getting attendees to donate items and help pack bags. When partnering with other organisations we also try and get attendees to submit messages so they can be turned into a Line of Hope.",
      "We're actively looking for organisations to partner with to run MOH Social events, so please reach out if you want to be involved.",
    ],
    href: "/#events",
    image: {
      src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/canvas_painting.jpg",
      alt: "Canvas painting at the Messages of Hope 2023 event at Barry Island",
      width: 5376,
      height: 3584,
    },
  },
];

export default function OurWorkRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <AboutBanner
        title="Our Work"
        image={{
          src: "https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/connections_showcase.jpg",
          alt: "Showcase of Connections 2024 video",
          width: 576,
          height: 352,
        }}
        text={[
          "Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. By working with members of the community and other community organisations we look to improve the infrastructure in place for patients going through recovery, provide support for the individual through group activities and raise awareness for the current issues around mental health through collaborative art projects. This is all done through our campaigns and events which are built around bringing people together through creative works.",
          "All the work we do is to support the three goals that we have identified as an organisation. It's so sad that our organisation is needed, yet the work we do is more important than ever.",
        ]}
      />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col gap-4">
        <h2 className="font-quicksand font-semibold text-3xl">
          Our goals are to:
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 md:flex-row md:justify-around md:items-start">
          <div className="grid gap-y-4 grid-cols-[1fr_3fr] grid-rows-3 items-center justify-center max-w-2xl md:grid-cols-[1fr_5fr]">
            <p className="text-moh-yellow font-bold font-quicksand text-7xl text-center md:text-8xl">
              1.
            </p>
            <p className="md:text-lg">
              Demonstrate the importance of <b>community support</b> in mental
              health. How many people feel alone?
            </p>
            <p className="text-moh-yellow font-bold font-quicksand text-7xl text-center md:text-8xl">
              2.
            </p>
            <p className="md:text-lg">
              Bring mental health into the forefront of conversation alongside
              physical health.
            </p>
            <p className="text-moh-yellow font-bold font-quicksand text-7xl text-center md:text-8xl">
              3.
            </p>
            <p className="md:text-lg">
              Provide direct support to those struggling with their mental
              health.
            </p>
          </div>

          <div className="w-[100%] flex justify-center items-center aspect-square relative max-w-xs md:mr-[5%]">
            <Image
              src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/street_party.jpg"
              alt="Speaker Box Party at Covent Gardens during Connections 2024 event"
              width={6000}
              height={4000}
              className="w-full h-full object-cover rounded-full relative z-3"
            />
            <span className="absolute z-2 bg-moh-yellow w-[50%] aspect-square -bottom-[5%] -right-[5%] rounded-full" />
          </div>
        </div>
      </section>

      <section className="w-[90%] mx-auto max-w-7xl grid gap-4">
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
          they&apos;ve been heard. It also provides individuals with a chance to
          know that they are not alone.
        </p>
        <p>
          Moving forward Messages of Hope would love to partner with more groups
          and organisations that to put on these events. All our campaigns and
          individual events exist to address our goals as well as providing key
          opportunities to help raise awareness.
        </p>
      </section>

      <section className="bg-moh-blue py-12 overflow-hidden relative grid gap-6">
        <h2 className="w-[90%] mx-auto font-quicksand font-semibold text-center text-3xl relative z-3">
          Not-So-Fun Facts
        </h2>
        <div className="w-[90%] mx-auto max-w-7xl relative z-2 flex flex-col justify-center items-center gap-4 md:grid grid-cols-3">
          <article className="border-6 border-moh-dark-blue rounded-lg h-28 p-6 flex flex-col items-center justify-center text-center md:h-36 w-full">
            <p>1 in 4 people struggle with their mental health.</p>
          </article>
          <article className="border-6 border-moh-dark-blue rounded-lg h-28 p-6 flex flex-col items-center justify-center text-center md:h-36 w-full">
            <p>1 in 5 people have suicidal thoughts.</p>
          </article>
          <article className="border-6 border-moh-dark-blue rounded-lg h-28 p-6 flex flex-col items-center justify-center text-center md:h-36 w-full">
            <p>Suicide is the biggest killer of men under 45 in the UK.</p>
          </article>
        </div>

        <svg
          width="231"
          height="295"
          viewBox="0 0 231 295"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute z-1 w-40 -top-[8rem] -left-[2rem]"
        >
          <circle cx="107" cy="132" r="117" stroke="#5E88A6" strokeWidth="14" />
          <circle cx="31" cy="202" r="82" stroke="#84B9D2" strokeWidth="22" />
          <circle cx="18" cy="44" r="139.5" stroke="#4C7194" strokeWidth="7" />
        </svg>
      </section>

      <section className="w-[90%] mx-auto max-w-7xl flex flex-col justify-center items-center gap-6">
        <h2 className="text-center font-quicksand font-semibold text-3xl">
          What Are We Doing About It?
        </h2>
        <div className="flex flex-col justify-center items-center gap-6 grow xl:grid xl:grid-cols-2 xl:grid-rows-2 xl:items-stretch">
          {doingAboutIt.map((item, index) => (
            <article
              key={item.href}
              className={cn(
                "w-full max-w-md flex flex-col-reverse justify-center items-center rounded-2xl overflow-hidden shadow-lg relative sm:grid sm:grid-cols-[3fr_1fr] sm:max-w-none",
                index === 2 ? "col-start-2 row-start-2" : "",
                index === 3 ? "col-start-1 row-start-2" : ""
              )}
            >
              <span
                className={cn(
                  "absolute top-0 left-0 w-[16px] h-full z-3",
                  index === 0 || index === 2 ? "bg-moh-yellow" : "bg-moh-blue"
                )}
              />
              <div className="p-6 flex flex-col justify-between self-start items-start gap-2 sm:px-6 sm:py-8 sm:h-full">
                <div className="flex flex-col gap-3">
                  <h3 className="text-2xl font-quicksand font-semibold">
                    {item.title}
                  </h3>
                  {item.text.map((para, index) => (
                    <p
                      key={index}
                      className="text-muted-foreground text-[0.9rem]"
                    >
                      {para}
                    </p>
                  ))}
                </div>

                <Button
                  href={item.href}
                  text="Learn More"
                  colour={index === 0 || index === 2 ? "yellow" : "blue"}
                  size="sm"
                  className="self-end"
                />
              </div>

              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={item.image.width}
                height={item.image.height}
                className="w-full aspect-square object-cover sm:aspect-auto sm:h-full"
              />
            </article>
          ))}
        </div>
      </section>

      <ContactForm title="Get Involved" />

      <MessagesPanel />
    </main>
  );
}
