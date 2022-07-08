import React from "react";
import { Outlet } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import { dataUser } from "~/constants/mocks/dataAccountUser";

const cx = classNames.bind(styles);

const Profile = () => {
  return (
    <div className={cx("profiles")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("navbar-menu")}>
            <MenuProfile dataUser={dataUser} />
          </div>
          <div className={cx("content")}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
