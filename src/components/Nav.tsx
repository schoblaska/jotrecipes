import React, { useState, RefObject } from "react";
import { UploadIcon } from "components/Icons";
import PrintButton from "components/PrintButton";
import ShareModal from "components/Nav/ShareModal";
import AboutModal from "components/Nav/AboutModal";
import Button from "components/Button";

interface NavProps {
  printRef: RefObject<HTMLDivElement>;
  text: string;
}

const Nav = ({ printRef, text }: NavProps) => {
  const [shareModalIsOpen, setShareModalIsOpen] = useState(false);
  const [aboutModalIsOpen, setAboutModalIsOpen] = useState(false);

  return (
    <div className="mx-auto mb-8 max-w-prose font-serif print:hidden">
      <ShareModal
        isOpen={shareModalIsOpen}
        setIsOpen={setShareModalIsOpen}
        text={text}
      />
      <AboutModal isOpen={aboutModalIsOpen} setIsOpen={setAboutModalIsOpen} />
      <div>
        <div className="flex flex-none items-center text-purple-100">
          <div className="flex flex-initial">
            <a
              className="cursor-pointer text-purple-700 underline hover:text-purple-600"
              onClick={() => setAboutModalIsOpen(true)}
            >
              About Jot Recipes
            </a>
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
      </div>
    </div>
  );
};

export default Nav;
