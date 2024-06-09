import * as React from "react";
import Title from "../Layouts/Title";
import ProjectsDisplay from "./index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-8 border-b-[1px] border-b-black"
    >
      <Title title="Projects" des="What I have done" />
      <p color="black">I will update this, when I make something worth showing :D</p>
      <ProjectsDisplay />
    </section>
  );
};

export default Projects;
