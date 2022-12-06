import React from "react";
import "./FIFO.css";

const FIFO = ({ changeHandler, stackHandler }) => {
  return (
    <section
      className="section-component section-fifo"
      onChange={changeHandler}
      onSubmit={stackHandler}
    >
      {/* First form for creating an array */}
      <form>
        <div>
          <label htmlFor="textInput">Enter your array elements</label>
          <input
            type="text"
            name="input"
            id="input"
            placeholder="For ex. 11, 20, 25, 8, 100 ..."
            // onChange={props.submitForm}
            required
          />
        </div>

        <div>
          <label htmlFor="stackPicker">Pick stack type</label>
          <select
            name="stack"
            id="stack"
            defaultValue={"choice"}
            // onChange={props.submitForm}
          >
            <option value="choice" disabled>
              FIFO or LIFO?
            </option>
            <option value="FIFO">FIFO</option>
            <option value="LIFO">LIFO</option>
          </select>
        </div>

        <div>
          <label></label>
          <input
            type="text"
            id="actionVal"
            name="actionVal"
            // onChange={props.submitForm}
          />
        </div>
        <div>
          <label></label>
          <button tyoe="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default FIFO;
