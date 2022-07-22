import React from "react";
import classNames from "classnames/bind";
import styles from "./Textarea.module.scss";

const cx = classNames.bind(styles);

const Textarea = ({
  className,
  label,
  children,
  wrapClassName,
  maxLength,
  horizontal,
  ...props
}) => {
  return (
    <div className={cx("fields", horizontal ? "horizontal" : "", className)}>
      {label && <div className={cx("label")}>{label}</div>}
      <div className={cx("wrap", wrapClassName)}>
        <textarea maxLength={maxLength} className={cx("textarea")} {...props} />
        {maxLength && (
          <span className={cx("length-textarea")}>{`${
            props.value.length ? props.value.length : 0
          }/${maxLength}`}</span>
        )}
      </div>
    </div>
  );
};

export default Textarea;
