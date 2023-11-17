import Image, { StaticImageData } from "next/image";

interface HeroProps {
  imgSrc: StaticImageData;
  imgAlt: string;
  title: string;
}

function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src={props.imgSrc}
          alt={props.imgAlt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r  from-slate-900" />
      </div>
      <div className="flex items-center justify-center pt-48">
        <h1 className="text-6xl text-white">{props.title}</h1>
      </div>
    </div>
  );
}

export default Hero;
