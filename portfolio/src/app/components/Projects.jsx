import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";
import skinScan from "../../../public/assets/skin-scan.png";
import ncNews from "../../../public/assets/NC-news-back-end.jpeg";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <h2 className="py-4">Front-End Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Skin Scan"
            backgroundImg={skinScan}
            projectUrl="https://main.d2lr9qljwqxiia.amplifyapp.com/"
          />
          {/* <ProjectItem
            title="NC News"
            projectUrl="https://main.d2lr9qljwqxiia.amplifyapp.com/"
          /> */}
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <h2 className="py-4">Back-End Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem
              title="Northcoders News"
              backgroundImg={ncNews}
              projectUrl="https://github.com/SoranRaof/NC-News-Backend"
            />
            {/* <ProjectItem
            title="NC News"
            projectUrl="https://main.d2lr9qljwqxiia.amplifyapp.com/"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
