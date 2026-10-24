import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  icon?: ReactNode;
}

const Button = ({ children, onClick, icon }: ButtonProps) => (
  <button
    className="flex cursor-pointer items-center rounded-sm border border-transparent bg-purple-600 py-1 pr-3 pl-2 font-serif font-medium text-white shadow-xs hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:outline-none"
    onClick={onClick}
  >
    {icon && <div className="mr-2 h-4 w-4">{icon}</div>}
    <div>{children}</div>
  </button>
);

export default Button;
