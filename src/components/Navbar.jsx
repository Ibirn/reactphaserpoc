import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/scene1">Sc1</Link>
          </li>
          <li>
            <Link id="scene-1" to="/scene2">
              Sc2
            </Link>
          </li>
          <li>
            <Link to="/scene3">Sc3</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
