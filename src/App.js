import React from "react";
import "./App.css";

import Nasa from './components/Nasa';

function App() {
  return (
    <div className='stars'>
      <div className='twinkling'>
        <Nasa />
      </div>
    </div>
  );
}

export default App;
