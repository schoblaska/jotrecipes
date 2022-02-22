import React, { Dispatch } from "react";
import Modal from "components/Modal";

interface ShareModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
}

const ShareModal = ({ isOpen, setIsOpen }: ShareModalProps) => (
  <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Share this recipe">
    Some UI for sharing a recipe
  </Modal>
);

export default ShareModal;
