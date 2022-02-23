import React from "react";

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  icon?: JSX.Element;
}

const Button = ({ children, onClick, icon }: ButtonProps) => (
  <button
    className="flex items-center rounded border border-purple-200 py-2 px-4 hover:border-purple-300 hover:bg-purple-700"
    onClick={onClick}
  >
    <div>{children}</div>
    {icon && <div className="ml-2 h-5 w-5">{icon}</div>}
  </button>
);

export default Button;
