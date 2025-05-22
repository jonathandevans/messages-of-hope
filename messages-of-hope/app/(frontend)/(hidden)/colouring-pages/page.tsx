import { Metadata } from "next";
import styles from "./page.module.css";
import { generateMetadata } from "@/lib/utils";

const LINKS = [
  "/colouring/Colouring Page 18.png",
  "/colouring/Colouring Page 16.png",
  "/colouring/Colouring Page 5.png",
  "/colouring/Colouring Page 10.png",
  "/colouring/Colouring Page 17.png",
  "/colouring/Colouring Page 15.png",
  "/colouring/Colouring Page 12.png",
  "/colouring/Colouring Page 13.png",
  "/colouring/Colouring Page 14.png",
  "/colouring/Colouring Page 6.png",
  "/colouring/Colouring Page 11.png",
  "/colouring/Colouring Page 9.png",
  "/colouring/Colouring Page 2.png",
  "/colouring/Colouring Page 8.png",
  "/colouring/Colouring Page 4.png",
  "/colouring/Colouring Page 7.png",
  "/colouring/Colouring Page 1.png",
  "/colouring/Colouring Page 3.png",
];

export const metadata: Metadata = generateMetadata({
  title: "Colouring Pages",
  description:
    "Messages of Hope provides free colouring pages to help spread hope and positivity. Download and print our colouring pages to share your creativity with us.",
});

const ColouringPages = () => {
  return (
    <>
      <section className={styles.panel}>
        {LINKS.map((link, index) => (
          <a
            href={link}
            className={styles.container}
            download
            key={`link__${index}`}
          >
            <img src={link} loading="lazy" />
          </a>
        ))}
      </section>
    </>
  );
};
export default ColouringPages;
