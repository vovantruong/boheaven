import React from "react";
import classNames from "classnames/bind";
import styles from "./Loader.module.scss";

const cx = classNames.bind(styles);

const Loader = ({ className, color }) => {
  return (
    <div className={cx('loader', className)}></div>
  );
};
export default Loader;
