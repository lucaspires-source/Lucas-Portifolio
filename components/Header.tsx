import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const linkedinUrl = "https://www.linkedin.com/in/lucas-ribeiro-pires/";
const githubUrl = "https://github.com/lucaspires-source";
const emailUrl = "mailto:pires.lucas94@gmail.com";


export default function Header() {

  const handleEmailClick = () => {
    window.location.href = emailUrl;
  };

  return (
    <header className="sticky top-0 flex items-start justify-between p-5 max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-rows items-center"
      >
        <SocialIcon url={linkedinUrl} fgColor="gray" bgColor="transparent" />
        <SocialIcon url={githubUrl} fgColor="gray" bgColor="transparent" />
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer p-1"
      >
        <SocialIcon
          className="cursor-pointer"
          fgColor="gray"
          bgColor="transparent"
          network="email"
          onClick={handleEmailClick}
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get in Touch
        </p>
      </motion.div>
    </header>
  );
}
