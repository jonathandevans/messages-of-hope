import { CSSProperties, HTMLAttributes } from "react";
import styles from "./custom-css/events-banner.module.css";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  backgroundStyling: CSSProperties;
}

export function EventsBanner({
  title,
  description,
  backgroundStyling,
}: BannerProps) {
  return (
    <section style={backgroundStyling} className="relative bg-moh-dark-blue bg-cover bg-no-repeat">
      <div className="flex flex-col justify-end items-start w-[90%] max-w-7xl mx-auto pb-12 h-92 gap-4 text-white">
        <h1 className="text-6xl font-coiny tracking-tighter">{title}</h1>
        <p className="text-lg italic">{description}</p>
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
}
