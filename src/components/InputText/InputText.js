import React from "react";
import styles from "./InputText.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const InputText = ({
  className,
  wrapClassName,
  inputClassName,
  label,
  children,
  horizontal,
  placeholder,
  ...props
}) => {
  return (
    <div
      className={cx("input-text", horizontal ? "horizontal" : "", className)}
    >
      {label && <label htmlFor={label} className={cx("label")}>{label}</label>}
      <div
        className={cx("wrap", wrapClassName)}
      >
        {props.icon && <div className={cx("icon")}>{props.icon}</div>}
        <input
          id={label && label}
          className={cx("input", inputClassName)}
          {...props}
          placeholder={placeholder}
        />
        {children && children}
      </div>
    </div>
  );
};

export default InputText;
