import React from "react";
import styles from "./InputText.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);

const InputText = ({ className, label,children, ...props }) => {
  console.log();
  return (
    <div className={cx("input-text",className)}>
      {label && <div className={styles.label}>{label}</div>}
      <div style={!props.icon ? {paddingLeft: '22px'}: {}} className={cx("wrap")}>
        {props.icon && <div className={cx("icon")}>{props.icon}</div>}
        <input className={cx("input")} {...props} />
        {children && children}
      </div>
    </div>
  );
};

export default InputText;
