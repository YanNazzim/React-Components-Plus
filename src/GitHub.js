import React from "react";
import button from "./Click_here.png";

const GitHub = () => {
  return (
    <div>
      <p>Here you can check out my other GitHub Repo's:</p>

      <a href="https://github.com/YanNazzim?tab=repositories">
        <img className="Github" src={button} alt="this button does nothing" />
      </a>
    </div>
  );
};

export default GitHub;
