import Button from "components/Button";
import { PrinterIcon } from "components/Icons";
import { RefObject } from "react";
import { useReactToPrint } from "react-to-print";

const PrintButton = ({
  printRef,
}: {
  printRef: RefObject<HTMLDivElement | null>;
}) => {
  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: "recipes",
  });

  return (
    <Button icon={<PrinterIcon />} onClick={() => handlePrint()}>
      Print
    </Button>
  );
};

export default PrintButton;
