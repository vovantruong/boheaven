import React from "react";
import styles from "./InputText.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const InputText = ({
  className,
  label,
  children,
  horizontal,
  ...props
}) => {
  return (
    <div
      className={cx("input-text", horizontal ? "horizontal" : "", className)}
    >
      {label && <div className={cx("label")}>{label}</div>}
      <div
        style={!props.icon ? { paddingLeft: "22px" } : {}}
        className={cx("wrap")}
      >
        {props.icon && <div className={cx("icon")}>{props.icon}</div>}
        <input className={cx("input")} {...props} />
        {children && children}
      </div>
    </div>
  );
};

export default InputText;
