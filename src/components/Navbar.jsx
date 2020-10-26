import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <nav>
        <button onClick={() => setCounter((prev) => prev + 1)}>
          {counter}
        </button>
        <ul>
          <li>
            <Link to="/scene1">Sc1</Link>
          </li>
          <li>
            <Link id="nextscene" to="/scene2">
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
