import React from "react";

import classes from "./Input.module.css";

const Input = ({ text, onChange }, ...props) => {
  return (
    <input
      onChange={onChange}
      className={`${classes.input} ${props.className}`}
      placeholder={text}
      type="text"
    ></input>
  );
};

export default Input;
