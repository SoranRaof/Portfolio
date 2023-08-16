import React from "react";
import ProjectItem from "./ProjectItem";
import skinScan from "../../../public/assets/skin-scan.png";
import ncNewsFrontEnd from "../../../public/assets/NC-News-Front-End.png";
import Promptopia from "../../../public/assets/Platform-Prompt.png";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651ef]">
          Projects
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Skin Scan"
            tech={"Vue JS / TypeScript / AWS"}
            backgroundImg={skinScan}
            projectUrl={"skinscan"}
          />

          <ProjectItem
            title="Northcoders News"
            tech={"Javascript / React JS"}
            backgroundImg={ncNewsFrontEnd}
            projectUrl={"ncnewsfrontend"}
          />

          <ProjectItem
            title="Ai Prompt Share"
            tech={"Javascript / Next JS"}
            backgroundImg={Promptopia}
            projectUrl={"promptopia"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
