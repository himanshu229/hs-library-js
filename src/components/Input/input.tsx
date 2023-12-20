import React, { FunctionComponent } from "react";

interface InputProps {
  type: string;
}
const InputBox: FunctionComponent<InputProps> = ({ type }) => {
  return <input type={type}/>;
};

export default InputBox;
