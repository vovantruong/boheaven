import React, {useContext} from "react";
import { MediaQueryContext } from "~/Context/MainContext";
import classNames from "classnames/bind";
import styles from "./GameIntroduction.module.scss";
import { Link } from "react-router-dom";
import TagTitlePattern from "~/components/TagTitlePattern/TagTitlePattern";
import { dataGame } from "~/constants/mocks/dataGameIntro";

const cx = classNames.bind(styles);

const GameIntroduction = () => {
  const isMobile = useContext(MediaQueryContext)
  return (
    <div className={cx("game-intro")}>
      <div className="container">
        {!isMobile && <TagTitlePattern className={cx("tag-title")} name="遊戲介紹" />}
        <div className={cx("wrapper")}>
          <ul className={cx("list-games")}>
            {dataGame?.map((item, i) => (
              <li key={i} className={cx("item-game")}>
                <button className={cx("action")}>
                  <Link to={item.link}>
                    <div className={cx("image-game")}>
                      <img src={item.image} alt="..."/>
                    </div>
                  </Link>
                </button>
                <p className={cx("name")}>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GameIntroduction;
