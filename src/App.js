import React, { useState } from "react";
import Scene1 from "./components/Scene1";
import Scene2 from "./components/Scene2";
import Scene3 from "./components/Scene3";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  //checking to see if updating state impacts the phaser map at all
  //this does not affect the phaser map, but every time we navigate away, it does re-render the button count, which would not be ideal in the app because we want to have persistent state in our nav/game frame
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
        <button onClick={() => setCounter((prev) => prev + 1)}>
          {counter}
        </button>
      <BrowserRouter>
        <Navbar />
        <Route path="/scene1" component={Scene1} />
        <Route path="/scene2" component={Scene2} />
        <Route path="/scene3" component={Scene3} />
      </BrowserRouter>
    </div>
  );
}

export default App;
