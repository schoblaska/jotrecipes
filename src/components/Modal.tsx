import React, { Dispatch } from "react";
import ReactModal from "react-modal";
import { XIcon } from "components/Icons";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  title?: string;
  children?: JSX.Element | JSX.Element[] | string;
  onAfterClose?: () => void;
}

const Modal = ({
  isOpen,
  setIsOpen,
  title,
  children,
  onAfterClose,
}: ModalProps) => (
  <ReactModal
    ariaHideApp={false}
    isOpen={isOpen}
    onAfterClose={onAfterClose}
    overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity flex flex-col justify-center min-h-screen"
    className="mx-auto max-w-md font-mono text-sm text-white focus:outline-0"
    onRequestClose={() => setIsOpen(false)}
  >
    <div className="flex items-center justify-end bg-purple-600 px-4 py-2">
      <div className="mr-4 flex-grow leading-none">{title}</div>
      <div
        className="cursor-pointer font-mono"
        onClick={() => setIsOpen(false)}
      >
        <XIcon />
      </div>
    </div>

    <div className="bg-purple-500 p-4">{children}</div>
  </ReactModal>
);

export default Modal;
