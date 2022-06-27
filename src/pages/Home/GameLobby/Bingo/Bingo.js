import React from "react";
import classNames from "classnames/bind";
import styles from "./Bingo.module.scss";
import { GAMELOBBY } from "~/constants/imageHomePage";
import Button from "~/components/Button/Button";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const Bingo = () => {
  return (
    <div className={cx("bingo")}>
      <div className={cx("img-main")}>
        <img src={GAMELOBBY.BingoSuperLottery} />
        <Button className="bg-blue">
          <Link to="#">SUPER彩票</Link>
        </Button>
      </div>
      <div className={cx("img-main")}>
        <img src={GAMELOBBY.Bingo9KLottery} />
        <Button className="bg-blue">
          <Link to="#">9K彩票</Link>
        </Button>
      </div>
    </div>
  );
};

export default Bingo;
