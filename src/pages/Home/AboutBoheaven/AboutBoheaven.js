import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AboutBoheaven.module.scss";
import AboutUs from "./AboutUs/AboutUs";
import AppDownload from "./AppDownload/AppDownload";
import Button from "~/components/Button/Button";
import { ABOUTUS } from "~/constants/imageHomePage";

const cx = classNames.bind(styles);

const dataTab = [
  {
    name: "關於我們",
    component: <AboutUs />,
  },
  {
    name: "APP下載",
    component: <AppDownload />,
  },
];

const dataBubble = [
  {
    src: ABOUTUS.BubbleBall,
    name: 'ball',
  },
  {
    src: ABOUTUS.Bubble18,
    name: '18',
  },
  {
    src: ABOUTUS.BubbleDice,
    name: 'dice',
  },
  {
    src: ABOUTUS.BubbleMahjong,
    name: 'mahjong',
  },
];

const AboutBoheaven = () => {
  const [active, setActive] = useState(0);
  const [tabItem, setTabItem] = useState(dataTab[0].component);
  return (
    <div className={cx("about-boheaven")}>
      <div className={cx("container")}>
        <div className={cx("wrapper")}>
          <div className={cx("change-tabs")}>
            {dataTab.map((item, i) => (
              <Button
                active={active === i ? true : false}
                key={i}
                onClick={() => {
                  setActive(i);
                  setTabItem(item.component);
                }}
              >
                {item.name}
              </Button>
            ))}
          </div>
          <div className={cx("tab-body")}>{tabItem}</div>
          <div className={cx("bubble-list")}>
            {
              dataBubble.map((item, i) => (
                <div key={i} className={cx(`bubble__${item.name}`,"bubble")}>
                  <img src={item.src} alt={`bubble ${item.name}...`} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBoheaven;
