import React from "react";
import classNames from "classnames/bind";
import styles from "./Button.module.scss";

const cx = classNames.bind(styles);

const Button = ({ className, active, children, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={cx("button-img", className, active ? "active" : "")}
    >
      {children}
    </button>
  );
};

export default Button;
