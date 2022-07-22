import React, { useState } from "react";
import styles from "./StationLetter.module.scss";
import classNames from "classnames/bind";
import { dataLetter } from "~/constants/mocks/DataNotificationCenter/dataStationLetter";
import Collapse from "~/components/Collapse/Collapse";

const cx = classNames.bind(styles);

const StationLetter = () => {
  return (
    <div className={cx("station-letter")}>
      {dataLetter.map((item, id) => (
        <Collapse key={id} itemHead={item.name} itemDate={item.date}>
          {item.description}
        </Collapse>
      ))}
    </div>
  );
};

export default StationLetter;
