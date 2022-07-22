import React from "react";
import classNames from "classnames/bind";
import styles from "./QualityService.module.scss";
import InfoBox, {
  InfoImage,
  InfoHead,
  InfoBody,
  InfoTag,
} from "~/components/InfoBox/InfoBox";
import ServiceChart from "./ServiceChart/ServiceChart";
import { SERVICES } from "~/constants/imageHomePage";

const cx = classNames.bind(styles);

const data = [
  {
    image: SERVICES.Transaction,
    title: "極速存提轉款",
    tag: "FAST TRANSACTION",
    description: "存款、取款、轉帳超快速，入帳無延遲。",
  },
  {
    image: SERVICES.Games,
    title: "最完整娛樂體驗",
    tag: "1000+ GAMES",
    description: "博天堂娛樂城擁有最豐富的遊戲種類，多樣 玩法。",
  },
  {
    image: SERVICES.Protection,
    title: "加密安全管理",
    tag: "ALWAYS ON PROTECTION",
    description: "獨家開發加密技術，資料保障最完善。",
  },
  {
    image: SERVICES.Devices,
    title: "支持所有行動設備",
    tag: "ALL DEVICES",
    description: "不管使用任何設備，讓您娛樂投注隨心所欲！",
  },
];

const dataRadilChart = [
  {
    name: "Average-deposit-time-60-seconds",
    data: [
      {
        title: "平均存款時間60秒",
        value: 60,
        character: "秒",
        fill: "#81DCFF",
      },
    ],
  },
  {
    name: "80-cooperative-payment-platforms",
    data: [
      {
        title: "合作支付平台80家",
        value: 80,
        character: "家",
        fill: "#81DCFF",
      },
    ],
  },
  {
    name: "Average-withdrawal-time-5-minutes",
    data: [
      {
        title: "平均提款時間5分鐘",
        value: 5,
        character: "分",
        fill: "#81DCFF",
      },
    ],
  },
  {
    name: "22-official-partners",
    data: [
      {
        title: "官方合作夥伴22家",
        value: 22,
        character: "家",
        fill: "#81DCFF",
      },
    ],
  },
];

const QualityService = () => {
  return (
    <div className={cx("quality-service")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("list-chart")}>
            {dataRadilChart.map((item, i) => (
              <React.Fragment key={i}>
                <ServiceChart data={item.data} />
              </React.Fragment>
            ))}
          </div>
          <div className={cx("info")}>
            {data.map((item, i) => (
              <div className={cx("info-box","bg-normal-linear")}>
                <div className={cx("img-info")}>
                  <img src={item.image} alt="..." />
                </div>
                <div className={cx("wrap-text")}>
                  <p className={cx("title")}>{item.title}</p>
                  <p className={cx("tag")}>{item.tag}</p>
                  <p className={cx("desc")}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityService;
