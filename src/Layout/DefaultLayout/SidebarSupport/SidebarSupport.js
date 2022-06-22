import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SidebarSupport.module.scss";
import Service from "../../../assets/images/global/web/service.png";
import Announcement from "../../../assets/images/global/web/announcement.png";
import Help from "../../../assets/images/global/web/help.png";

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

  const handdleShowPopup = (e) => {
    e.preventDefault();
    console.log('show popups');
  }

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
    </div>
  );
};

export default SidebarSupport;
