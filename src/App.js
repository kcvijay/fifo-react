import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import FIFO from "./FIFO";
import Result from "./Result";
import About from "./About";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    input: "",
    stack: "",
    actionVal: "",
  });

  const [newArray, setNewArray] = useState();
  const [resultText, setResultText] = useState("");

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const stackHandler = (e) => {
    e.preventDefault();
    let inputArray = values.input.split(",");
    if (values.stack === "FIFO") {
      inputArray.push(values.actionVal);
      inputArray.shift();
      setNewArray(inputArray.join(", "));
      setResultText(
        "The first entried element is taken out and new element is added at front."
      );
    } else if (values.stack === "LIFO") {
      inputArray.pop();
      inputArray.unshift(values.actionVal);
      setNewArray(inputArray.join(", "));
      setResultText(
        "The last entried element is taken out and new element is added at behind."
      );
    } else return;
  };

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Nav />
      </div>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <FIFO changeHandler={changeHandler} stackHandler={stackHandler} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Result
          originalArray={values.input}
          stackType={values.stack}
          actionVal={values.actionVal}
          newArray={newArray}
          resultText={resultText}
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
