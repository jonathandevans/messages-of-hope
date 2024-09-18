import { ReactNode } from "react";
import styles from "./max-width-wrapper.module.css";

export const MaxWidthWrapper = ({ children, className } : { children : ReactNode; className? : string; }) => {
  return (
    <section className={`${styles.panel} ${className}`}>
      {children}
    </section>
  );
};
