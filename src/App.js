import React from 'react';
import Scene1 from './components/Scene1';
import Scene2 from './components/Scene2';
import Scene3 from './components/Scene3';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Route path='/scene1' component={Scene1} />
          <Route path='/scene2' component={Scene2} />
          <Route path='/scene3' component={Scene3} />
      </div>
    </BrowserRouter>
  );
}

export default App;
