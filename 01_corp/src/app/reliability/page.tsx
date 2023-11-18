import Hero from "@/components/Hero";
import ReliabilityImage from "public/reliability.jpg";

export default function Reliability() {
  return (
    <Hero
      title="Super high reliability hosting"
      imgAlt="welding"
      imgSrc={ReliabilityImage}
    />
  );
}
