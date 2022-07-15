import React, { useState } from "react";
import styles from "./StationLetter.module.scss";
import classNames from "classnames/bind";
import IcSound from "~/assets/images/global/components/ic-fill-sound.svg";
import { dataLetter } from "~/constants/mocks/DataNotoficationCenter/dataStationLetter";

const cx = classNames.bind(styles);

const StationLetter = () => {
  const [active, setActive] = useState(0);
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = (id) => {
    setActive(id);
    setCollapse(!collapse);
  };
  return (
    <div className={cx("station-letter")}>
      {dataLetter.map((item, id) => (
        <div
          key={id}
          className={cx("letter-item")}
          onClick={() => handleCollapse(id)}
        >
          <div className={cx("head")}>
            <div className={cx("title")}>
              <img src={IcSound} alt="..." />
              <span>【{item.name}】</span>
            </div>
            <span className={cx("date")}>{item.date}</span>
          </div>
          <div
            className={cx("content", {
              ["collapse"]: collapse && active === id,
            })}
          >
            <span>{item.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StationLetter;
