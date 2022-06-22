import React from "react";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import Avatar from "../../../../assets/images/global/header/user.png";
import Mail from "../../../../assets/images/global/header/mail.png";
import Vip from "~/constants/tagVip";
import { BsChevronDown } from "react-icons/bs";

const cx = classNames.bind(styles);

const User = ({ className }) => {
  return (
    <div className={cx("user", className)}>
      <div className={cx("head")}>
        <div className={cx("avatar")}>
          <img src={Avatar} />
        </div>
        <div className={cx("info")}>
          <div className={cx("top")}>
            <span className={cx("phone")}>0987123654</span>
            <Vip className={cx('tag-vip')} name="v1" />
          </div>
          <div className={cx("bottom")}>
            <span className={cx("balance")}>$3,000.00</span>
            <span className={cx("member-center")}>
              會員中心 <BsChevronDown />
            </span>
          </div>
        </div>
      </div>
      <div className={cx("message")}>
        <img src={Mail} />
        <span className={cx("tick")}></span>
      </div>
    </div>
  );
};

export default User;
