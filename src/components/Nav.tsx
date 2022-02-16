import React, { useState, RefObject } from "react";
import { UploadIcon, ChevronUpIcon } from "components/Icons";
import ComingSoon from "components/ComingSoon";
import PrintButton from "components/PrintButton";
import About from "components/Nav/About";

const Nav = ({ printRef }: { printRef: RefObject<HTMLDivElement> }) => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <div className="flex h-16 flex-none items-center bg-purple-600 px-6 font-mono text-purple-100">
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
        <div className="mr-4 flex-initial">
          <ComingSoon>
            <UploadIcon />
          </ComingSoon>
        </div>
        <div className="h-6 flex-initial">
          <PrintButton printRef={printRef} />
        </div>
      </div>
      <div className={showAbout ? "visible" : "hidden"}>
        <About />
      </div>
    </div>
  );
};

export default Nav;
