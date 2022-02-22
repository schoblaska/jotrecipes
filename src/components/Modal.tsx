import React, { Dispatch } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

const Modal = ({ isOpen, setIsOpen }: ModalProps) => (
  <ReactModal isOpen={isOpen}>
    <div>Hello, this is the modal.</div>
    <div className="cursor-pointer font-mono" onClick={() => setIsOpen(false)}>
      [x] Close
    </div>
  </ReactModal>
);

export default Modal;
