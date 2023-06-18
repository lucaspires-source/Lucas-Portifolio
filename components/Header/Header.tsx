import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className=" sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1
        }}
        className="flex flex-rows items-center"
      >
        <SocialIcon
          url="https://www.linkedin.com/in/lucas-ribeiro-pires/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/lucaspires-source"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <div className="flex flex-row items-center text-gray-300 cursor-pointer p-1">
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
        />
        <p className="upercase hidden md:inline-flex text-sm text-gray-400">
          {" "}
          Get in Touch
        </p>
      </div>
    </header>
  );
}
