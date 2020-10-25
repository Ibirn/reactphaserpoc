import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* <Link to="/scene1">Sc1</Link> */}
            <a href="/scene1">Sc1</a>
          </li>
          <li>
            {/* <Link id="scene-1" to="/scene2">
              Sc2
            </Link> */}
            <a id="scene-1" href="/scene2">
              Sc2
            </a>
          </li>
          <li>
            {/* <Link to="/scene3">Sc3</Link> */}
            <a href="/scene3">Sc3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
