import React, { useContext } from "react";
import styles from "./AllBet.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import banner from "../../../assets/images/pages/game-intro/img-Allbet/banner.png";
import icon from "../../../assets/images/pages/game-intro/img-Allbet/Vector.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
const cx = className.bind(styles);
const tabAllbetList = [
  {
    Date: "2022/04/27",
    Subject: "娛樂城 | 娛樂城測評條件大公開！賭場排名怎麼來？",
  },
];
const dataBanner = [
  {
    image: banner,
    link: "#",
  },
];

const AllBet = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        <BannerSlide container={false} loop={false} data={dataBanner} />
        <div className={cx("content-item")}>
          <div className={cx("title-content")}>
            <p className={cx("title")}>Welcome to</p>
            <p className={cx("title1")}>Allbet Baccarat</p>
            <p className={cx("title2")}> 歐博百家樂性感廳新上線 等您來體驗</p>
          </div>
          <div className={cx("description-content")}>
            <div>
              <button className={cx("go-now")}>立即前往</button>
            </div>
            <div>
              <p className={cx("description1")}>多樣遊戲等你來挑戰</p>
              <img src={icon}/>
            </div>
          </div>
        </div>
      </div>
      <div className={cx(!isMobile ? "tableTab" : "tableTabMobile")}>
        {tabAllbetList.map((item, i) => (
          <div className={cx("block1")} key={i}>
            <table>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
              <tr>
                <th className={cx("subject")}>{item.Subject}</th>
                <th className={cx("date")}>{item.Date}</th>
              </tr>
            </table>
          </div>
        ))}
      </div>
      <div className={cx("block-trans2")}>
        <div className={cx("block")}>
          <p>«</p>
          <p>‹</p>
          <p>1</p>
          <p>2</p>
          <p>...</p>
          <p>9</p>
          <p>10</p>
          <p>›</p>
          <p>»</p>
        </div>
      </div>
    </div>
  );
};

export default AllBet;
