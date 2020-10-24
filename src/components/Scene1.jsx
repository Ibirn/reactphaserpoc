import React from "react";
import SapphireGame from "../game";
import World from "../World";

const Scene1 = () => {
  return (
    <div>
      <p>THIS IS SCENE 1 Y'ALL</p>
      <SapphireGame scene={World} />
    </div>
  );
};

export default Scene1;
