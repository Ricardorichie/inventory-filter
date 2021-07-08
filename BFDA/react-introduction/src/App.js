import logo from "./logo.svg";
import React, { useState, u } from "react";
// import './App.css';
import "./App.css";

// function App() {
export const App = () => {
  const name = "it is the afternoon";
  const arrowFunction = (int) => {
    if (int === 1) {
      return <h1>It is the morning</h1>;
    } else if (int === 2) {
      return <h1>It is the afternoon</h1>;
    } else {
      return <h1>It is night</h1>;
    }
  };
  const [sampleName, setsampleName] = useState([
    { name: "wole", age: 10, number: 2000 },
    { name: "wale", age: 30, number: 20 },
    { name: "test", number: 12, age: 10 },
  ]);

  const toggle = (anArguement) => {
    // const spreadValue = [...sampleName]
    const newValue = { name: "another name", age: 500, number: 40 };
    const aVariable = [...sampleName, newValue];
    // sampleName = [...sampleName, newValue];
    setsampleName(aVariable);
  };
  const mapValue = sampleName.map((val) => (
    <>
      <h1>My name is:{val.name}</h1>
      <h1>My age is:{val.age}</h1>
      <h1>My number is: {val.number}</h1>
    </>
  ));
  return (
    <div>
      Hello World! {name}
      <button onClick={() => toggle("hello")}>click me!</button>
      {/* {arrowFunction()} */}
      <h1>{sampleName[1].age}</h1>
      {mapValue}
    </div>
  );
};

// export default App;
