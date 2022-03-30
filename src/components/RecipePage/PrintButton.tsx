import React, { RefObject } from "react";
import { PrinterIcon } from "components/Icons";
import ReactToPrint from "react-to-print";
import Button from "components/RecipePage/Button";

const PrintButton = ({ printRef }: { printRef: RefObject<HTMLDivElement> }) => (
  <ReactToPrint
    trigger={() => <Button icon={<PrinterIcon />}>Print</Button>}
    content={() => printRef.current}
    documentTitle={"recipes"}
  />
);

export default PrintButton;
