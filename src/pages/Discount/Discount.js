import React, { useState, useContext } from "react";
import styles from "./Discount.module.scss";
import classNames from "classnames/bind";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import imgBanner from "../../assets/images/pages/discount/banner-vip.png";
import imgOffer from "../../assets/images/pages/discount/offers.png";
import Button from "~/components/Button/Button";
import { Link } from "react-router-dom";
import { MediaQueryContext } from "~/Context/MainContext";

const cx = classNames.bind(styles);
const banner = [
  {
    image: imgBanner,
    link: "#",
  },
];

const tabMenu = ["全部優惠", "常駐優惠", "限時優惠"];

const Discount = () => {
  const isMobile = useContext(MediaQueryContext);
  const [active, setActive] = useState(0);
  const [tab, setTab] = useState(0);
  const handeActive = (index) => {
    setActive(index);
    setTab(index);
  };

  const TabMenu = () => {
    return (
      <div className={cx("tab-menu")}>
        {tabMenu.map((item, i) =>
          !isMobile ? (
            <Button
              key={i}
              active={i == active ? true : false}
              onClick={() => handeActive(i)}
            >
              {item}
            </Button>
          ) : (
            <button
              key={i}
              onClick={() => handeActive(i)}
              className={cx(i === active ? "active" : "")}
            >
              {item}
            </button>
          )
        )}
      </div>
    );
  };

  return (
    <div className={cx("discount")}>
      {
        isMobile ? <TabMenu /> : <BannerSlide data={banner} />
      }
      <div className="container">
        <div className={cx(!isMobile ? "wrapper" : "wrapper-mb")}>
          {!isMobile && <TabMenu />}
          <div className={cx("body")}>
            {tab === 0 ? (
              <React.Fragment>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
              </React.Fragment>
            ) : tab === 1 ? (
              <React.Fragment>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Link to="#">
                  <img src={imgOffer} />
                </Link>
              </React.Fragment>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
