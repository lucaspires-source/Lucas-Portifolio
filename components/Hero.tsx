import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Greetings! I'm Lucas.",
      "A skilled Full Stack Developer."
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/60105171?v=4"
        width={300}
        height={300}
        alt="profile picture"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">
          {" "}
          Software Engineer
        </h2>
        <p className="text-2xl lg:text-4xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#55d898" />
        </p>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href='#experience'>
            <button className="heroButton">Experience</button>
          </Link>
          <Link href='#skills'>
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="projects">
            <button className="heroButton">Projetcs</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
