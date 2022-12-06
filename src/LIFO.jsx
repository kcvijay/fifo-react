import React from "react";
import Result from "./Result";
import "./LIFO.css";

const LIFO = () => {
  return (
    <section className="section-component section-lifo">
      <form>
        <div>
          <label htmlFor="lifo-input">Enter your array elements</label>
          <input
            type="text"
            name="lifo-input"
            id="lifo-input"
            placeholder="For ex. 11, 20, 25, 8, 100 ..."
            required
          />
          <button id="create-lifo-array">Create an Array</button>
        </div>
        <div>
          <label htmlFor="lifo-add">Add an array element</label>
          <input type="text" name="lifo-add" id="lifo-add" required />
        </div>
        <div>
          <label></label>
          <button tyoe="submit" id="lifo-submit">
            Submit
          </button>
        </div>
      </form>
      <Result />
    </section>
  );
};

export default LIFO;
