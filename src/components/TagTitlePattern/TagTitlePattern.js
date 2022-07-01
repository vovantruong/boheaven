import React from "react";
import classNames from "classnames/bind";
import styles from "./TagTitlePattern.module.scss";
import TagLeft from "../../assets/images/global/components/tag-left.svg";
import TagRight from "../../assets/images/global/components/tag-right.svg";

const cx = classNames.bind(styles);
const TagTitlePattern = ({ className, name, children, container = true }) => {
  return (
    <div className={cx("title-tag", className)}>
      <div className={cx(container ? "container" : "wrapper")}>
        <div className={cx("wrap")}>
          <div className={cx("tag-img")}>
            <img src={TagLeft} />
          </div>
          <p>{children || name}</p>
          <div className={cx("tag-img")}>
            <img src={TagRight} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TagTitlePattern;
