import React, { useRef } from "react";
import styles from "./RealPerson.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Icon from "~/constants/icons";
import { Swiper, SwiperSlide } from "swiper/react";

const cx = classNames.bind(styles);

const data = [
  {
    name: 'DG真人',
    image: GAMELOBBY.RealDG,
    link: '#',
  },
  {
    name: '歐博真人',
    image: GAMELOBBY.RealOber,
    link: '#',
  },
  {
    name: 'SA真人',
    image: GAMELOBBY.RealSA,
    link: '#',
  },
  {
    name: 'WM真人',
    image: GAMELOBBY.RealWM,
    link: '#',
  },
  {
    name: 'OB真人',
    image: GAMELOBBY.RealOB,
    link: '#',
  },
  {
    name: 'OG真人',
    image: GAMELOBBY.RealOG,
    link: '#',
  },
]

const RealPerson = () => {
  const swiperRef = useRef(null);
  return (
    <div className={cx("real-person")}>
      <Swiper ref={swiperRef} loop={true} slidesPerView={4} spaceBetween={30}>
      {
        data.map((item, i) => (
          <SwiperSlide key={i} className={cx('slide-item')}>
            <img src={item.image}/>
            <Button active className={cx('action')}>
              <Link to={item.link}>{item.name}</Link>
            </Button>
          </SwiperSlide>
        ))
      }
      </Swiper>
      <div className={cx("navigation")}>
        <button
          className={cx("previous")}
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
         <Icon name="previous" />
        </button>
        <button
          className={cx("next")}
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <Icon name="next" />
        </button>
      </div>
    </div>
  );
};

export default RealPerson;
