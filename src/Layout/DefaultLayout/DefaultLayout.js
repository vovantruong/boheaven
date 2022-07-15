import React, { useContext } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import SidebarSupport from "./SidebarSupport/SidebarSupport";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Notification from "./Notification/Notification";
import { MediaQueryContext } from "~/Context/MainContext";
import { imagesBanner } from "~/constants/imagesBanner";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { IoCaretBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import User from "./Header/User/User";

const cx = classNames.bind(styles);

const dataBanner = [
  {
    link: "#",
    image: imagesBanner.Banner1,
  },
  {
    link: "#",
    image: imagesBanner.Banner2,
  },
];

const DefaultLayout = ({ children, tabHeaderMobile, titlePageMobile }) => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("wrapper-frame")}>
      {!isMobile ? (
        <React.Fragment>
          <Header />
          <Notification />
          <div className={cx('body-screen')}>
            {children}
          </div>
          <SidebarSupport />
          <Footer />
        </React.Fragment>
      ) : (
        <React.Fragment>
          {tabHeaderMobile ? (
            <React.Fragment>
              <div className={cx("group-head")}>
                <Header />
                <BannerSlide data={dataBanner} container />
                <Notification isMobile={isMobile} />
              </div>
              <User isMobile={true} infoMember/>
            </React.Fragment>
          ) : (
            <div className={cx("tab-head")}>
              <button className={cx("back")}>
                <Link to="/">
                  <IoCaretBack />
                </Link>
              </button>
              <h1>{titlePageMobile}</h1>
            </div>
          )}
          {children}
          <SidebarSupport isMobile={isMobile} />
        </React.Fragment>
      )}
    </div>
  );
};

export default DefaultLayout;
