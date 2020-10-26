import React, { useState } from "react";
import Scene1 from "./components/Scene1";
import Scene2 from "./components/Scene2";
import Scene3 from "./components/Scene3";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import allActions from "./reducers/actions";
import Frame from "./components/Frame";
function App() {
  //trying redux
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <button onClick={() => dispatch(allActions.incrementCounter())}>
          {counter}
        </button>
        <Frame/>
        <Navbar />
        <Route path="/scene1" component={Scene1} />
        <Route path="/scene2" component={Scene2} />
        <Route path="/scene3" component={Scene3} />
      </div>
    </BrowserRouter>
  );
}

export default App;
