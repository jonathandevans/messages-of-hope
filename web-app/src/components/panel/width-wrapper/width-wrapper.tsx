import { ReactNode } from "react";
import styles from "./width-wrapper.module.css";

export const WidthWrapper = ({ children, className } : { children : ReactNode; className? : string; }) => {
  return (
    <section className={`${styles.panel} ${className}`}>
      {children}
    </section>
  );
};
