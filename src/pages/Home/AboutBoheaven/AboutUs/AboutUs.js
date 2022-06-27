import React from "react";
import classNames from "classnames/bind";
import styles from "./AboutUs.module.scss";
import LogoHead from '../../../../assets/images/global/boheaven.png'

const cx = classNames.bind(styles);

const AboutUs = () => {
  return (
    <div className={cx("about-us")}>
      <div className={cx("image-head")}>
        <img src={LogoHead} alt='boheaven' />
      </div>
      <div className={cx("descripton")}>
        <p>
          博天堂娛樂城是全台出款最快的娛樂城，平均3分鐘內完成出款作業。24小時客服溫柔體貼、有問必答。博天堂娛樂城提供線上眾多娛樂城遊戲，百家樂、老虎機、體育電競、賓果、彩票、捕魚等等線上遊戲，博天堂娛樂城註冊、首儲、再儲皆送大禮，等您來體驗。
        </p>
        <p>
          100%保證兌現 &
          個資/資金安全防護，本網站是由博天堂官方直營，玩家的正常投注行為100%支付保證，資金與個資由嚴密的加密系統控管。博天堂娛樂城在此鄭重聲明，絕不會將玩家資料銷售、洩漏給第三方；與此同時，玩家的投注行為，也將受到完善的風控系統掌握，任何套利、違規行為將於第一時間回報給客服人員，以保障其他玩家的遊玩公平性。
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
