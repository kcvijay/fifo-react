import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav-header">
        <h1>QUEUE DATA STRUCTURE in JavaScript</h1>
        <p>
          <code>First in First Out (FIFO)</code>
        </p>
      </div>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
