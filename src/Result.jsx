import React from "react";
import "./Result.css";

const Result = ({ originalArray, addedItem, resultText, newArray }) => {
  return (
    <section className="section-result">
      <div>
        <label className="subheader">Original Array</label>
        <p className="original-array">{originalArray}</p>
      </div>
      <div>
        <label className="subheader">Added Item</label>
        <p className="added-item">{addedItem}</p>
      </div>
      <div>
        <label className="subheader">New Array</label>
        <p className="new-array">{newArray}</p>
      </div>

      <div>
        <label className="subheader">What happened?</label>
        <p className="result-txt">{resultText}</p>
      </div>
    </section>
  );
};

export default Result;
