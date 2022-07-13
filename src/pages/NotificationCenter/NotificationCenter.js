import React,{useEffect} from "react";
import classNames from "classnames/bind";
import styles from "./NotificationCenter.module.scss";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";

const cx = classNames.bind(styles);
const NotificationCenter = () => {

  const navigate = useNavigate();
  const {pathname} = useLocation();
  useEffect(() => {
    if(pathname == '/notification') navigate('station-letter')
  },[pathname])
  return (
    <div className={cx("notification-center")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("bg-normal-linear", "navbar-tab")}>
            <h4>通知中心</h4>
            <NavLink to="station-letter">站內信</NavLink>
            <NavLink to="announcement">公告</NavLink>
            <NavLink to="maintenance">維修時間</NavLink>
          </div>
          <div className={cx('tabPanel')}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationCenter;
