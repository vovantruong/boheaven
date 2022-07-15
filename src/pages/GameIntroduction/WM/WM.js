import React, { useContext, useState } from "react";
import styles from "./WM.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import banner from "../../../assets/images/pages/game-intro/img-WM/banner.png";
import bannermobile from "../../../assets/images/pages/game-intro/img-WM/block-mobile.png";
import block1 from "../../../assets/images/pages/game-intro/img-WM/WM1.png";
import block2 from "../../../assets/images/pages/game-intro/img-WM/WM2.png";
import block3 from "../../../assets/images/pages/game-intro/img-WM/WM3.png";
import block4 from "../../../assets/images/pages/game-intro/img-WM/WM4.png";
import block5 from "../../../assets/images/pages/game-intro/img-WM/WM5.png";
import block7 from "../../../assets/images/pages/game-intro/img-WM/allbet7.png";
import block8 from "../../../assets/images/pages/game-intro/img-WM/allbet8.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { dataSAgaming } from "~/constants/mocks/DataGameIntro/dataSAgaming";
const cx = className.bind(styles);
const tabWMList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const dataBanner = [
  {
    image: banner,
    link: "#",
  },
];

const WM = () => {
  const [active, setActive] = useState(0);
  const isMobile = useContext(MediaQueryContext);
  const handleCollapse = (id) => {
    setActive(id);
    if (active == id) {
      setActive(null);
    }
  };

  return (
    <div className={cx(!isMobile ? "wrapper" : "wrapper-mobile")}>
      <div className={cx("fiel")}>
        {!isMobile ? (
          <BannerSlide
            container={false}
            data={dataBanner}
            className={cx("img-banner")}
          />
        ) : (
          <img src={bannermobile} />
        )}
        <div className={cx("content-item")}>
          <div className={cx("title-content")}>
            <h3 className={cx("title1")}>
              <span>WM</span>百家樂引領風潮
            </h3>
            <h3 className={cx("title2")}>真人遊戲廳全新項目</h3>
          </div>
          <div className={cx("description-content")}>
            <button className={cx("go-now")}>立即前往體驗</button>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("block")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="WM百家樂介紹"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>關於WM百家樂</h4>
                <p className={cx("content1")}>
                WM百家樂作為引領國內線上博弈產業的領導品牌，在海內外擁有數百萬名註冊玩家。WM百家樂的團隊與顧客服務中心遍布世界各地，並且和許多博弈產業市場的合法營業執照，讓喜愛線上博弈的玩家能夠安心遊玩。直覺化的操作介面、豐富的娛樂城優惠、真人百家樂遊戲廳也是WM百家樂的一大特色。同時，我們提供多元的遊戲、完善的顧客服務，並致力維護遊戲公正性，讓玩家能夠安心暢玩、享受博弈的樂趣。
                </p>
              </div>
              <div className={cx("block-btn")}>
                <div>
                  <a> 立即註冊</a>
                </div>
                <div>
                  <a> 免費試玩</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block3")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="WM遊戲種類"
          />
          <div className={cx("wrapper-block")}>
            {!isMobile ? (
              <div className={cx("block-content")}>
                <div>
                  <h4>百家樂</h4>
                  <img src={block2} />
                  <p>
                  百家樂是世界各地娛樂城中受歡迎的博弈遊戲之一。線上百家樂依照不同的娛樂城也有不同玩法，除了經典玩法外，還有免水等的多種下注方式，差異在於線上百家樂賠率計算的不同。
                  </p>
                  <div className={cx("block-btn1")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>骰寶</h4>
                  <img src={block3} />
                  <p>
                  骰寶一般稱為賭大小，是使用骰子賭博類的其中一種博弈項目，通常是由各閒家向莊家下注。WM骰寶玩法很簡單，玩家對即將擲出的骰子的各類型投注組合下注，並等待骰子滾動；骰出結果如玩家所押，玩家則贏得獎金，反之則就輸掉下注額。
                  </p>
                  <div className={cx("block-btn2")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h4>龍虎</h4>
                  <img src={block4} />
                  <p>
                  龍虎是以牌面大小決定輸贏的博弈遊戲，並且不針對花色進行比較，單純只比點數，順序以K最大，而A最小。龍虎玩法分為兩家，WM玩家可選擇下注龍、虎、和、龍黑、龍紅、虎黑、虎紅等投注選項，由WM真人荷官各發一張牌給龍與虎。
                  </p>
                  <div className={cx("block-btn")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                <div >
                  <h4>百家樂</h4>
                  <img src={block2} />
                  <p>
                  百家樂是世界各地娛樂城中受歡迎的博弈遊戲之一。線上百家樂依照不同的娛樂城也有不同玩法，除了經典玩法外，還有免水等的多種下注方式，差異在於線上百家樂賠率計算的不同。
                  </p>
                  <div className={cx("block-btn1")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                  <h4>百家樂</h4>
                  <img src={block2} />
                  <p>
                  骰寶一般稱為賭大小，是使用骰子賭博類的其中一種博弈項目，通常是由各閒家向莊家下注。WM骰寶玩法很簡單，玩家對即將擲出的骰子的各類型投注組合下注，並等待骰子滾動；骰出結果如玩家所押，玩家則贏得獎金，反之則就輸掉下注額。
                  </p>
                  <div className={cx("block-btn1")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                  <h4>百家樂</h4>
                  <img src={block2} />
                  <p>
                  龍虎是以牌面大小決定輸贏的博弈遊戲，並且不針對花色進行比較，單純只比點數，順序以K最大，而A最小。龍虎玩法分為兩家，WM玩家可選擇下注龍、虎、和、龍黑、龍紅、虎黑、虎紅等投注選項，由WM真人荷官各發一張牌給龍與虎。
                  </p>
                  <div className={cx("block-btn1")}>
                    <div>
                      <a> 免費試玩</a>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              </Swiper>
            )}
          </div>
        </div>
        <div className={cx("block4")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="裝置支援"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block5} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>支援多裝置遊玩</h4>
                  <p>
                  沙龍百家樂支援多種上網裝置的支援，採用響應式的網站設計讓網站系統自動偵測玩家的裝置，自動調整成適合玩家裝置的螢幕尺寸。無論橫式或者直式皆能遊玩沙龍百家樂遊戲，且不會因任何作業系統或者裝置廠牌的限制、地點限制就不能線上玩一把。sa36手機版的設計是無須任何的安裝，輕鬆註冊、輕鬆登入就能輕鬆遊玩沙龍平台，隨時隨地都能享受到沙龍百家樂給您的快樂時光。
                  </p>
                </div>
                <div className={cx("block")}>
                  <div className={cx("block1")}>
                    <div>
                      <img src={block7} />
                    </div>
                    <div className={cx("content")}>
                      <p>桌機、筆電、電視</p>
                      <p>不管使用任何尺寸螢幕，讓您娛樂投注隨心所欲！</p>
                    </div>
                  </div>
                  <div className={cx("block2")}>
                    <div>
                      <img src={block8} />
                    </div>
                    <div className={cx("content")}>
                      <p>各式手機裝置</p>
                      <p>不管使用任何設備，讓您娛樂投注隨心所欲！</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("wrapper-block")}>
          <div className={cx("fiel")}>
            <div className={cx("title")}>標題</div>
            <div className={cx("time")}>時間</div>
          </div>
          <div className={cx(!isMobile ? "tableTab" : "tableTabMobile")}>
            {tabWMList.map((item, i) => (
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
              <p>‹</p>
              <p>1</p>
              <p>2</p>
              <p>...</p>
              <p>9</p>
              <p>10</p>
              <p>›</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WM;
