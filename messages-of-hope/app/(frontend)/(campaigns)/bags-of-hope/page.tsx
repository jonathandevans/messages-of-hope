import { Button } from "@/components/frontend/button";
import { ContactForm } from "@/components/frontend/contact-form";
import DonatePanel from "@/components/frontend/donate-panel";
import { EventsBanner } from "@/components/frontend/events-banner";
import { MessagesPanel } from "@/components/frontend/messages-panel";
import { generateMetadata } from "@/lib/utils";
import {
  ArrowRight,
  Hospital,
  Instagram,
  Shirt,
  ShoppingBag,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = generateMetadata({
  title: "Bags of Hope",
  description:
    "Bags of Hope is a project set up to provide patients arriving on psychiatric wards with a bag of both essential and self-care items. These bags contain items such as body wash, wipes, socks, underwear, colouring books, phone chargers, and activity books, all of which offer comfort and dignity to patients during a challenging time. The bags are delivered to local psychiatric wards across South Wales and England.",
});

const businesses = [
  { href: "https://www.instagram.com/theurdang/", name: "@theurdang" },
  {
    href: "https://www.instagram.com/reactsupportservices/",
    name: "@reactsupportservices",
  },
  {
    href: "https://www.instagram.com/nbadanceacademy/",
    name: "@nbadanceacademy",
  },
  { href: "https://www.instagram.com/kittyriggs_/", name: "@kittyriggs_" },
  {
    href: "https://www.instagram.com/cityuniversitylondon/",
    name: "@cityuniversitylondon",
  },
  { href: "https://www.instagram.com/thollisterart/", name: "@thollisterart" },
];

export default function BagsOfHopeRoute() {
  return (
    <main className="flex flex-col gap-y-16 mb-12 relative overflow-x-hidden">
      <EventsBanner
        title="Bags of Hope"
        description="Because no patient should feel alone"
        backgroundStyling={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/react_boh.jpg')",
          backgroundPosition: "left 50% top 90%",
        }}
      />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 md:grid grid-cols-[3fr_2fr] md:gap-12">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
            What is Bags of Hope?
          </h2>
          <p>
            Bags of Hope is a project set up to provide patients arriving on
            psychiatric wards with a bag of both essential and self-care items.
            These bags contain items such as body wash, wipes, socks, underwear,
            colouring books, phone chargers, and activity books, all of which
            offer comfort and dignity to patients during a challenging time. The
            bags are delivered to local psychiatric wards across South Wales and
            England.
          </p>
          <p>
            Through Bags of Hope we are able to support vulnerable individuals
            and ensure that upon arrival to psychiatric wards people are met
            with dignity and respect. We believe in the importance of providing
            individuals, who may not otherwise have anything, with essential
            items, thus creating more equality within the healthcare system. At
            all stages of the Bags of Hope process people are benefiting.
          </p>
          <p>
            Our community-driven approach includes bag-packing events where
            individuals can come together to contribute items and help assemble
            the bags. We&apos;re excited to expand these events to involve the
            general public, inviting people to support our mission and
            participate in creating bags.
          </p>
        </div>

        <Image
          src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/urdang_bag_packing.jpg"
          alt="Bags of Hope bag packing event at City Lit"
          width={3024}
          height={4032}
          // className="w-full h-auto max-w-sm aspect-square object-cover mx-auto rounded-lg md:aspect-auto md:h-82 md:max-w-none"
          className="w-full h-auto max-w-sm aspect-square object-cover mx-auto rounded-lg md:max-w-md"
        />
      </section>

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col gap-2">
        <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
          Have you received a Bag of Hope?
        </h2>
        <p>
          We gather feedback through surveys, social media messages, and
          in-person conversations during drop-offs to ensure we include items
          that meet the needs of the patients. Through feedback received, we
          went on to make &apos;gender neutral&apos; and &apos;vegan&apos; Bags
          of Hope to ensure that our project was inclusive.
        </p>
        <p>
          If you are a former/current patient or an employee on a psychiatric
          ward, please complete the following survey to provide us further
          feedback for this campaign.
        </p>
        <Button
          colour="outline"
          href="https://docs.google.com/forms/d/e/1FAIpQLScjZ4hWxSTVDi12UKYABqWDcNn_BTpPtUnOuQYYEE4gH-t3xw/viewform?usp=dialog"
          text="Bags of Hope Survey"
          size="sm"
          className="self-end"
        />
      </section>

      <section className="bg-moh-blue py-12">
        <div className="w-[90%] max-w-5xl mx-auto flex flex-wrap justify-center items-start gap-8 sm:justify-around">
          <article className="flex flex-col justify-center max-w-3xs text-zinc-800">
            <Shirt size={64} />
            <h3 className="text-2xl font-quicksand tracking-tight font-bold">
              5000+ Items <br />
              Donated
            </h3>
            <p>
              We&apos;ve received over 5000 items donated from the members of
              the public and businesses to go into Bags of Hope.
            </p>
          </article>

          <article className="flex flex-col justify-center max-w-3xs text-zinc-800">
            <ShoppingBag size={64} />
            <h3 className="text-2xl font-quicksand font-bold tracking-tight">
              250+ Bags <br />
              Created
            </h3>
            <p>
              In 2024 alone, we have been able to create over 250 male, female
              and gender neutral Bags of Hope.
            </p>
          </article>

          <article className="flex flex-col justify-center max-w-3xs text-zinc-800">
            <Hospital size={64} />
            <h3 className="text-2xl font-quicksand font-bold tracking-tight">
              16 Wards <br />
              Helped
            </h3>
            <p>
              We&apos;ve been able to deliver bags to patients over 16 wards
              throughout England and South Wales.
            </p>
          </article>
        </div>
      </section>

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col gap-6">
        <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
          What goes into a Bag of Hope?
        </h2>
        <p>
          Due to the quality of the Bags of Hope, it costs us around £20 to £25
          to fill a bag. We currently make two types of bags which we&apos;ve
          dubbed The Life Saver, containing only essential items, and The
          Premium Bundle, which also contains two bonus items. There are three
          variations on both of these bags with male, female and gender neutral
          options. As the bags include snacks we also mark them as vegan
          friendly when appropriate.<sup>1</sup>
        </p>

        <div className="flex flex-col gap-8 md:flex-row md:items-stretch justify-center">
          <article className="flex flex-col overflow-hidden rounded-xl shadow-md bg-moh-blue/15">
            <h3 className="flex justify-between items-center text-2xl font-quicksand font-bold tracking-tight pl-4 bg-moh-blue/70">
              <span>
                The Life Saver
                <sup className="font-normal text-xs relative -top-3">2</sup>
              </span>
              <span className="p-4 bg-moh-blue">£20</span>
            </h3>
            <ul className="grid p-4 gap-y-0.5 gap-x-4 list-disc sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 wrap-normal [&>li]:ml-4">
              <li>2 in 1 or shampoo & conditioner</li>
              <li>Body wash & flannel</li>
              <li>Toothbrush & paste</li>
              <li>Roll-on deodorant</li>
              <li>Pants & socks</li>
              <li>Activity book & notebook</li>
              <li>Coloured pens or pencils</li>
              <li>Sanitary products</li>
              <li>Fidget toys</li>
              <li>Moisturiser or hand cream</li>
              <li>Playing cards or game</li>
              <li>Tissues</li>
              <li>Ear buds</li>
              <li>2 food items</li>
              <li>Hair bobbles</li>
              <li>Face wipes or baby wipes</li>
            </ul>
          </article>
          <article className="flex flex-col overflow-hidden rounded-xl shadow-md bg-moh-yellow/15">
            <h3 className="flex justify-between items-center text-2xl font-quicksand font-bold tracking-tight pl-4 bg-moh-yellow/70">
              <span>
                The Premium Bundle
                <sup className="font-normal text-xs relative -top-3">3</sup>
              </span>
              <span className="p-4 bg-moh-yellow">£25</span>
            </h3>
            <ul className="grid p-4 gap-y-0.5 gap-x-4 list-disc sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 wrap-normal [&>li]:ml-4">
              <li>2 in 1 or shampoo & conditioner</li>
              <li>Body wash & flannel</li>
              <li>Toothbrush & paste</li>
              <li>Roll-on deodorant</li>
              <li>Pants & socks</li>
              <li>Activity book & notebook</li>
              <li>Coloured pens or pencils</li>
              <li>Sanitary products</li>
              <li>Fidget toys</li>
              <li>Moisturiser or hand cream</li>
              <li>Playing cards or game</li>
              <li>Tissues</li>
              <li>Ear buds</li>
              <li>2 food items</li>
              <li>Hair bobbles</li>
              <li>Face wipes or baby wipes</li>
            </ul>
            <h4 className="font-quicksand font-semibold text-center text-lg">
              Additional Items
            </h4>
            <ul className="grid p-4 gap-y-0.5 gap-x-4 list-disc sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 wrap-normal [&>li]:ml-4">
              <li>Sliders or slippers</li>
              <li>Soft toy</li>
              <li>Headphones</li>
              <li>Water bottle</li>
              <li>Charger or portable charger</li>
              <li>Chapstick or vaseline</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col justify-center items-center gap-8 md:grid grid-cols-[2fr_3fr] md:gap-12">
        <Image
          src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/boh_2024.jpg"
          alt="Bethan Evans standing behind a collection of Bags of Hope ready to be delivered"
          width={1356}
          height={1433}
          className="w-full h-auto max-w-sm aspect-square object-cover mx-auto rounded-lg md:max-w-md"
        />

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
            The Journey So Far...
          </h2>
          <p>
            This campaign first started in the Christmas of 2023 when Bethan
            created a social media post that went viral showing the initial
            concept of Bags of Hope. This resulted in over 250 amazon packages
            showing up on our doorstep containing thousands of donated items.
            Honestly, the delivery drivers were sick of us. This lead us to
            fully implement this idea into a campaign over the next year,
            starting to organise bag packing events, and setup more frequent bag
            drop offs.
          </p>
          <p>
            In 2024 we received over 5000 donations and donated over 250 bags to
            psychiatric wards. With funding we plan to be able to double the
            amount of Bags of Hope we donate in a year. One patient commented,
            'Receiving a Bag of Hope when I was admitted to hospital gave me
            hope and reminded me that I wasn't alone.'
          </p>
        </div>
      </section>

      <ContactForm
        title="Join Us On Our Journey"
        description="Messages of Hope relies on donations from both the public and businesses to stock the bags, if you have any feedback, suggestions, or would like to help, please get in touch. We're always looking to organise more bag packing events and would love to hear from you."
      />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col-reverse items-center justify-center gap-8 md:flex-row lg:gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-quicksand font-semibold tracking-tight">
            How Can I Help?
          </h2>
          <p>
            There are several impactful ways you can support Bags of Hope in its
            mission to provide essential items for patients arriving on
            psychiatric wards. You can donate items directly using our Amazon
            Wishlist, ensuring that much-needed supplies reach those in need.
            Financial contributions are also greatly appreciated and can be made
            through our Get Involved page; even a small donation of £5 can make
            a significant difference.
          </p>
          <p>
            If you&apos;re unable to donate, simply sharing our Instagram
            stories helps immensely in raising awareness and garnering broader
            support for our cause. Every act of kindness, big or small,
            contributes to making a meaningful impact on the lives of those
            struggling with their mental health.
          </p>
          <p>
            We appreciate all donations, but here are some suggestions for items
            that are always in need. Please ensure all items are new and
            unopened. Any items we receive that cannot be put into a bag, will
            be donated to a food bank or other appropriate charity. If
            you&apos;re not sure, just drop us a message. Thank you for your
            support!
          </p>
          <div className="flex gap-2 justify-end">
            <Link
              href="https://www.instagram.com/messagesof.hope/"
              target="_blank"
              className="flex items-center justify-center gap-x-2 bg-moh-blue transition-all py-1.5 px-3 rounded-md font-quicksand font-semibold hover:bg-moh-blue/70 text-sm w-31"
            >
              <Instagram className="size-4" />
              Instagram
            </Link>
            <Link
              href="/get-involved"
              className="flex items-center justify-center gap-x-2 bg-moh-yellow transition-all py-1.5 px-3 rounded-md font-quicksand font-semibold hover:bg-moh-yellow/70 text-sm w-31"
            >
              Support Us
              <ArrowRight className="size-4" />
            </Link>
          </div>
          <h3 className="font-quicksand font-semibold text-xl">
            A special thanks to the following people and organisations for your
            donations and support this year:
          </h3>
          <ul className="list-disc ml-8 underline font-quicksand">
            {businesses.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <h3 className="font-quicksand font-semibold text-xl">
            Thank you for all your support.
          </h3>
        </div>

        <Image
          src="https://dhvgncgaxkgbphijqpbj.supabase.co/storage/v1/object/public/published/assets/boh_collage.png"
          alt="A colection of photos showing the bags of hope being delivered to wards"
          width={1380}
          height={1721}
          className="w-full h-auto max-w-sm md:hidden lg:max-w-md lg:block"
        />
      </section>

      <DonatePanel />

      <MessagesPanel />

      <section className="w-[90%] max-w-7xl mx-auto flex flex-col gap-2 text-muted-foreground text-xs">
        <p>
          <sup>1</sup> Essential items include: 2 in 1 or shampoo & conditioner,
          body wash & flannel, toothbrush & paste, roll-on deodorant, pants &
          socks, activity book or notebook, pens or pencils, sanitary products,
          fidget toys, moisturiser or handcream, playing cards or game, tissues,
          ear buds, 2 food items, hair bobbles, face wipes or baby wipes.
          Possible bonus items include: sliders or slippers, soft toy,
          headphones, water bottle, charger or portable charger, chapstick or
          vaseline. We endeavour to put all of the essential items and 2 bonus
          items into one Bag of Hope but due to our reliance on donations, some
          bags may contain slightly fewer items and our attempts to meet the
          checklist are on a best effort basis. Additionally, only bags labelled
          &quot;female&quot; and &quot;gender neutral&quot; contain sanitary
          products. The price of our Bags of Hope is based upon our ability to
          bulk buy producs with any monetary donations we receive and does not
          reflect the price of a Bag of Hope that is filled with items from our
          Amazon Wishlist. The ability to mark bags as vegan friendly is done on
          a best effort basis, and cannot be guaranteed to be correct. It is the
          responsibility of those using the product to confirm the contents.
          <br />
          <sup>2</sup> This list is a example of what we intend to put into the
          Life Saver bag, not a checklist we have to adhere to when making the
          bag. Based on current supply items may be missing or substituted,
          however we will make a best effort basis to provide consistent quality
          between the bags.
          <br />
          <sup>3</sup> This list is a example of what we intend to put into the
          Premium Bundle bag, not a checklist we have to adhere to when making
          the bag. Based on current supply items may be missing or substituted,
          however we will make a best effort basis to provide consistent quality
          between the bags.
        </p>
      </section>
    </main>
  );
}
