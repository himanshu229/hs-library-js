import React, { FunctionComponent } from "react";

interface ButtonProps {
  label: string;
}
const Button: FunctionComponent<ButtonProps> = ({ label }) => {
  return <button>Button</button>;
};

export default Button;
