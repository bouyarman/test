import React, { useState } from "react";

import classes from "./contactPage.module.css";

const Input = ({
  label,
  type,
  name,
  onChange,
  pattern,
  required,
  errorMessage,
  value,
}) => {
  const [blured, setBlured] = useState(false);
  const blurHandler = (e) => {
    setBlured(true);
  };
  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        pattern={pattern}
        required={required}
        onBlur={blurHandler}
        blured={blured.toString()}
        className={classes.errorInput}
        value={value}
      />
      <p className={classes.errorMessage}>{errorMessage}</p>
    </div>
  );
};

export default Input;
