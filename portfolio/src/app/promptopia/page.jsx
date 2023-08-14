import React from "react";
import Image from "next/image";
import PromptopiaImg from "../../../public/assets/Platform-Prompt.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

export default function Promptopia() {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={PromptopiaImg}
          alt="Nc News"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NC News Back-End</h2>
          <h3>Next JS / JavaScript / Next Auth /MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-xl tracking-widest uppercase text-[#5651ef]">
            Project
          </p>
          <h2 className="py-2">Overview</h2>
          <p>
            I built a news article backend using Express.js, which involved
            creating restful API routes for accessing topics, articles and
            comments, and implementing error handling middleware for handling
            custom, server and PostgreSQL errors. To ensure the API was
            functioning correctly, I wrote a test file using Jest, which
            provided good coverage of the backend. I also created a
            user-friendly frontend using React by implementing dynamic rendering
            of articles fetched from the backend API using Axios. This allowed
            users to navigate through articles, view their content, and engage
            with the associated comments. I also used Tailwind CSS to enhance
            the styling aspects of the application and applied responsive design
            principles that automatically adjusted the layout, spacing, and
            typography based on the device's screen size.
          </p>
          <br />
          <p>
            I also created a user-friendly frontend using React by implementing
            dynamic rendering of articles fetched from the backend API using
            Axios. This allows users to navigate through articles, view their
            content, and engage with the associated comments. I also used
            Tailwind CSS to enhance the styling aspects of the application and
            applied responsive design principles that automatically adjusted the
            layout, spacing, and typography based on the device's screen size.
          </p>
          <a
            href="https://github.com/SoranRaof/Share-Ai-Prompts/tree/main/share-ai-prompts"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300">
              Code
            </button>
          </a>
          <a
            href="https://share-ai-prompts-three.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 cursor-pointer hover:scale-110 ease-in duration-300">
              Demo
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Next Auth
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MongoDB
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
