import React, { RefObject } from "react";
import { PrinterIcon } from "components/Icons";
import ReactToPrint from "react-to-print";

const PrintButton = ({ printRef }: { printRef: RefObject<HTMLDivElement> }) => (
  <ReactToPrint
    trigger={() => (
      <button>
        <PrinterIcon />
      </button>
    )}
    content={() => printRef.current}
    documentTitle={"recipes"}
  />
);

export default PrintButton;
