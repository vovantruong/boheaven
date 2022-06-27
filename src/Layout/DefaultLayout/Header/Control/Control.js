import React from 'react'
import classNames from "classnames/bind";
import styles from "./Control.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Control = () => {
  return (
    <div className={cx('control')}>
        <Link className={cx('btn-login')} to="/login">登入</Link>
        <Link className={cx('btn-register')} to="/register">註冊</Link>
    </div>
  )
}

export default Control