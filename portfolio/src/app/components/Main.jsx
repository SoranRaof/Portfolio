import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Welcome to my portfolio!
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I am <span className="text-[#5651ef]">Soran</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I am currently focusing on crafting responsive front-end web
            applications while learning back-end technologies. I have recently
            completed the <b className="text-[#5651ef]">Northcoders</b> Software
            Development Bootcamp, which has equipped me with valuable skills and
            knowledge in the field. This pursuit was driven by a strong desire
            to explore my passion for technology and create a meaningful impact
            through coding.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="http://linkedin.com/in/soran-raof-3a142726b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <a
                href="http://www.github.com/SoranRaof"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
