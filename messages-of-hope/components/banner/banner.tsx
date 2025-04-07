import { HTMLAttributes } from "react";
import styles from "./banner.module.css";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  backgroundCss: string;
}

const Banner = ({ title, description, backgroundCss }: BannerProps) => {
  return (
    <section className={`${styles.banner} ${backgroundCss}`}>
      <div className={styles.inner}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <span className={styles.art1} />
      <span className={styles.art2} />
      <span className={styles.art3} />
      <span className={styles.art4} />
      <span className={styles.art5} />

      <span className={styles.art6} />
      <span className={styles.art7} />
      <span className={styles.art8} />
      <span className={styles.art9} />
      <span className={styles.art10} />
    </section>
  );
};
export default Banner;
