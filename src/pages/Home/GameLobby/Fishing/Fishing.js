import React, { useContext } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Fishing.module.scss";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Button from "~/components/Button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import ListCardMb from "~/components/ListCardMb/ListCardMb";

const cx = classNames.bind(styles);

const data = [
  {
    image: GAMELOBBY.SPFishing,
    logo: GAMELOBBY.LogoSPfishing,
    tag: "-SP Fish-",
    name: "SP捕魚",
    category: "fish",
    link: "#",
  },
  {
    image: GAMELOBBY.MustWinFishing,
    logo: GAMELOBBY.LogoMustWinFishing,
    tag: "-Bwin Fish-",
    name: "必贏捕魚",
    category: "fish",
    link: "#",
  },
];

const Fishing = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("fishing")}>
      {!isMobile ? (
        <Swiper loop={true} slidesPerView={2}>
          {data.map((item, i) => (
            <SwiperSlide key={i} className={cx("img-main")}>
              <img src={item.image} alt="..." />
              <Button className="bg-blue">
                <Link to={item.link}>{item.name}</Link>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ListCardMb data={data} />
      )}
    </div>
  );
};

export default Fishing;
