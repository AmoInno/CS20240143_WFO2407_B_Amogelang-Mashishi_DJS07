import React from "react";

export default function Header() {
  return (
    <>
      <header className="header ">
        <img
          src="images\trollface.png"
          alt="troll face image"
          className="header--image"
        />
        <h2 className="header--title">Header Component</h2>
        <h4 className="header--project">React Course - Project</h4>
      </header>
    </>
  );
}
