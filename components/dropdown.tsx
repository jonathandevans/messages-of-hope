"use client";

import { HTMLAttributes, useState } from "react";
import styles from "./custom-css/dropdown.module.css";
import { ChevronDown } from "lucide-react";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={styles.dropdown}>
      <button className={`${styles.button} ${open ? `${styles.open}` : ""}`} onClick={() => {setOpen(!open)}}>
        {title}
        <ChevronDown />
      </button>
      <div className={`${styles.content} ${open ? `${styles.open}` : ""}`}>{children}</div>
    </div>
  );
};
export default Dropdown;