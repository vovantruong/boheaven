import React, { useState, useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Banner from "./Banner/Banner";
import TitleTag from "~/components/TitleTag/TitleTag";
import GameLobby from "./GameLobby/GameLobby";
import AboutUs from "./AboutBoheaven/AboutBoheaven";
import QualityService from "./QualityService/QualityService";
import LatestNews from "./LatestNews/LatestNews";
import { MediaQueryContext } from "~/Context/MainContext";
import {useMediaQuery} from 'react-responsive'

const cx = classNames.bind(styles);

const Home = () => {
  const isMobile = useContext(MediaQueryContext);
  // const isMobile = useMediaQuery({query: `(max-width: 480px)`});
  console.log(isMobile);
  return (
    <div className={cx("home-page")}>
      {!isMobile ? (
        <React.Fragment>
          <Banner style={{ marginBottom: "25px" }} />
          <TitleTag name="遊戲大廳" />
          <GameLobby />
          <TitleTag name="博天堂介紹" />
          <AboutUs />
          <TitleTag name="優質服務" />
          <QualityService />
          <TitleTag name="最新消息" />
          <LatestNews />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <GameLobby />
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
