import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import FIFO from "./FIFO";
import LIFO from "./LIFO";
import About from "./About";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-wrapper">
          <Nav />
        </div>
        <main>
          <Routes>
            <Route path="/" element={<FIFO />} />
            <Route path="/lifo" element={<LIFO />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
