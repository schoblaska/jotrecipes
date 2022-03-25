import React from "react";

interface ButtonProps {
  children: JSX.Element | JSX.Element[] | string;
  onClick?: () => void;
  icon?: JSX.Element;
}

const Button = ({ children, onClick, icon }: ButtonProps) => (
  <button
    className="text-md flex items-center rounded border border-transparent bg-purple-600 px-2 py-1 font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
    onClick={onClick}
  >
    {icon && <div className="mr-2 h-4 w-4">{icon}</div>}
    <div>{children}</div>
  </button>
);

export default Button;
