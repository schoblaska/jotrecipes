import React, { Dispatch } from "react";
import Modal from "components/Modal";

interface AboutModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

const AboutModal = ({ isOpen, setIsOpen }: AboutModalProps) => (
  <Modal title="About" isOpen={isOpen} setIsOpen={setIsOpen}>
    <p>
      Jot Recipes formats Markdown recipes as cards from Ben Cohen&apos;s{" "}
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
          href="https://github.com/joeyschoblaska/jotrecipes"
          className="underline hover:text-purple-50"
        >
          joeyschoblaska/jotrecipes
        </a>
      </li>
    </ul>
  </Modal>
);

export default AboutModal;
