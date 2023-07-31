import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectItem from "./ProjectItem";

export const Projects = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <h2 className="py-4">Front-End Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Skin Scan"
            projectUrl="https://main.d2lr9qljwqxiia.amplifyapp.com/"
          />
          <ProjectItem
            title="NC News"
            projectUrl="https://main.d2lr9qljwqxiia.amplifyapp.com/"
          />
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-[1240px] mx-auto px-2 py-16">
          <h2 className="py-4">Back-End Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectItem projectUrl="https://github.com/SoranRaof/NC-News-Backend" />
            <ProjectItem projectUrl="https://github.com/SoranRaof/NC-News-Backend" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
