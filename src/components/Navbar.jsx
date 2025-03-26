import React from "react";

const Navbar = ({ projectName = "Default Todo App" }) => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">{projectName}</span>
      </div>
    </nav>
  );
};

export default Navbar;
