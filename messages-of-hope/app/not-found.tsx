import Button from "@/components/ui/button/button";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  return (
    <>
      <h2
        style={{ margin: "4rem auto 1rem auto", textAlign: "center", fontSize: "2rem" }}
      >
        404 | Not Found
      </h2>
      <Button href="/" colour="outline" style={{ margin: "0 auto" }}>
        Go Home <ArrowRight strokeWidth={3} size={16} />
      </Button>
    </>
  );
};
export default NotFound;
