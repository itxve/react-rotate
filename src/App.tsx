import React, { useState } from "react";
import logo from "./logo.svg";
import vue from "./vue.svg";
import "./App.css";
import { RotateY } from "rotate-dom";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <RotateY
            style={{ width: "200px", height: "200px" }}
            back={
              <div>
                <img
                  src={logo}
                  style={{ height: "200px" }}
                  className="App-logo"
                  alt="logo"
                />
                <div>React</div>
              </div>
            }
          >
            <div>
              <img src={vue} alt="vue" />
              <div>Vue</div>
            </div>
          </RotateY>
        </div>
        <p></p>
        <p>
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          <code></code>
        </p>
      </header>
    </div>
  );
}
