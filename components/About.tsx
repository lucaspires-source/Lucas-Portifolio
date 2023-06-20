import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5
      }}
      className="flex relative text-cent md:text-left md:text-flex md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center  flex-col h-screen"
    >
      <h3 className="absolute top-[10%] uppercase tracking-[10px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        src="https://pbs.twimg.com/media/Fwug3rUWwAY_1QP?format=jpg&name=large"
        alt="about section profile picture"
        className="hidden sm:inline mb-20 md:mb-0 flex-shrink-0 rounded-full w-56 h-56 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-center md:text-left text-lg md:text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#55d898]/50">little</span>{" "}
          background:
        </p>
        <p className="text-justify text-sm md:text-base">
          I am a motivated Full Stack software developer with a strong
          background in web and mobile application development. Proficient in
          JavaScript, TypeScript, Python, and technologies like Docker, Django,
          GraphQL, cloud computing, Node.js, React, and Next.js. Specializing in
          object-oriented software development, architecture, and database
          design. Experienced in agile methodologies like Scrum and Kanban.
          Skilled at collaborating with cross-functional teams, delivering
          high-quality software solutions, and meeting project deadlines. With
          experience working for companies and as a freelancer since 2019, I
          bring adaptability and a deep understanding of diverse business
          requirements. I am dedicated to continuous growth, open to learning
          new technologies, and contributing to open-source projects. My
          objective is to create impactful software solutions and thrive in the
          ever-evolving world of technology.
        </p>
      </div>
    </motion.div>
  );
}
