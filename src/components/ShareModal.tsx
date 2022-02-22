import React, { useState, Dispatch } from "react";
import Modal from "components/Modal";
import { QrcodeIcon } from "components/Icons";

interface ShareModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  text: string;
}

const ShareModal = ({ isOpen, setIsOpen, text }: ShareModalProps) => {
  const [url, setUrl] = useState(null);
  const [working, setWorking] = useState(false);

  const handleSubmit = () => {
    setWorking(true);
  };

  const onAfterClose = () => {
    setWorking(false);
    setUrl(null);
  };

  return (
    <Modal
      title="Share this recipe"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      onAfterClose={onAfterClose}
    >
      {working ? (
        <div className="flex items-center">
          <div className="mr-2 animate-pulse">
            <QrcodeIcon />
          </div>{" "}
          Generating a URL for your recipe...
        </div>
      ) : (
        <div>
          Click{" "}
          <button onClick={handleSubmit} className="underline">
            here
          </button>{" "}
          to share this recipe.
        </div>
      )}
    </Modal>
  );
};

export default ShareModal;
