import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Form from "./Form";
import Result from "./Result";
import About from "./About";
import "./App.css";

const App = () => {
  const [values, setValues] = useState({
    input: "",
    add: "",
  });
  const [newArray, setNewArray] = useState();
  const [resultText, setResultText] = useState("");

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const arrayItems = values.input.split(",");
  const dequeue = () => {
    arrayItems.shift();
  };

  const enqueue = (el) => {
    arrayItems.push(el);
  };

  const stackHandler = (e) => {
    e.preventDefault();
    dequeue();
    enqueue(values.add);
    setNewArray(arrayItems.join(", "));
    setResultText(
      "The first entried element is taken out first hence, First - in - First - Out. At the same time, a new element is added at front."
    );
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
              <Form changeHandler={changeHandler} stackHandler={stackHandler} />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Result
          originalArray={values.input}
          addedItem={values.add}
          newArray={newArray}
          resultText={resultText}
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
