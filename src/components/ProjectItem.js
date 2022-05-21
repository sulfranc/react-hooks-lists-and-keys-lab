import React from "react";


function ProjectItem({ name, about, technologies }) {
  console.log(technologies)
  //const techArray = technologies.map((technologies) =>  {
    

  //return <span key={name}>{technologies}</span>;
 // });
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {technologies.map((item,id) => { return <span key={id}>{item}</span> })}      </div>
    </div>
  );
}

export default ProjectItem;
