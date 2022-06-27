import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./BannerSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

const BannerSlide = ({ data, className, ...props }) => {
  return (
    <Swiper
      className={cx("banner-slide", className)}
      slidesPerView={props.slidesPerView ? props.slidesPerView : 1}
      loop={props.loop ? props.loop : true}
    >
      {data?.map((item, i) =>
        Object.keys(item.link).length > 0 ? (
          <SwiperSlide key={i}>
            <Link to={item.link} className={cx("img-banner")}>
              <img src={item.image} />
            </Link>
          </SwiperSlide>
        ) : (
          <SwiperSlide key={i}>
            <div className={cx("img-banner")}>
              <img src={item} />
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default BannerSlide;
