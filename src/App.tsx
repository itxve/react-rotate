import React, { useState } from "react";
import logo from "./logo.svg";
import vue from "./vue.svg";
import "./App.css";
import { RotateY } from "rotate-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RotateY
            width={"400px"}
            back={<img src={logo} className="App-logo" alt="logo" />}
          >
            <img src={vue} alt="vue"></img>
          </RotateY>
        </div>
        <p>Hello Vite + React!</p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
