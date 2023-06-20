import Skill from "./Skill";
import { motion } from "framer-motion";
export default function Skills() {
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h4 className="absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl">
        Skills
      </h4>
      <p className=" uppercase absolute top-36 tracking-[5px] text-gray-500  text-sm">
        Hover over a Skill for current profieciency
      </p>

      <div className="grid grid-cols-4 gap-5">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}
