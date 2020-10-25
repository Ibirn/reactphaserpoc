import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/scene1">Sc1</a>
          </li>
          <li>
            <a id="scene-1" href="/scene2">
              Sc2
            </a>
          </li>
          <li>
            <a href="/scene3">Sc3</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
