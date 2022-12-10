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
  });
  const [newArray, setNewArray] = useState();
  const [resultText, setResultText] = useState("");

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const stackHandler = (e) => {
    e.preventDefault();
    let inputArray = values.input.split(","); // Converting to an array.
    inputArray.pop();
    setNewArray(inputArray.join(", "));
    setResultText(
      "The last entried element is taken out first hence, the fiirst entried element will be taken out last (First In Last Out)."
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
