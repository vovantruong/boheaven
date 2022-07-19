import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./SidebarSupport.module.scss";
import IcService from "../../../assets/images/global/web/service.png";
import IcSpeaker from "../../../assets/images/global/web/announcement.png";
import IcHelp from "../../../assets/images/global/web/help.png";
import ShowModalSupport from "./ShowModalSupport";
import NavbarMb from "../NavbarMb/NavbarMb";

const cx = classNames.bind(styles);

const sidebaritems = [
  {
    key: "service",
    name: "客服中心",
    image: IcService,
    link: "#",
  },
  {
    key: "helpcenter",
    name: "幫助中心",
    image: IcSpeaker,
    link: "/profile/help-center",
  },
  {
    key: "announcement",
    name: "公告專區",
    image: IcHelp,
    link: "/notification/announcement",
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
    <NavbarMb />
  );
};

export default SidebarSupport;
