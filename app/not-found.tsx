import { Metadata } from "next";
import Header from "@components/header";
import Footer from "@components/footer";
import Button from "@components/button";
import { generateMetadata } from "@/lib/utils";

export const metadata: Metadata = generateMetadata({
    title: "Page Not Found",
    index: false,
});

export default function NotFound() {
    return (
        <>
            <Header />
            <main className="flex flex-col w-[90%] mx-auto justify-center items-center gap-8">
                <h1 className="tracking-tight text-5xl">
                    404 | Page Not Found
                </h1>
                <p>
                    Not sure what you're trying to find, but it doesn't exist.
                </p>
                <Button href="/" colour="blue">
                    Go Home
                </Button>
            </main>
            <Footer />
        </>
    );
}
