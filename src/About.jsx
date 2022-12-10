import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="section-component section-about">
      <h2>First in First Out</h2>
      <p>
        This website is a simple representation of First-In-First-Out in
        queueing method calculated with the help of JavaScript.
      </p>
      <p>Website UI is done in React and CSS.</p>
      <p>
        Concurrent and updated source code is available at &nbsp;
        <a
          href="https://github.com/kcvijay/fifo-react.git"
          target="_blank noreferer"
        >
          GitHub
        </a>
        .
      </p>
      <p>&mdash;&nbsp;Vijay</p>
    </section>
  );
};

export default About;
