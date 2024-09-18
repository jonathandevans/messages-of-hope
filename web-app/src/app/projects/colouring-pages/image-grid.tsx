"use client";

import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { lazy, Suspense } from "react";
import styles from "./image-grid.module.css";

const LINKS = [
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419086/Colouring%20Page%2018.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419086/Colouring%20Page%2016.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419088/Colouring%20Page%205.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419086/Colouring%20Page%2017.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419085/Colouring%20Page%2010.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419085/Colouring%20Page%2015.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419085/Colouring%20Page%2012.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419085/Colouring%20Page%2013.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419084/Colouring%20Page%2014.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419084/Colouring%20Page%2011.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419084/Colouring%20Page%209.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419083/Colouring%20Page%206.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419083/Colouring%20Page%204.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419082/Colouring%20Page%208.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419081/Colouring%20Page%202.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419081/Colouring%20Page%207.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419080/Colouring%20Page%203.png",
  "https://res.cloudinary.com/dmto5tfe5/image/upload/v1726419079/Colouring%20Page%201.png"
]

export const ImageGrid = () => {
  return (
    <MaxWidthWrapper className={styles.panel}>
      {LINKS.map((link, index) => (
        <a href={link} className={styles.container}>
          <img src={link} />
        </a>
      ))}
    </MaxWidthWrapper>
  );
};