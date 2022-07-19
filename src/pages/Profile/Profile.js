import React, { useContext, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Profile.module.scss";
import MenuProfile from "../../components/MenuProfile/MenuProfile";
import MenuProfileMb from "~/components/MenuProfileMb/MenuProfileMb";
import { dataUser } from "~/constants/mocks/dataAccountUser";
import { MediaQueryContext } from "~/Context/MainContext";

const cx = classNames.bind(styles);

const Profile = () => {
  const isMobile = useContext(MediaQueryContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isMobile && pathname == "/profile") {
      navigate("personal-information");
    }
  }, [pathname]);

  return (
    <div className={cx("profiles")}>
      <div className="container">
        {isMobile ? (
          <div className={cx("wrapper-mb")}>
            <div className={cx("navbar-menu")}>
                <MenuProfileMb dataUser={dataUser} />
              </div>
              <div className={cx("content")}>
                <Outlet />
              </div>
          </div>
        ) : (
          <div className={cx("wrapper-pc")}>
            <div className={cx("navbar-menu")}>
              <MenuProfile dataUser={dataUser} />
            </div>
            <div className={cx("content")}>
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
