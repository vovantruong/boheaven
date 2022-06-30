import React,{useContext} from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./BannerSlide.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";

const cx = classNames.bind(styles);

const BannerSlide = ({ data, className, ...props }) => {
  const isMobile = useContext(MediaQueryContext)
  return (
    <div className={isMobile ? 'container' : ''}>
      <Swiper
        className={cx("banner-slide", className)}
        slidesPerView={props.slidesPerView ? props.slidesPerView : 1}
        loop={props.loop ? props.loop : true}
      >
        {data?.map((item, i) =>
          Object.keys(item.link).length > 0 ? (
            <SwiperSlide key={i} className={cx('slide-item')}>
              <Link to={item.link} className={cx("img-banner")}>
                <img src={item.image} />
              </Link>
            </SwiperSlide>
          ) : (
            <SwiperSlide key={i} className={cx('slide-item')}>
              <div className={cx("img-banner")}>
                <img src={item} />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default BannerSlide;
