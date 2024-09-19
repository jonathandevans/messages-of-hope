import { Button } from "@/components/button/button";
import { Banner } from "@/components/panel/banner/banner";
import { MaxWidthWrapper } from "@/components/panel/max-width-wrapper/max-width-wrapper";
import { generateMetadata } from "@/lib/utils";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata : Metadata = generateMetadata({ title: "Page Not Found"});

const Page = () => {
  return (
    <>
      <Banner title="404 - Not Found" image="" short={true} />

      <MaxWidthWrapper style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "1rem" }}>
        <p>I'm not sure what you were looking for, but it doesn't exist.</p>
        <Button href="/" variant={{ colour:"blue", icon:false }}><FontAwesomeIcon icon={faHome} style={{ paddingRight: "0.4rem" }} /> Go Home</Button>
      </MaxWidthWrapper>
    </>
  );
};
export default Page;