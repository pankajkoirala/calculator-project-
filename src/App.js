import React from "react";

import "./App.css";
import Calculator from "./calculator/calculator";
import Samp from "./calculator/sam";

function App() {
  return (
    <div className="App bg-danger ">
      <Calculator />
      <div className="m-4">
        <Samp />
      </div>
    </div>
  );
}

export default App;
