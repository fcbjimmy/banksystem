import React from "react";
import inputcss from "./Input.module.css";

const Input = (props) => {
  const {
    children,
    type = "text",
    placeholder,
    label,
    name,
    required,
    ...rest
  } = props;

  return (
    <div className={inputcss.formgroup}>
      <input
        className={inputcss.inputcontrol}
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        {...rest}
        id={name}
      />
      <label className={inputcss.dynamiclabel} htmlFor={name}>
        {placeholder}
        {required && <span>*</span>}
      </label>
    </div>
  );
};

export default Input;
