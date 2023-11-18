import Hero from "@/components/Hero";
import ScaleImage from "public/scale.jpg";

export default function Scale() {
  return (
    <Hero
      title="Scale your app to infinity"
      imgAlt="steel factory"
      imgSrc={ScaleImage}
    />
  );
}
