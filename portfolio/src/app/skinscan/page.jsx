import React from "react";
import Image from "next/image";
import skinScan from "../../../public/assets/skin-scan.png";
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
          src={skinScan}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Skin Scan</h2>
          <h3>Vue JS / TypeScript / AWS </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <br></br>
          <p>**Ongoing project**</p>
          <br></br>
          <p>
            An app that utilises machine learning technology for diagnosing skin
            conditions. In this project, the machine learning algorithm was
            built using PyTorch, Flask, and Heroku. For the frontend, we
            utilised Vue, TypeScript, and AWS Amplify. To ensure seamless
            integration, the backend was built with JavaScript and Express,
            which is hosted on AWS EC2. Additionally, the app uses MySQL as the
            database, which is hosted on Amazon RDS.
          </p>
          <a
            href="https://github.com/SoranRaof/skin-scanner-front-end"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://main.d2lr9qljwqxiia.amplifyapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Vue.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AWS Amplify
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
}
