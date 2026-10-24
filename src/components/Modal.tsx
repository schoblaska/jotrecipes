import { XIcon } from "components/Icons";
import { Dispatch, ReactNode } from "react";
import ReactModal from "react-modal";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  title?: string;
  children?: ReactNode;
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
    overlayClassName="fixed inset-0 bg-gray-900/75 transition-opacity flex flex-col justify-center min-h-screen"
    className="mx-auto max-w-lg font-mono text-sm text-white focus:outline-0"
    onRequestClose={() => setIsOpen(false)}
  >
    <div className="flex items-center justify-end bg-purple-600 p-2">
      <div className="mr-4 grow leading-none">{title}</div>
      <div
        className="h-5 w-5 cursor-pointer font-mono"
        onClick={() => setIsOpen(false)}
      >
        <XIcon />
      </div>
    </div>

    <div className="bg-purple-500 p-4">{children}</div>
  </ReactModal>
);

export default Modal;
