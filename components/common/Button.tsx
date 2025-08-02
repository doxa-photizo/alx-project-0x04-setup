// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "@/interface";

const Button: React.FC<ButtonProps> = ({
  buttonLabel,
  buttonBackgroundColor = "blue",
  action,
  type = "button",
}) => {
  return (
    <button
      onClick={action}
      type={type}
      className={`px-4 py-2 rounded text-white bg-${buttonBackgroundColor}-500 hover:bg-${buttonBackgroundColor}-600`}
    >
      {buttonLabel}
    </button>
  );
};

export default Button;
