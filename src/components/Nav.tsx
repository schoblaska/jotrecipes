import React, { useState, RefObject } from "react";
import { UploadIcon, ChevronUpIcon } from "components/Icons";
import PrintButton from "components/PrintButton";
import About from "components/Nav/About";
import Modal from "components/Modal";

const Nav = ({ printRef }: { printRef: RefObject<HTMLDivElement> }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="w-full bg-purple-600">
      <Modal isOpen={modalIsOpen} setIsOpen={setModalIsOpen} />
      <div className="mx-auto max-w-4xl">
        <div className="flex h-16 flex-none items-center px-6 font-mono text-purple-100">
          <div
            className="flex flex-initial cursor-pointer"
            onClick={() => setShowAbout(!showAbout)}
          >
            <div className="mr-2">About</div>
            <div className={showAbout ? "rotate-180" : ""}>
              <ChevronUpIcon />
            </div>
          </div>
          <div className="flex-1"></div>
          <div
            className="mr-4 flex-initial cursor-pointer"
            onClick={() => setModalIsOpen(true)}
          >
            <UploadIcon />
          </div>
          <div className="h-6 flex-initial">
            <PrintButton printRef={printRef} />
          </div>
        </div>
        <div className={showAbout ? "visible" : "hidden"}>
          <About />
        </div>
      </div>
    </div>
  );
};

export default Nav;
