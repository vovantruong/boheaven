import React, { useState} from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "./Banner/Banner";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { imagesBanner } from "~/constants/imagesBanner";
import TitleTag from "~/components/TitleTag/TitleTag";
import GameLobby from "./GameLobby/GameLobby";
import AboutUs from "./AboutBoheaven/AboutBoheaven";
import QualityService from "./QualityService/QualityService";
import LatestNews from "./LatestNews/LatestNews";
const cx = classNames.bind(styles);

const Home = () => {
  return (
    <div className={cx("home-page")}>
      <Banner style={{ marginBottom: "25px" }} />
      <TitleTag name="遊戲大廳" />
      <GameLobby />
      <TitleTag name="博天堂介紹" />
      <AboutUs />
      <TitleTag name="優質服務" />
      <QualityService />
      <TitleTag name="最新消息" />
      <LatestNews />
    </div>
  );
};

export default Home;
