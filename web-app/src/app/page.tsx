import Banner from "@/components/Banner/Banner";
import TextPanel from "@/components/TextPanel/TextPanel";

const Page = () => {
  return (
    <main>
      <Banner image={"Speech at Connections 2024.jpg"} />
      
      <TextPanel imageSrc="You're Loved - Connections 2024.jpg" imageAlt="'You're loved' written on a whiteboard at the Connections 2024 event">
        <p>Messages of Hope is a Community Interest Company encouraging people to write hopeful messages for those struggling with mental health. These messages become stickers and Instagram posts spread across the UK, aiming to improve mental health and support psychiatric patients.</p>
        <p>Messages of Hope is a Community Interest Company that was created to...</p>
      </TextPanel>
    </main>
  );
};
export default Page;
