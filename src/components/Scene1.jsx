import React from "react";
import SapphireGame from "../game";
import World from "../World";
import styled from "styled-components";

const MapDiv = styled.div`
  position: relative;
  grid-area: game;
  /* margin: 5%;  */
  /* top: 5%;
  left: 5%; */
  width: 1072px;
  height: 800px;
  background-image: url(/assets/overWorld.jpeg);
`;

const Scene1 = () => {
  return (
    <MapDiv>
      {/* <p>THIS IS SCENE 1 Y'ALL</p> */}
      <SapphireGame scene={World} />
    </MapDiv>
  );
};

export default Scene1;
