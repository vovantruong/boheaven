import React from "react";
import classNames from "classnames/bind";
import styles from "./AppDownload.module.scss";
import MobileDown from '../../../../assets/images/pages/home/about-mobile-show.png'

const cx = classNames.bind(styles);

const AppDownload = () => {
  return (
    <div className={cx("app-download")}>
      <div className={cx("image")}>
        <img src={MobileDown} alt='mobile download' />
      </div>
      <div className={cx("card-download")}>
        <button className={cx('normal')}>加入會員</button>
        <button className={cx('ios')}>ios加入桌面</button>
        <button className={cx('android')}>android加入桌面 </button>
        <p>遊玩登入超方便還加碼送200獎勵金</p>
      </div>
    </div>
  );
};

export default AppDownload;
