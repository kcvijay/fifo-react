import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section-component section-about">
      <h2>FIFO and LIFO</h2>
      <p>
        This website is a simple representation of First-In-First-Out and
        Last-In-First-Out stacking method calculated with the help of
        JavaScript.
      </p>
      <p>Website UI is done in React and CSS.</p>
      <p>
        This website is the subject of constant improvements over time.
        Concurrent and updated source code is available at &nbsp;
        <a href="/">GitHub</a>.
      </p>
      <p>&mdash;&nbsp;Vijay</p>
    </section>
  );
};

export default About;
