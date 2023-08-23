import React from "react";
import Image from "next/image";
import taskManager from "../../../public/assets/task-manager.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function SkinScan() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={taskManager}
          alt="Skin Scan"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Task Manager App</h2>
          <h3>Next JS / TypeScript / JavaScript / MongoDB </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651ef]">
            Project
          </p>
          <h2 className="py-2">Overview</h2>
          <br></br>
          <p>
            For this task manager application, I developed its backend using
            Node.js and Express. In the backend I created RESTful APIs, for CRUD
            operations. The APIs interact with MongoDB, ensuring efficient data
            storage and retrieval. I also implemented some error handling,
            enhancing the application's reliability and performance. On the
            frontend, I chose Next.js, TypeScript, and Tailwind CSS to craft a
            dynamic user interface.
          </p>
          <a
            href="https://github.com/SoranRaof/Task-Manager-Back-End"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300">
              Backend
            </button>
          </a>
          <a
            href="https://github.com/SoranRaof/Task-Manager-Front-End/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 cursor-pointer hover:scale-110 ease-in duration-300">
              Frontend
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Express
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-[#5651ef]">Back</p>
        </Link>
      </div>
    </div>
  );
}
