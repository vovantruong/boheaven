import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SidebarSupport.module.scss";
import Service from "../../../assets/images/global/web/service.png";
import Announcement from "../../../assets/images/global/web/announcement.png";
import Help from "../../../assets/images/global/web/help.png";
import { imageNavi } from "../../../constants/imageNavigation";
import ShowModalSupport from "./ShowModalSupport";

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
    link: "/profile/help-center",
  },
  {
    key: "help",
    name: "公告專區",
    image: Help,
    link: "#",
  },
];

const navigationMenu = [
  {
    key: "home",
    name: "首頁",
    image: imageNavi.Home,
    imageActive: imageNavi.HomeActive,
    link: "/",
  },
  {
    key: "gift",
    name: "優惠",
    image: imageNavi.Gift,
    imageActive: imageNavi.GiftActive,
    link: "/discount",
  },
  {
    key: "transfer",
    name: "存/提/轉",
    image: imageNavi.Transfer,
    imageActive: imageNavi.Transfer,
    link: "#",
  },
  {
    key: "service",
    name: "客服",
    image: imageNavi.Service,
    imageActive: imageNavi.ServiceActive,
    link: "/customer-service",
  },
  {
    key: "member",
    name: "我的",
    image: imageNavi.Member,
    imageActive: imageNavi.MemberActive,
    link: "/profile",
  },
];

const SidebarSupport = ({ isMobile }) => {
  const [visible, setVisible] = useState(false);

  const handdleShowPopup = (e) => {
    e.preventDefault();
    setVisible(!visible);
  };

  return !isMobile ? (
    <React.Fragment>
      <div className={cx("sidebar")}>
        <div className={cx("wrapper")}>
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
      <ShowModalSupport visible={visible} setVisible={setVisible} />
    </React.Fragment>
  ) : (
    // Navigate menu for mobie version
    <React.Fragment>
      <div className={cx("space")}></div>
      <div className={cx("navigation-menu")}>
        <nav className={cx("list-navigate")}>
          {navigationMenu.map((item, i) =>
            item.key !== "transfer" ? (
              <NavLink
                className={({ isActive }) =>
                  isActive ? cx("active") : ""
                }
                to={item.link}
                key={i}
              >
                {({ isActive }) => (
                  <React.Fragment>
                    <img src={isActive ? item.imageActive :item.image} alt="..." />
                    <p>{item.name}</p>
                  </React.Fragment>
                )}
              </NavLink>
            ) : (
              <button key={i}>
                <img src={item.image} alt="..."/>
                <p>{item.name}</p>
              </button>
            )
          )}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default SidebarSupport;
