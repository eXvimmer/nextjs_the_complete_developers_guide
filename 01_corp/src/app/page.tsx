import Hero from "@/components/Hero";
import HomeImage from "public/home.jpg";

export default function Home() {
  return (
    <Hero
      title="Professional Cloud Hosting"
      imgAlt="car factory"
      imgSrc={HomeImage}
    />
  );
}
