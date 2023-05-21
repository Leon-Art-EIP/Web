import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Test } from "./test";

function App() {
  let n = 0;
  let arr = ["test"];

  let result = n + arr.length;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Test r={result} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
