import React from "react";
import styles from "./MobileTabLayout.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { IoCaretBack } from "react-icons/io5";

const cx = classNames.bind(styles);

const MobileTabLayout = ({ children, name }) => {
  return (
    <div className={cx("wrapper-frame")}>
      <div className={cx("tab-head")}>
        <button className={cx('back')}>
          <Link to="/">
            <IoCaretBack />
          </Link>
        </button>
        <h1>{name}</h1>
      </div>
      {children}
    </div>
  );
};

export default MobileTabLayout;
