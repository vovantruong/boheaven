import React from "react";
import classNames from "classnames/bind";
import styles from "./Notification.module.scss";
import Speaker from "../../../assets/images/global/speaker-notification.png";
import SpeakerMobile from "../../../assets/images/global/mb/sound_max_fill.png";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Notification = ({ isMobile }) => {
  return (
    <div className={cx("notification")}>
      <div className="container">
        <div className={cx("wrapper")}>
          {!isMobile ? (
            <React.Fragment>
              <div className={cx("title")}>
                <div className={cx("image-noti")}>
                  <img src={Speaker} alt="..."/>
                </div>
                <p>最新公告</p>
              </div>
              <div className={cx("text-notification")}>
                <marquee>
                  【維護公告】親愛的會員您好,【富邦銀行-維護通知】020110/822:00~200/10/1022:00
                  親愛的會員您好,【富邦銀行
                </marquee>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={cx("icon-message")}>
                <img src={SpeakerMobile} alt="..." />
              </div>
              <div className={cx('main-message')}>
                <marquee>
                  因應銀行新政策，即日起將不再提供虛擬信用
                </marquee>
              </div>
              <button className={cx('more')}>
                <Link to="#">更多</Link>
              </button>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;
