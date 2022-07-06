import React, { useRef, useContext, useState } from "react";
import styles from "./RealPerson.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Icon from "~/constants/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import ListCardMb from "~/components/ListCardMb/ListCardMb";
import Modal from "~/components/Modal/Modal";
import PopupFastTransfer from "./PopupFastTransfer/PopupFastTransfer";

const cx = classNames.bind(styles);

const data = [
  {
    image2x: GAMELOBBY.RealDG,
    image: GAMELOBBY.RealDGMobile,
    logo: GAMELOBBY.LogoRealDG,
    tag: "",
    name: "DG真人",
    category: "casino",
    link: "#",
  },
  {
    image2x: GAMELOBBY.RealOber,
    image: GAMELOBBY.RealOberMobile,
    logo: GAMELOBBY.LogoRealOber,
    tag: "",
    name: "歐博真人",
    category: "casino",
    link: "#",
  },
  {
    image2x: GAMELOBBY.RealSA,
    image: GAMELOBBY.RealSAMobile,
    logo: GAMELOBBY.LogoRealSA,
    tag: "",
    name: "SA真人",
    category: "casino",
    link: "#",
  },
  {
    image2x: GAMELOBBY.RealWM,
    image: GAMELOBBY.RealWMMobile,
    logo: GAMELOBBY.LogoRealWM,
    tag: "",
    name: "WM真人",
    category: "casino",
    link: "#",
  },
  {
    image2x: GAMELOBBY.RealOB,
    image: GAMELOBBY.RealOBMobile,
    logo: GAMELOBBY.LogoRealOB,
    tag: "",
    name: "OB真人",
    category: "casino",
    link: "#",
  },
  {
    image2x: GAMELOBBY.RealOG,
    image: GAMELOBBY.RealOGMobile,
    logo: GAMELOBBY.LogoRealOG,
    tag: "",
    name: "OG真人",
    category: "casino",
    link: "#",
  },
];

const RealPerson = () => {
  const [visible, setVisible] = useState(false);
  const [dataTransfer, setDataTransfer] = useState([]);
  const isMobile = useContext(MediaQueryContext);
  const swiperRef = useRef(null);

  const handleShowPopup = (item) => {
    setVisible(true);
    setDataTransfer(item);
  };
  return (
    <>
      <div className={cx("real-person")}>
        {!isMobile ? (
          <React.Fragment>
            <Swiper
              ref={swiperRef}
              loop={true}
              slidesPerView={4}
              spaceBetween={30}
            >
              {data.map((item, i) => (
                <SwiperSlide key={i} className={cx("slide-item")}>
                  <img src={item.image2x} />
                  <Button
                    active
                    className={cx("action")}
                    onClick={() => handleShowPopup(item)}
                  >
                    <Link to={item.link}>{item.name}</Link>
                  </Button>
                </SwiperSlide>
              ))}
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
          </React.Fragment>
        ) : (
          <ListCardMb onClick={handleShowPopup} data={data} /> // Is mobile re-render
        )}
      </div>
      <Modal
        title="快速轉帳"
        visible={visible}
        onCloseModal={() => setVisible(false)}
        contentClassName={cx("transfer-modal")}
        className={cx("modal-transfer")}
      >
        <PopupFastTransfer data={dataTransfer} />
      </Modal>
    </>
  );
};

export default RealPerson;
