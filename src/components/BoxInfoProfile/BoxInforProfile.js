import React from "react";
import styles from "./BoxInforProfile.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const BoxInforProfile = ({
  className,
  bodyClassName,
  children,
  titleHead = "",
  lineHead = false,
  tabHead = false,
}) => {
  return (
    <div className={cx("box-info", className)}>
      {titleHead && <div className={cx("title-head")}><span>{titleHead}</span></div>}
      {lineHead && <hr />}
      <div className={cx('body',bodyClassName)}>
        {children}
      </div>
    </div>
  );
};

export default BoxInforProfile;
