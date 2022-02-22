import React, { Dispatch } from "react";
import ReactModal from "react-modal";
import { XIcon } from "components/Icons";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  title?: string;
}

const Modal = ({ isOpen, setIsOpen, title }: ModalProps) => (
  <ReactModal
    ariaHideApp={false}
    isOpen={isOpen}
    overlayClassName="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
    className="flex min-h-screen justify-center px-4 pt-4 pb-20"
  >
    <div className="flex flex-col justify-center">
      <div className="max-w-md font-mono text-sm text-white">
        <div className="flex items-center justify-end bg-purple-600 px-4 py-2">
          <div className="flex-grow leading-none">{title}</div>
          <div
            className="cursor-pointer font-mono"
            onClick={() => setIsOpen(false)}
          >
            <XIcon />
          </div>
        </div>

        <div className="bg-purple-500 p-4">
          Hello, this is the modal. What happens if the text gets really long, I
          wonder?
        </div>
      </div>
    </div>
  </ReactModal>
);

export default Modal;
