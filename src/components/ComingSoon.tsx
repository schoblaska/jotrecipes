import React, { useState } from "react";
import { XIcon } from "components/Icons";

const ComingSoon = ({ children }: { children: JSX.Element }) => {
  const [hovering, setHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {hovering ? (
        <div className="flex">
          <div>Coming soon</div>
          <div className="ml-2 cursor-pointer">
            <XIcon />
          </div>
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default ComingSoon;
