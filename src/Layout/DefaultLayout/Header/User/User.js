import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import Avatar from "../../../../assets/images/global/header/user.png";
import Mail from "../../../../assets/images/global/header/mail.png";
import Vip from "~/constants/tagVip";
import OutsideClickHandler from "react-outside-click-handler";
import { BsChevronDown } from "react-icons/bs";
import { Link } from "react-router-dom";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const dataAction = [
  {
    bg: "#365A97",
    key: "存",
    name: "存款",
    link: "#",
  },
  {
    bg: "#F1C225",
    key: "提",
    name: "提款",
    link: "#",
  },
  {
    bg: "#3BDB85",
    key: "轉",
    name: "轉點",
    link: "#",
  },
];

const dataItemMenu = [
  {
    icon: <Icon name="member" />,
    name: "個人資料",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="diamon" />,
    name: "VIP特權",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="bar" />,
    name: "優惠達標查詢",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="cardDate" />,
    name: "投注紀錄",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="cardTranslate" />,
    name: "交易紀錄",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="visa" />,
    name: "帳戶管理",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="addPeople" />,
    name: "邀請好友",
    link: "#",
    description: "",
  },
  {
    icon: <Icon name="question" />,
    name: "幫助中心",
    link: "#",
    description: "存款、提款、投注疑問看這裡",
  },
];

const dataUser = {
  member: '0987123654',
  balance: '300.00',
  image: Avatar,
  vip: 'v1'
}

const User = ({ className, isMobile, infoMember = false }) => {
  const [visible, setVisible] = useState(false);

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      {!infoMember ? (
        <div className={cx("user-account", className)}>
          {!isMobile ? (
            <div className={cx("head")} onClick={() => setVisible(!visible)}>
              <div className={cx("avatar")}>
                <img src={Avatar} />
              </div>
              <div className={cx("info")}>
                <div className={cx("top")}>
                  <span className={cx("phone")}>{dataUser.member}</span>
                  <Vip className={cx("tag-vip")} name={dataUser.vip} />
                </div>
                <div className={cx("bottom")}>
                  <span className={cx("balance")}>{`$${dataUser.balance}`}</span>
                  <span className={cx("member-center")}>
                    會員中心 <BsChevronDown />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <button className={cx("sign-out-mobile")}>登出</button>
          )}

          <div className={cx("message")}>
            <img src={Mail} />
            <span className={cx("tick")}></span>
          </div>
          {visible && (
            <div className={cx("user-dropdown")}>
              <div className={cx("top")}>
                {dataAction.map((item, i) => (
                  <Link key={i} to={item.link} className={cx("link")}>
                    <div
                      style={{ background: `${item.bg}` }}
                      className={cx("action")}
                    >
                      {item.key}
                    </div>
                    <p>{item.name}</p>
                  </Link>
                ))}
              </div>
              <div className={cx("body")}>
                {dataItemMenu.map((item, i) => (
                  <Link key={i} to={item.link} className={cx("item")}>
                    <div className={cx("icon-item")}>{item.icon}</div>
                    <div className={cx("name")}>
                      <h4>{item.name}</h4>
                      {item.description && <p>{`(${item.description})`}</p>}
                    </div>
                  </Link>
                ))}
              </div>
              <button className={cx("sign-out")}>登出</button>
            </div>
          )}
        </div>
      ) : (
        <div className={cx("info-member")}>
          <div className={cx("top")}>
            <span className={cx("phone")}>{`會員: ${dataUser.member}`}</span>
            <Vip className={cx("tag-vip")} name={dataUser.vip} />
          </div>
          <div className={cx("balance")}>
            {`$${dataUser.balance}`} <BsChevronDown />
          </div>
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default User;
