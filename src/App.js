import React, { useEffect } from "react";
import Scene1 from "./components/Scene1";
import Scene2 from "./components/Scene2";
import Scene3 from "./components/Scene3";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import SapphireGame from "./game";
import World from "./World";

const MAP = "MAP";
const DIALOG = "DIALOG";

function Content(props) {
  console.log(props);
  const [stage, setStage] = React.useState(MAP);

  useEffect(() => {
    window.advanceScene = () => setStage(DIALOG);
  }, []);

  useEffect(() => {
    console.log(props.match.params.id);
    setStage(MAP);
  }, [props.match.params.id]);

  return (
    <>
      <Route
        path="/scene/:id"
        render={(props) => {
          return <SapphireGame scene={World} show={stage === MAP} />;
        }}
      />
      {stage === DIALOG && <Route path="/scene/:id" component={Scene2} />}
    </>
  );
}

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path="/scene/:id" component={Content} />
      </div>
    </BrowserRouter>
  );
}

export default App;
