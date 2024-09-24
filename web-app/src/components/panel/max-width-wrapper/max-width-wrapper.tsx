import { ReactNode } from "react";
import styles from "./max-width-wrapper.module.css";

export const MaxWidthWrapper = ({
  children,
  className = "",
  style = {},
}: {
  children: ReactNode;
  className?: string;
  style?: any;
}) => {
  return (
    <section className={`${styles.panel} ${className}`} style={style}>
      {children}
    </section>
  );
};
