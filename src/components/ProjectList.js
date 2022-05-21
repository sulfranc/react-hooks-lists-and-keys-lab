import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectListarray = projects.map
((projects => <ProjectItem technologies = {projects.technologies}
    about = {projects.about}name ={projects.name} key ={projects.id}/> ))
  
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectListarray}</div>
    </div>
  );
}

export default ProjectList;

