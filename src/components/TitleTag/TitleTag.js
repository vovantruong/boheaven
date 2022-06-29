import React from "react";
import classNames from "classnames/bind";
import styles from "./Title.Tag.module.scss";
import TagLeft from "../../assets/images/global/components/tag-left.svg";
import TagRight from "../../assets/images/global/components/tag-right.svg";

const cx = classNames.bind(styles);
const TitleTag = ({ className, name, children }) => {
  return (
    <div className={cx("title-tag", className)}>
      <div className="container">
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

export default TitleTag;
