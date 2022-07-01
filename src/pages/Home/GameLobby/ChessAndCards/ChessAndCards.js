import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./ChessAndCards.module.scss";
import { GAMELOBBY } from "~/constants/imageHomePage";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import { MediaQueryContext } from "~/Context/MainContext";
import { Swiper, SwiperSlide } from "swiper/react";
import ListCardMb from "~/components/ListCardMb/ListCardMb";

const cx = classNames.bind(styles);

const data = [
  {
    image: GAMELOBBY.ChessAndCard,
    logo: GAMELOBBY.LogoChessAndCard,
    tag: "-Bole Chess-",
    name: "博樂棋牌",
    category: "chess",
    link: "#",
  },
  {
    image: GAMELOBBY.MGChess,
    logo: GAMELOBBY.LogoOBChess,
    tag: "-MG Chess-",
    name: "OB棋牌",
    category: "chess",
    link: "#",
  },
];

const ChessAndCards = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("chess")}>
      {!isMobile ? (
        <Swiper loop={true} slidesPerView={2}>
          {data.map((item, i) => (
            <SwiperSlide key={i} className={cx("img-main")}>
              <img src={item.image} />
              <Button className="bg-blue">
                <Link to={item.link}>{item.name}</Link>
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <ListCardMb data={data}/> 
      )}
    </div>
  );
};

export default ChessAndCards;
