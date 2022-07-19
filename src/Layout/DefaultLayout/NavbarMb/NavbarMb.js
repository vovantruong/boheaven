import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./NavbarMb.module.scss";
import { NavLink } from "react-router-dom";
import { imageNavi } from "../../../constants/imageNavigation";
import PopupTransfer from "./PopupTransfer/PopupTransfer";

const cx = classNames.bind(styles);

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

const NavbarMb = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={cx("navbarMb")}>
        <div className={cx("space")}></div>
        <div className={cx("navigation-menu")}>
          <nav className={cx("list-navigate")}>
            {navigationMenu.map((item, i) =>
              item.key !== "transfer" ? (
                <NavLink
                  className={({ isActive }) => (isActive ? cx("active") : "")}
                  to={item.link}
                  key={i}
                >
                  {({ isActive }) => (
                    <React.Fragment>
                      <div className={cx("image-icon")}>
                        <img
                          src={isActive ? item.imageActive : item.image}
                          alt="..."
                        />
                      </div>
                      <p>{item.name}</p>
                    </React.Fragment>
                  )}
                </NavLink>
              ) : (
                <button key={i} onClick={() => setVisible(true)}>
                  <img src={item.image} alt="..." />
                  <p>{item.name}</p>
                </button>
              )
            )}
          </nav>
        </div>
      </div>
      <PopupTransfer visible={visible} setVisible={setVisible} />
    </>
  );
};
export default NavbarMb;
