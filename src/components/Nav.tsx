import React, { useState, RefObject } from "react";
import { UploadIcon, ChevronUpIcon } from "components/Icons";
import PrintButton from "components/Nav/PrintButton";
import About from "components/Nav/About";
import ShareModal from "components/ShareModal";
import Button from "components/Nav/Button";

interface NavProps {
  printRef: RefObject<HTMLDivElement>;
  text: string;
}

const Nav = ({ printRef, text }: NavProps) => {
  const [showAbout, setShowAbout] = useState(false);
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);

  return (
    <div className="w-full bg-purple-600">
      <ShareModal
        isOpen={shareModalIsOpen}
        setIsOpen={setShareModalIsOpen}
        text={text}
      />
      <div className="mx-auto max-w-4xl">
        <div className="flex h-16 flex-none items-center px-6 font-mono text-purple-100">
          <div
            className="flex flex-initial cursor-pointer items-center"
            onClick={() => setShowAbout(!showAbout)}
          >
            <div className="mr-2">About</div>
            <div className={`h-5 w-5 ${showAbout ? "rotate-180" : ""}`}>
              <ChevronUpIcon />
            </div>
          </div>
          <div className="flex-1"></div>

          <div className="flex flex-initial gap-x-2">
            <Button
              onClick={() => setShareModalIsOpen(true)}
              icon={<UploadIcon />}
            >
              Share
            </Button>
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
