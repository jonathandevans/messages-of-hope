import { generateMetadata } from "@lib/utils";
import { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = generateMetadata({
    title: "Colouring Pages",
    description:
        "Messages of Hope provides free colouring pages to help spread hope and positivity. Download and print our colouring pages to share your creativity with us.",
    index: false,
    path: "/colouring-pages",
});

const LINKS = [
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2018.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2016.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%205.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2010.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2017.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2015.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2012.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2013.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2014.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%206.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%2011.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%209.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%202.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%208.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%204.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%207.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%201.png",
    "https://mfppfptcdbddlkgzuape.supabase.co/storage/v1/object/public/general/colouring/Colouring%20Page%203.png",
];

export default function ColouringPages() {
    return (
        <>
            <main className={styles.panel}>
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
            </main>
        </>
    );
}
