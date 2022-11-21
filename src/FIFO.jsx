import React from "react";
import "./FIFO.css";

const FIFO = () => {
  return (
    <section className="section-component section-fifo">
      <form>
        <div>
          <label htmlFor="fifo-input">Enter your array elements</label>
          <input
            type="text"
            name="fifo-input"
            id="fifo-input"
            placeholder="For ex. 11, 20, 25, 8, 100 ..."
            required
          />
          <button id="create-fifo-array">Create an Array</button>
        </div>
        <div>
          <label htmlFor="fifo-add">Add an array element</label>
          <input type="text" name="fifo-add" id="fifo-add" required />
        </div>
        <div>
          <label></label>
          <button tyoe="submit" id="fifo-submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default FIFO;
