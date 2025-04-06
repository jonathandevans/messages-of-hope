import MessagePanel from "@/components/messages-panel/messages-panel";
import styles from "./page.module.css";
import Image from "next/image";
import Banner from "@/components/banner/banner";
import Button from "@/components/ui/button/button";
import { ArrowRight } from "lucide-react";
import { generateMetadata } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  absolute: "Messages of Hope Campaign",
  description:
    "Messages of Hope collects messages of hope and spreads them far and wide. Collecting these messages is part of our initial Messages of Hope campaign which started this organisation. You can often find us out in the community collecting messages from strangers. Not only do these messages help others but we give people the opportunity to perform a wellbeing check-in.",
});

const MessagesOfHope = () => {
  return (
    <>
      <Banner
        title="Messages of Hope"
        description="Reaching out to support each other"
        backgroundCss={styles.banner}
      />

      <section className={styles.what}>
        <div className={styles.text}>
          <h2>What is the MOH Campaign?</h2>
          <p>
            Messages of Hope collects messages of hope and spreads them far and
            wide. Keep an eye on our social media pages to see if your message
            is shared. You can submit a message of hope via our website whenever
            you like. We will then post the submitted messages of hope on our
            social media, or your message might be turned into a sticker and
            placed in various spots around the local community.
          </p>
          <p>
            Collecting these messages is part of our initial Messages of Hope
            campaign which started this organisation. You can often find us out
            in the community collecting messages from strangers. Not only do
            these messages help others but we give people the opportunity to
            perform a wellbeing check-in.
          </p>
          <p>
            As an organisation we have done many pop-up art sessions where we've
            had people, write messages, colour their feelings, and draw on
            canvases. This again allows people to perform a well-being check-in,
            provides a nice creative outlet in the day, and gives the
            opportunity to talk and meet new people. This is all a part of the
            of the original Messages of Hope campaign, using creativity to
            spread hope.
          </p>
          <Button
            href="/write-a-message"
            colour="outline"
            className={styles.button}
          >
            Write a Message
            <ArrowRight size={16} strokeWidth={3} />
          </Button>
        </div>

        <Image
          src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743943164/You_re_Loved_-_Connections_2024_2_nwli5g_xaoyq7.jpg"
          alt="'You're loved' written on a whiteboard at the Connections 2024 event"
          width={4000}
          height={6000}
        />
      </section>

      <section className={styles.gallery}>
        <div className={styles.inner}>
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743772678/9ntrQUf34S_sophiw_1_biixot_foa54p.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743893755/Messages_of_Hope_2023_1_rpedc7_qsozmo.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743890833/uNbak2l7po_vnmrmu_r6zifi.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743944381/H7cLgJSMml_cicq0s_1_zoxj05_b4ptwv.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743944264/IkyP20lYFw_dxu1sg_1_h0fe5o_b4ziua.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743771007/Writing_a_Message_-_MOH_2023_1_ebwwtg_wbft8z.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743944133/591zjjboIe_xgbsiy_rnqbhh_qwdmco.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743890938/bl4m2UPETa_slguyb_1_it3hay_fzmltc.jpg"
            loading="lazy"
          />
          <img
            src="https://res.cloudinary.com/dl6zbzu06/image/upload/v1743944259/CdTHi5Z0WZ_ergfh4_1_tdo0vy_dtdt2d.jpg"
            loading="lazy"
          />
        </div>
      </section>

      <MessagePanel />
    </>
  );
};
export default MessagesOfHope;
