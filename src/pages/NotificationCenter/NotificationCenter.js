import React, { useEffect, useContext } from "react";
import { MediaQueryContext } from "~/Context/MainContext";
import classNames from "classnames/bind";
import styles from "./NotificationCenter.module.scss";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);

const navbarLink = [
  {
    name: "站內信",
    path: "station-letter",
  },
  {
    name: "公告",
    path: "announcement",
  },
  {
    name: "維修時間",
    path: "maintenance",
  },
];

const NotificationCenter = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isMobile = useContext(MediaQueryContext);

  useEffect(() => {
    if (pathname == "/notification") navigate("station-letter");
  }, [pathname]);

  return (
    <div className={cx("notification-center")}>
      <div className={isMobile ? "container-fluid" : "container"}>
        <div className={cx({ ["bg-normal-linear"]: !isMobile }, "navbar-tab")}>
          {!isMobile && <h4>通知中心</h4>}
          <nav className={cx("nav-link")}>
            {navbarLink.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className={({ isActive }) =>
                  cx("navItem", { ["active"]: isActive })
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className={cx({["bg-normal-linear"]: !isMobile }, "tabPanel")}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
