import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
};
export default function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://pbs.twimg.com/profile_images/1657350313857171457/MvYEM8R1_400x400.jpg"
        alt="skill"
        className="rounded-full border  border-gray-500 object-cover w-15 h-15 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transtion duration-300 ease-in-out"
      />
      <div className=" rounded-full absolute opacity-0 group-hover:opacity-80 transiton  duration-300 ease-out group-hover:bg-white/80 w-15 h-15 md:w-28 md:h-28 xl:w-32 xl:h-32 ">
        <div className="flex items-center justify-center h-full">
            <p className="font-bold text-black  opacity-100 text-lg md:text-3xl">100%</p>
        </div>
      </div>
    </div>
  );
}
