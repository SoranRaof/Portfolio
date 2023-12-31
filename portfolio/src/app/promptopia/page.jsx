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
          <h2 className="py-2">Promptopia</h2>
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
            I developed a web application centered around AI prompts, designed
            to share and discover among users. Both the frontend and backend was
            created using Next.js. The main goal for this project was to learn
            how to build a full stack CRUD application using only Next.js.
          </p>
          <br />
          <p>
            I used Next.js's dynamic API routes to create an efficient
            foundation for API endpoints. Additionally, I integrated user
            authentication through Next Auth, ensuring a secure and personalized
            experience. Users have the capability to effortlessly create, read,
            update, and delete prompts. Users can also filter specific hashtags,
            thereby enabling others to discover content aligned with their
            interests. Furthermore, users can seamlessly navigate through
            different profiles, fostering a sense of community engagement.
          </p>
          <br />
          <p>
            I chose MongoDB for the storage and retrieval of user-generated
            content, enhancing the overall user experience. Finally I used
            Tailwind CSS to create a pleasing user interface that is visually
            appealing and responsive.
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
