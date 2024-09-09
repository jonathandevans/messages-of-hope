import { Button } from "@/components/button/button";

const col = {
}

const Page = () => {
  return (
    <div style={{width: "100%", marginTop: "4.5rem", display: "flex", flexWrap: "wrap", gap: "1rem"}}>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>Standard Button</p>
        <Button>Test Button</Button>
        <Button>Really Long Test Button</Button>
        <Button href="/">Test Link</Button>
        <Button href="/">Really Long Test Link</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>No Icon</p>
        <Button variant={{ icon: false }}>Test Button</Button>
        <Button href="/" variant={{ icon: false }}>Test Link</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>Coloured Standard Button</p>
        <Button variant={{ colour: "zinc" }}>Zinc Test Button</Button>
        <Button variant={{ colour: "blue" }}>Blue Test Button</Button>
        <Button variant={{ colour: "yellow" }}>Yellow Test Button</Button>
        <Button variant={{ colour: "darkBlue" }}>Dark Blue Test Button</Button>
        <Button variant={{ colour: "green" }}>Green Test Button</Button>
        <Button variant={{ colour: "red" }}>Red Test Button</Button>
        <Button variant={{ colour: "transparent" }}>Transparent Test Button</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>Coloured Outline Button</p>
        <Button variant={{ name: "outline", colour: "zinc" }}>Zinc Test Button</Button>
        <Button variant={{ name: "outline", colour: "blue" }}>Blue Test Button</Button>
        <Button variant={{ name: "outline", colour: "yellow" }}>Yellow Test Button</Button>
        <Button variant={{ name: "outline", colour: "darkBlue" }}>Dark Blue Test Button</Button>
        <Button variant={{ name: "outline", colour: "green" }}>Green Test Button</Button>
        <Button variant={{ name: "outline", colour: "red" }}>Red Test Button</Button>
        <Button variant={{ name: "outline", colour: "transparent" }}>Transparent Test Button</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>Coloured Fill Button</p>
        <Button variant={{ name: "fill", colour: "zinc" }}>Zinc Test Button</Button>
        <Button variant={{ name: "fill", colour: "blue" }}>Blue Test Button</Button>
        <Button variant={{ name: "fill", colour: "yellow" }}>Yellow Test Button</Button>
        <Button variant={{ name: "fill", colour: "darkBlue" }}>Dark Blue Test Button</Button>
        <Button variant={{ name: "fill", colour: "green" }}>Green Test Button</Button>
        <Button variant={{ name: "fill", colour: "red" }}>Red Test Button</Button>
        <Button variant={{ name: "fill", colour: "transparent" }}>Transparent Test Button</Button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", }}>
        <p>Sized Buttons</p>
        <Button variant={{ size: "sm", colour: "blue" }}>Small Test Button</Button>
        <Button variant={{ size: "md", colour: "blue" }}>Medium Test Button</Button>
        <Button variant={{ size: "lg", colour: "blue" }}>Large Test Button</Button>
        <Button variant={{ size: "xl", colour: "blue" }}>Extra Large Test Button</Button>
      </div>
    </div>
  );
};
export default Page;