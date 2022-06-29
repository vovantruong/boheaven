import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SidebarSupport.module.scss";
import Service from "../../../assets/images/global/web/service.png";
import Announcement from "../../../assets/images/global/web/announcement.png";
import Help from "../../../assets/images/global/web/help.png";
import PopupService from "./PopupService/PopupService";

const cx = classNames.bind(styles);

const sidebaritems = [
  {
    key: "service",
    name: "客服中心",
    image: Service,
    link: "#",
  },
  {
    key: "announcement",
    name: "幫助中心",
    image: Announcement,
    link: "#",
  },
  {
    key: "help",
    name: "公告專區",
    image: Help,
    link: "#",
  },
];

const SidebarSupport = () => {
  const [visible, setVisible] = useState(false);
  const handdleShowPopup = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return (
    <div className={cx("sidebar")}>
      <div className={cx("wrap")}>
        {sidebaritems?.map((item, index) => (
          <Link
            onClick={(e) => item.key === "service" && handdleShowPopup(e)}
            className={cx("link")}
            key={index}
            to={item.link}
          >
            <div className={cx("image")}>
              <img src={item.image} alt="..." />
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      {visible && <PopupService visible={visible} setVisible={setVisible} />}
    </div>
  );
};

export default SidebarSupport;
