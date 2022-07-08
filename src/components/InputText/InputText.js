import React from "react";
import styles from "./InputText.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const InputText = ({
  className,
  wrapClassName,
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
      {label && <div className={cx("label")}>{label}</div>}
      <div
        style={!props.icon ? { paddingLeft: "22px" } : {}}
        className={cx("wrap",wrapClassName)}
      >
        {props.icon && <div className={cx("icon")}>{props.icon}</div>}
        <input className={cx("input")} {...props} placeholder={placeholder}/>
        {children && children}
      </div>
    </div>
  );
};

export default InputText;
