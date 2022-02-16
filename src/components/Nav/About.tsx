import React from "react";

const About = () => (
  <div className="bg-purple-500 p-6 font-mono text-sm text-purple-100">
    <p>
      Format Markdown recipes as cards from Ben Cohen's{" "}
      <a
        href="http://ftp.gwdg.de/pub/ctan/macros/latex/contrib/cuisine/cuisine.pdf"
        className="underline hover:text-purple-50"
      >
        cuisine package
      </a>{" "}
      for LaTeX, which groups instructions and ingredients together by step.
    </p>
    <ul className="list-inside list-disc pt-3">
      <li>
        Made by{" "}
        <a
          href="https://twitter.com/joeyschoblaska"
          className="underline hover:text-purple-50"
        >
          Joey Schoblaska
        </a>
      </li>
      <li>
        Github:{" "}
        <a
          href="https://github.com/joeyschoblaska/recipebox"
          className="underline hover:text-purple-50"
        >
          joeyschoblaska/recipebox
        </a>
      </li>
    </ul>
  </div>
);

export default About;
