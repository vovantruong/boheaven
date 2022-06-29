import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./Fishing.module.scss";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

const Fishing = () => {
  return (
    <div className={cx("fishing")}>
      <div className={cx("img-main")}>
        <img src={GAMELOBBY.SPFishing} />
        <Button className="bg-blue">
          <Link to="#">SP捕魚</Link>
        </Button>
      </div>
      <div className={cx("img-main")}>
        <img src={GAMELOBBY.MustWinFishing} />
        <Button className="bg-blue">
          <Link to="#">必贏捕魚</Link>
        </Button>
      </div>
    </div>
  );
};

export default Fishing;
