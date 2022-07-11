import React, { useState, useContext,lazy } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import User from "./User/User";
import Control from "./Control/Control";
import { MediaQueryContext } from "~/Context/MainContext";

import Logo from "../../../assets/images/global/boheaven.png";
import ArrowDown from "../../../assets/images/global/header/arrow-down-polygon.png";
import ArrowUp from "../../../assets/images/global/header/arrow-up-polygon.png";
import SubHeader from "./SubHeader/SubHeader";

const cx = classNames.bind(styles);

const navbar = [
  {
    name: "首頁",
    link: "/",
    type: "link",
  },
  {
    name: "真人",
    link: "#",
    type: "button",
  },
  {
    name: "體育",
    link: "#",
    type: "button",
  },
  {
    name: "賓果",
    link: "#",
    type: "button",
  },
  {
    name: "電子",
    link: "#",
    type: "button",
  },
  {
    name: "棋牌",
    link: "#",
    type: "button",
  },
  {
    name: "捕魚",
    link: "#",
    type: "button",
  },
  {
    name: "優惠",
    link: "/discount",
    type: "link",
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [idSub, setIdSub] = useState(null);

  const isMobile = useContext(MediaQueryContext);

  const handleOnClick = (index) => {
    setVisible(true);
    setIdSub(index);
  };

  return (
    <div className={cx("header")} onMouseLeave={() => setVisible(false)}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("navbar")}>
            <div className={cx("nav-logo")}>
              <Link to="/">
                <img src={Logo} alt="logo boheaven ..." />
              </Link>
            </div>
            {!isMobile ? (
              <nav className={cx("nav-list")}>
                {navbar.map((item, index) =>
                  item.type === "button" ? (
                    <button
                      key={index}
                      className={cx("nav-item")}
                      onClick={() => handleOnClick(index)}
                      onMouseEnter={() => handleOnClick(index)}
                    >
                      <span>
                        {item.name}
                        {index !== 0 ? <img src={ArrowDown} alt="..."/> : ""}
                      </span>
                    </button>
                  ) : (
                    <NavLink
                      key={index}
                      className={({ isActive }) =>
                        isActive ? cx("active", "nav-item") : cx("nav-item")
                      }
                      to={item.link}
                      onMouseEnter={() => setVisible(false)}
                    >
                      {item.name}
                      {index > 0 && <img src={ArrowDown} alt="..."/>}
                    </NavLink>
                  )
                )}
              </nav>
            ) : null}
          </div>
          {/* If login success render User  */}
          <User isMobile={isMobile} className={cx("user-account")} />
          {/* If not login render Control */}
          {/* <Control /> */}
        </div>
      </div>
      <SubHeader
        style={visible ? { display: "block" } : { display: "none" }}
        visible={visible}
        setVisible={setVisible}
        id={idSub}
      />
    </div>
  );
};

export default Header;
