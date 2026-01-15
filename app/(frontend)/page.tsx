import { Metadata } from "next";
import Image from "next/image";
import { generateMetadata } from "@lib/utils";
import Button from "@components/button";
import ContactForm from "@components/contact-form";
import MessageBanner from "@components/message-banner";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({ path: "/" });

export default function Home() {
    const changeLivesLinks = [
        {
            href: "/get-involved",
            title: "Donate",
            description:
                "Help us to help more people. Messages of Hope relies on donations to continue our work in the community",
            backgroundImage:
                "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/react-boh.jpg",
            backgroundSizing: "bg-[length:150%]",
        },
        {
            href: "https://www.instagram.com/messagesof.hope/",
            title: "Follow our Instagram",
            description:
                "We use our socials to spread our messages, news and our upcoming events. Follow and engage to show support",
            backgroundImage:
                "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-camera.jpg",
            backgroundSizing: "bg-cover",
        },
        {
            href: "/our-work",
            title: "Our Work",
            description:
                "Learn more about what we do and how we use our donations to help the community",
            backgroundImage:
                "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/street-party.jpg",
            backgroundSizing: "bg-cover",
        },
    ];

    return (
        <>
            <svg
                className="hidden 3xl:block absolute right-0 top-0 -z-1"
                width="509"
                height="600"
                viewBox="0 0 509 600"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M534.116 -370.136C534.116 -370.136 281.033 -405.069 433.832 158.595C586.631 722.259 144.932 765.454 144.932 765.454"
                    stroke="#F59F0A"
                    strokeWidth="3"
                ></path>
                <path
                    d="M370.612 -230.358C370.612 -230.358 739.521 -21.7239 495.548 273.623C251.576 568.97 292.823 903.085 292.823 903.085"
                    stroke="#2F4A6F"
                    strokeWidth="3"
                ></path>
                <path
                    d="M394.07 -272.907C540.73 151.386 466.244 502.87 187.543 878.765"
                    stroke="#98D3E7"
                    strokeWidth="4"
                ></path>
            </svg>

            <main className="flex flex-col gap-y-16 mt-6 mb-12 relative overflow-x-hidden">
                <section className="max-w-(--section-width) mx-auto flex flex-col items-center gap-6 lg:flex-row-reverse lg:w-[90%] lg:justify-between lg:gap-10 xl:gap-25">
                    <div className="h-82 max-w-lg flex justify-center items-center relative lg:w-full">
                        <span className="absolute top-[5%] left-[5%] w-[90%] h-80 bg-moh-blue rotate-[2.5deg] z-1"></span>
                        <span className="absolute top-[5%] left-[15%] w-[70%] h-80 bg-moh-dark-blue -rotate-[5.5deg] z-2"></span>

                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/connections-2024.jpg"
                            alt="Connections 2024 filming at Convent Gardens London"
                            title="Connections 2024 filming at Convent Gardens London"
                            width={4800}
                            height={2649}
                            loading="eager"
                            className="h-65 object-cover relative z-3"
                        />
                    </div>

                    <div className="w-[90%] mx-auto flex flex-col gap-4">
                        <h1 className="font-coiny text-5xl tracking-tighter">
                            Your mental health matters to us.
                        </h1>
                        <p>
                            Messages of Hope is a Community Interest Company
                            encouraging people to write hopeful messages for
                            those struggling with mental health. We organise a
                            range of projects each year, each designed to
                            connect communities through creativity and
                            collective empathy. Our initiatives include
                            collaborative art pieces, video projects for mental
                            health awareness days, and public displays of
                            messages of hope.
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row">
                            <Button href="/write-a-message" colour="yellow">
                                Write a Message
                            </Button>
                            <Button href="/events">Our Latest Event</Button>
                        </div>
                    </div>
                </section>

                <section className="flex flex-col gap-6 bg-moh-blue py-12 relative overflow-hidden">
                    <div className={styles.ring1}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <h2 className="text-3xl tracking-tighter font-bold w-[90%] mx-auto text-center">
                        How can you help us change lives?
                    </h2>

                    <div className="flex flex-col w-[90%] max-w-sm gap-6 mx-auto md:grid grid-cols-3 md:max-w-(--section-width) relative">
                        <span className="absolute z-1 aspect-square bg-moh-yellow rounded-full w-24 -top-[2%] left-[85%] md:top-[27%] md:left-[10%] lg:top-[85%] lg:-left-[5%]"></span>
                        <span className="absolute z-1 aspect-square bg-moh-yellow rounded-full w-36 top-[28%] -left-[15%] md:top-[50%] md:left-[80%] lg:top-[60%] lg:left-[60%]"></span>
                        <span className="absolute z-1 aspect-square bg-moh-yellow rounded-full w-32 top-[64%] left-[84%] md:top-[92%] md:-left-[10%] lg:-top-[8%] lg:left-[93%]"></span>

                        {changeLivesLinks.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`bg-moh-dark-blue bg-no-repeat ${item.backgroundSizing} bg-origin-border aspect-[1/1.03] rounded-lg inset-shadow-zinc-800/90 inset-shadow-[0_-200px_100px] text-zinc-100 hover:text-moh-blue transition-all px-[5%] py-[10%] flex flex-col justify-end gap-2 md:h-100 md:aspect-auto relative z-3`}
                                style={{
                                    backgroundPosition: "left 50% bottom 30%",
                                    backgroundImage: `url('${item.backgroundImage}')`,
                                }}
                            >
                                <h3 className="font-quicksand tracking-tight font-semibold text-2xl">
                                    {item.title}
                                </h3>
                                <p className="text-zinc-100">
                                    {item.description}
                                </p>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="w-[90%] max-w-(--section-width) mx-auto flex flex-col gap-6">
                    <h2 className="text-3xl tracking-tighter font-bold text-center">
                        Our Story So Far...
                    </h2>

                    <div className="flex flex-col gap-4 md:grid grid-cols-3">
                        <Image
                            src="https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/images/map.png"
                            width={535}
                            height={616}
                            alt="Roadmap of Messages of Hope history"
                            title="Our Roadmap"
                            className="max-w-sm mx-auto h-fit"
                        />
                        <div className="flex flex-col gap-2 md:col-start-1 md:col-end-3 md:row-start-1">
                            <p>
                                Messages of Hope was first created in 2020 by
                                Bethan Evans. This saw the creation of the
                                &quot;There is Hope&quot; video, in which people
                                in the South Wales area wrote messages for those
                                struggling with their mental health during
                                COVID-19. However, between the years of 2019 and
                                2022, Bethan was at war with her mental health,
                                more specifically Borderline Personality
                                Disorder, therefore the growth and development
                                of Messages of Hope slipped far down on her list
                                of priorities.
                            </p>
                            <p>
                                In November 2022 Bethan made an extremely
                                serious attempt to end her life which resulted
                                in her hospitalisation. Following this suicide
                                attempt, Bethan made a conscious effort to turn
                                her life around and to this day, she remains in
                                recovery and out of hospital for over a year.
                                This led to a resurgence of Messages of Hope in
                                2023.
                            </p>
                            <p>
                                This started with the Messages of Hope 2023
                                event in which we got more members of the public
                                to participate in a collaborative art project at
                                Barry Island. People of all ages, left their
                                marks on pre-prepared canvases, filling them
                                with messages of hope which we later displayed
                                at the Barry YMCA in the Vale of Glamorgan.
                                Moving into 2024, Messages of Hope officially
                                became a CIC and started the Bags of Hope
                                campaign. Through this campaign, we provide
                                essential items to patients arriving in
                                psychiatric wards. Since starting this campaign
                                we have seen thousands of donated items,
                                allowing us to create over 300 bags, and
                                we&apos;re only just getting started.
                            </p>
                            <p>
                                Our work at Messages of Hope is ongoing and we
                                look forward to the next chapter in our journey.
                            </p>
                            <Button
                                href="/our-story"
                                colour="outline"
                                className="self-end"
                            >
                                Learn More
                            </Button>
                        </div>
                    </div>
                </section>

                <ContactForm />

                <MessageBanner />
            </main>
        </>
    );
}
