import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./BannerSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

const BannerSlide = ({children, data, className,loop = true,container = false,...props }) => {

  return (
    <div className={cx(container ? 'container' : 'banner')}>
      <Swiper
        className={cx("banner-slide", className)}
        slidesPerView={props.slidesPerView ? props.slidesPerView : 1}
        loop={loop}
        {...props}
      >
        {data?.map((item, i) =>
          Object.keys(item.link).length > 0 ? (
            <SwiperSlide key={i} className={cx('slide-item')}>
              <Link to={item.link} className={cx("img-banner")}>
                <img src={item.image} />
                {children}
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={i} className={cx('slide-item')}>
              <div className={cx("img-banner")}>
                <img src={item} />
                {children}
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
