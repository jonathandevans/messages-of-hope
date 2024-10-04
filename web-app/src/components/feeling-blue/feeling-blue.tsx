"use client";

import { useEffect, useState } from "react";
import { Button } from "../button/button";
import styles from "./feeling-blue.module.css";
import Link from "next/link";

export const FeelingBlue = () => {
  const [display, setDisplay] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("feeling-blue") === "hidden") return;
    setDisplay(true);
    document.getElementById("initial-focus")?.focus();
  }, []);

  if (!display) return null;

  const hidePanel = () => {
    setDisplay(false);
    localStorage.setItem("feeling-blue", "hidden");
  };

  return (
    <>
      <div className={styles.backdrop} onClick={hidePanel} />
      <section className={styles.panel}>
        <h2 className={styles.title}>Messages of Hope X Urdang</h2>
        <div className={styles.dots}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <h3 className={styles.date}>Friday 11th October</h3>

        <div className={styles.primary}>
          <h4>Wear Blue</h4>
          <p>Donate £1 and wear blue as part of our <span>Feeling Blue?</span> campaign.</p>
        </div>

        <div className={styles.secondary}>
          <h4>Are You Feeling Blue?</h4>
          <p>Join Messages of Hope in wearing blue on Friday 11th October and take the time to reflect on your own mental health. Use this day to reach out to someone if you need the support.</p>
        </div>

        <Button className={styles.button} onClick={hidePanel} variant={{ colour: "transparent", name: "standard", dark: true }}>
          Close
        </Button>
      </section>
    </>
  );
};