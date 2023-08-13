import React from "react";
import button from "./Click_here.png";

const AdminUtil = () => {
  return (
    <div>
      <h2>Admin Tools: </h2>
      <p>This is the page showing several admin tools..</p>
      
      <ul>
        <li>Tool 1</li>
        <li>Tool 2</li>
        <li>Tool 3</li>
      </ul>
      <h2>Check out my GitHub repos:</h2>
      <a href="https://github.com/YanNazzim?tab=repositories">
        <img className="Github" src={button} alt="this button does nothing" />
      </a>
    </div>
  );
};

export default AdminUtil;
