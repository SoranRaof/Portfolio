import React from "react";
import ProjectItem from "./ProjectItem";
import skinScan from "../../../public/assets/skin-scan.png";
import ncNewsFrontEnd from "../../../public/assets/NC-News-Front-End.png";
import Promptopia from "../../../public/assets/Platform-Prompt.png";
import taskManager from "../../../public/assets/task-manager.png";

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
            tech={"Javascript / React JS / PostgreSQL"}
            backgroundImg={ncNewsFrontEnd}
            projectUrl={"ncnewsfrontend"}
          />

          <ProjectItem
            title="Ai Prompt Share"
            tech={"Javascript / Next JS / NextAuth / MongoDB"}
            backgroundImg={Promptopia}
            projectUrl={"promptopia"}
          />

          <ProjectItem
            title="Task Manager App"
            tech={"TypeScript / Next JS / Express / MongoDB"}
            backgroundImg={taskManager}
            projectUrl={"taskmanager"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
