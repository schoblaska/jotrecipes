import React, { useState, Dispatch } from "react";
import Modal from "components/Modal";
import {
  QrcodeIcon,
  ClipboardIcon,
  ClipboardCheckIcon,
} from "components/Icons";

interface ShareModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<boolean>;
  text: string;
}

const ShareModal = ({ isOpen, setIsOpen, text }: ShareModalProps) => {
  const [url, setUrl] = useState(null);
  const [working, setWorking] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = () => {
    setWorking(true);

    fetch("/api/recipes", { method: "POST" }).then((res) =>
      res.json().then((data) => {
        setUrl(data.url);
        setWorking(false);
      })
    );
  };

  const onAfterClose = () => {
    setWorking(false);
    setUrl(null);
    setCopied(false);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(url || "");
    setCopied(true);
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
      ) : url ? (
        <div>
          <div className="relative w-80 bg-purple-600 p-2">
            <input
              type="text"
              readOnly
              className="block w-full bg-purple-600 pr-10 focus:outline-0"
              value={url}
              onFocus={(e) => e.target.select()}
            />
            <div className="absolute inset-y-0 right-0 flex items-center bg-purple-700 px-2">
              <div className="cursor-pointer" onClick={handleCopyUrl}>
                {copied ? <ClipboardCheckIcon /> : <ClipboardIcon />}
              </div>
            </div>
          </div>
          {copied && (
            <div className="mt-1 w-full text-right text-xs">Copied!</div>
          )}
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
