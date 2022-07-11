import React from "react";
import classNames from "classnames/bind";
import styles from "./TagTitleRectangle.module.scss";
import CustomTag from "./CustomTag/CustomTag";

const cx = classNames.bind(styles);

const TagTitleRectangle = ({
  className,
  name = "",
  titleClassName,
  children,
  container = false,
  ...props
}) => {
  return (
    <div className={cx("tag-title", className)}>
      <div
        className={cx(
          container ? "container" : "wrapper",
          container && "wrapper-center"
        )}
      >
        <CustomTag>
          <p className={cx("name",titleClassName)}>
            <span>{children || name}</span>
          </p>
        </CustomTag>
      </div>
    </div>
  );
};

export default TagTitleRectangle;
