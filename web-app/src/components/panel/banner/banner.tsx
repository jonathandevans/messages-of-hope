import { HTMLAttributes } from "react";
import styles from "./banner.module.css";

interface BannerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  image: string;
  short?: boolean;
};

export const Banner = ({ title, image, short, children, className:_className } : BannerProps) => {
  const backgroundImage = `linear-gradient(90deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), url('${image}')`;
  const className = `${styles.banner} ${short ? styles.short : ""} ${_className}`;

  return (
    <section className={className} style={{ backgroundImage: backgroundImage }}>
      <div className={styles.container}>
        {children}
        {title && <h1 className={styles.title}>{title}</h1>}
      </div>

      <svg aria-hidden="true" className={styles.bottomBorder} data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 16" preserveAspectRatio="none">
        <g data-name="Layer 1">
          <rect style={{ strokeWidth: 0, fill: "var(--blue-300)", height: 16, width: "100%" }}/>
          <path style={{ strokeWidth: 0, fill: "var(--blue-800)" }} d="M266,0h908c8.83,0,16,7.17,16,16H250c0-8.83,7.17-16,16-16Z"/>
          <path style={{ strokeWidth: 0, fill: "var(--yellow-400)" }} d="M437,0h566c8.83,0,16,7.17,16,16H421c0-8.83,7.17-16,16-16Z"/>
        </g>
      </svg>
    </section>
  );
};
