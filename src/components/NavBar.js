import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksArray = links.map((links) =>  {
    return <a href ={`#${links}`} key={links}>{links}</a>;
  });
  console.log(linksArray)

  return <nav>{linksArray}</nav>;
}

export default NavBar;
