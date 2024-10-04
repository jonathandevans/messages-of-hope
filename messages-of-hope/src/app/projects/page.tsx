import { Metadata } from "next";
import { Banner } from "@/components/panel/banner/banner";
import { ContactForm } from "@/components/panel/contact-form/contact-form";
import { LinkGrid } from "@/components/panel/link-grid/link-grid";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
  title: "Projects",
  description:
    "Explore the projects created by Messages of Hope and learn how you can get involved.",
});

const Page = () => {
  return (
    <>
      <Banner
        title="Projects"
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726693988/Speech_at_Connections_2024_2_kwm5ya.jpg"
        short={true}
      />

      <LinkGrid
        style={{ marginTop: "3rem" }}
        name="Connections 2024"
        all={true}
        text={[
          "Connections 2024 is a poignant short film created by Messages of Hope and Speakers Collective for Great Mental Health Day 2024. Connections delves into the transformative power of connection amidst mental health struggles. Through capturing the heartfelt messages penned by Londoners, the film illuminates the profound sense of empathy and solidarity within our communities. Each message serves as a beacon of hope, affirming that even in the darkest moments, there are individuals who genuinely care.",
          "Our aspiration with Connections 2024 is to ignite a ripple effect of compassion and support, encouraging viewers to extend a hand of empathy to those in need and remind them that they are never alone in their journey towards healing.",
        ]}
        image="https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694766/Connections_2024_1_v2pakd.jpg"
        imageAlt="The filming of Connections 2024"
        href="/projects/connections-2024"
        additionalLinksTitle="All Projects"
        additionalLinks={[
          {
            title: "Bags of Hope",
            href: "/projects/bags-of-hope",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694833/Bags_of_Hope_1_kxut4v.jpg",
          },
          {
            title: "Messages of Hope 2023",
            href: "/projects/messages-of-hope-2023",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726694912/Messages_of_Hope_2023_1_rpedc7.jpg",
          },
          {
            title: "Colouring Pages",
            href: "/projects/colouring-pages",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697424/Colouring_Pages_1_qgyern.jpg",
          },
          {
            title: "Messages of Hope 2020",
            href: "/projects/messages-of-hope-2020",
            image:
              "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726697536/Messages_of_Hope_2020_1_w82msv.jpg",
          },
        ]}
      />

      <ContactForm
        title="Have an idea?"
        text="If you have a great idea, we would love to hear about it. Please send us a message, and we will be in touch with you shortly."
      />
    </>
  );
};
export default Page;
