import React from "react";
import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import Speaker from "../../../assets/images/global/speaker-notification.png";

const cx = classNames.bind(styles);

const Notification = () => {
  return (
    <div className={cx("notification")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("title")}>
            <div className={cx("image-noti")}>
              <img src={Speaker} />
            </div>
            <p>最新公告</p>
          </div>
          <div className={cx("text-notification")}>
            <marquee>【維護公告】親愛的會員您好,【富邦銀行-維護通知】020110/822:00~200/10/1022:00  親愛的會員您好,【富邦銀行</marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
