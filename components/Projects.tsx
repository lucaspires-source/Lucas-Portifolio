/* eslint-disable react/jsx-key */
import React from "react";
import {motion}  from "framer-motion"
type Props = {};

const projects = [1, 2, 3, 4, 5, 6];
export default function Projects({}: Props) {
  return (
    <div className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0 overflow-hidden">
      <h3 className="absolute top-[10%] uppercase tracking-[10px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project, i) => (
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20">
            <motion.img
            initial={{
                y:-300,
                opacity:0
            }}
            whileInView={{
                y:0,
                opacity:1
            }}
            transition={{
                duration:1.2
            }}
            viewport={{once:true}}
              src="https://pbs.twimg.com/profile_images/1657350313857171457/MvYEM8R1_400x400.jpg"
              alt="project image"
            />{" "}
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <p className="text-xl md:text-4xl font-semibold text-center" ><span className=" underline decoration-[#55d898]">Case Study {i+1} of {projects.length}</span></p>
            </div>
            <p className="text-md text-center md:text-lg md:text-left">project sumary</p>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#55d898]/50 left-0 h-[500px] -skew-y-12" />
    </div>
  );
}
