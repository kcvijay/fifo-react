import React from "react";
import "./Form.css";

const Form = ({ changeHandler, stackHandler }) => {
  return (
    <section
      className="section-component section-form"
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
            required
          />
        </div>

        <div>
          <label htmlFor="stackPicker">Stack type</label>
          <input type="text" value="FIFO (First In First Out)" readOnly />
        </div>

        <div>
          <label htmlFor="add">Add an Element</label>
          <input type="text" id="add" name="add" />
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

export default Form;
