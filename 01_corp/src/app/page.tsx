import Image from "next/image";
import HomeImage from "public/home.jpg";

export default function Home() {
  return (
    <div>
      Home Page
      <div className="absolute inset-0 -z-10">
        <Image
          src={HomeImage}
          alt="car factory"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
}
