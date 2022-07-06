import React, { useState, useContext} from "react";
import styles from "./Blogsport.module.scss";
import className from "classnames/bind";
import CasinoArt from "./CasinoArt/CasinoArt";
import Bacarat from "./Baccarat/Bacarat";
import { MediaQueryContext } from "~/Context/MainContext";

const cx = className.bind(styles);
const tabBlogSport = [
  {
    key: "casinoarticles",
    display: "娛樂城文章",
  },
  {
    key: "baccarat",
    display: "百家樂",
  },
  {
    key: "bingo",
    display: "賓果",
  },
  {
    key: "electronic",
    display: "電子",
  },
  {
    key: "chessandcards",
    display: "棋牌",
  },
  {
    key: "fishing",
    display: "捕魚",
  },
  {
    key: "physicaleducation",
    display: "體育",
  },
];

function Blogsport() {
  const [active, setActive] = useState(0);
  const [renderTab, setRenderTab] = useState("casinoarticles");
  const isMobile = useContext(MediaQueryContext);

  const handleChangeTab = (index, key) => {
    setActive(index);
    setRenderTab(key);
  };
  return (
    <div className={cx(!isMobile ? "container" : "container-mobile")}>
      <div className={cx(!isMobile ?"wrapper" : "wrappermobile")}>
        <div>
          <p className={cx("blogsport-title")}>部落格文章</p>
        </div>
        <div className={cx("inner")}>
          <div className={cx(!isMobile ?"title-block" : "title-blockmobile")}>
            {tabBlogSport.map((item, index) => (
              <div
                onClick={() => handleChangeTab(index, item.key)}
                className={cx("with-title", index === active ? "active" : "")}
                key={index} >
                {item.display}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={cx("content")}>
        <div className={cx("message-body")}>
          {renderTab === "casinoarticles" ? (
            <CasinoArt />
          ) : renderTab === "baccarat" ? (
            <Bacarat />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Blogsport;
