import React,{useContext} from "react";
import classNames from "classnames/bind";
import styles from "./Bingo.module.scss";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Button from "~/components/Button/Button";
import { Link } from "react-router-dom";
import { MediaQueryContext } from "~/Context/MainContext";
import { Swiper, SwiperSlide } from "swiper/react";
import ListCardMb from "~/components/ListCardMb/ListCardMb";

const cx = classNames.bind(styles);

const data = [
  {
    image: GAMELOBBY.BingoSuperLottery,
    logo: GAMELOBBY.LogoSuper,
    tag: "-Super Bingo-",
    name: "Super彩票",
    category: "bingo",
    link: "#",
  },
  {
    image: GAMELOBBY.Bingo9KLottery,
    logo: GAMELOBBY.Logo9K,
    tag: "-9K Bingo-",
    name: "9K彩票",
    category: "bingo",
    link: "#",
  },
];

const Bingo = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("bingo")}>
      {!isMobile ? (
        <Swiper loop={true} slidesPerView={2}>
          {data.map((item, i) => (
            <SwiperSlide key={i} className={cx("img-main")}>
              <img src={item.image} alt="..."/>
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

export default Bingo;
