import Hero from "@/components/Hero";
import PerformanceImage from "public/performance.jpg";

export default function Performance() {
  return (
    <Hero
      title="We server high performance applications"
      imgAlt="welding"
      imgSrc={PerformanceImage}
    />
  );
}
