import React, { useState , useContext} from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import User from "./User/User";
import Control from "./Control/Control";
import { MediaQueryContext } from "~/Context/MainContext";

import Logo from "../../../assets/images/global/boheaven.png";
import ArrowDown from "../../../assets/images/global/header/arrow-down-polygon.png";
import ArrowUp from "../../../assets/images/global/header/arrow-up-polygon.png";

const cx = classNames.bind(styles);

const navbar = [
  {
    name: "首頁",
    link: "#",
    type: "button",
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
  const [active, setActive] = useState(0);

  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("header")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("navbar")}>
            <div className={cx("nav-logo")}>
              <Link to="/">
                <img src={Logo} alt="logo boheaven ..." />
              </Link>
            </div>
            {!isMobile ? (
              <ul className={cx("nav-list")}>
                {navbar.map((item, index) => (
                  <li
                    onClick={() => setActive(index)}
                    key={index}
                    className={cx("nav-item", active === index ? "active" : "")}
                  >
                    {item.type === "button" ? (
                      <button>
                        <span>
                          {item.name}
                          {index !== 0 ? (
                            <img src={active === index ? ArrowUp : ArrowDown} />
                          ) : (
                            ""
                          )}
                        </span>
                      </button>
                    ) : (
                      <button>
                        <Link to={item.link}>
                          {item.name}
                          <img src={ArrowDown} />
                        </Link>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
          {/* If login success render User  */}
          <User isMobile={isMobile} className={cx("user-account")} />
          {/* If not login render Control */}
          {/* <Control /> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
