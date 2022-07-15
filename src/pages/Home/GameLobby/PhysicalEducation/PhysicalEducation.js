import React,{useContext} from "react";
import styles from "./PhysicalEducation.module.scss";
import classNames from "classnames/bind";
import { GAMELOBBY } from "~/constants/imageHomePage";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import { MediaQueryContext } from "~/Context/MainContext";
import { Swiper, SwiperSlide } from "swiper/react";
import ListCardMb from "~/components/ListCardMb/ListCardMb";

const cx = classNames.bind(styles);

const data = [
  {
    image: GAMELOBBY.BestSport,
    logo: GAMELOBBY.LogoBestSport,
    tag: "-BoHeaven Sport-",
    name: "博天堂體育",
    category: "sport",
    link: "#",
  },
  {
    image: GAMELOBBY.SuperSport,
    logo: GAMELOBBY.LogoSuperSport,
    tag: "-Super Sport-",
    name: "Super體育",
    category: "sport",
    link: "#",
  },
];

const PhysicalEducation = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("sports", isMobile && 'mobile')}>
      {!isMobile ? (
        <Swiper loop={true} slidesPerView={2}>
          {data.map((item, i) => (
            <SwiperSlide key={i} className={cx("img-main")}>
              <span></span>
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

export default PhysicalEducation;
