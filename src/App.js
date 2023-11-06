import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [lineOne] = useState("Welcome to Fullstack Development 1");
  const [lineTwo] = useState("React Js Programming Week9 lab exercise");
  const [lineThree] = useState("my student Id : 101400600");
  const [lineFour] = useState("Mahshad Eilanlou");
  const [lineFive] = useState("George Brown College, Toronto");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{lineOne}</h1>
        <h2>{lineTwo}</h2>
        <h3>{lineThree}</h3>
        <h4>{lineFour}</h4>
        <p>{lineFive}</p>
      </header>
    </div>
  );
}

export default App;
