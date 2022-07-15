import React, { useContext, useState } from "react";
import styles from "./SAgaming.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import banner from "../../../assets/images/pages/game-intro/img-SA/banner.png";
import bannermobile from "../../../assets/images/pages/game-intro/img-SA/block-mobile.png";
import icon from "../../../assets/images/pages/game-intro/img-SA/Vector.png";
// import icon1 from "../../../assets/images/pages/game-intro/img-Allbet/Vector1.png";
import icon2 from "../../../assets/images/pages/game-intro/img-SA/Vector2.png";
import block1 from "../../../assets/images/pages/game-intro/img-SA/SA1.png";
import block2 from "../../../assets/images/pages/game-intro/img-SA/SA2.png";
import block3 from "../../../assets/images/pages/game-intro/img-SA/SA3.png";
import block4 from "../../../assets/images/pages/game-intro/img-SA/SA4.png";
import block5 from "../../../assets/images/pages/game-intro/img-SA/SA5.png";
import block6 from "../../../assets/images/pages/game-intro/img-SA/SA6.png";
import block7 from "../../../assets/images/pages/game-intro/img-SA/allbet7.png";
import block8 from "../../../assets/images/pages/game-intro/img-SA/allbet8.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { dataSAgaming } from "~/constants/mocks/DataGameIntro/dataSAgaming";
const cx = className.bind(styles);
const tabSAList = [
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

const SAgaming = () => {
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
            <h3>Welcome to</h3>
            <h3>SA Gaming</h3>
            <p className={cx("title2")}>SA歐洲廳 新增全新百家樂檯桌</p>
          </div>
          <div className={cx("description-content")}>
            <div>
              <button className={cx("go-now")}>立即前往</button>
            </div>
            <div className={cx("description")}>
              <p className={cx("description1")}>多樣遊戲等你來挑戰</p>
              <div className={cx("img-icon")}>
                <img src={icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container")}>
        <div className={cx("block")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="沙龍品牌介紹"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>沙龍百家樂品牌</h4>
                <p className={cx("content1")}>
                  沙龍百家樂是款亞洲知名的線上真人視訊遊戲之一，由沙龍國際集團操刀設計與經營的產品。沙龍國際集團則成立於2009年，已經成立超過十年的時間，也代表著沙龍百家樂在市場上的規模以及品牌名聲甚至品牌支持度，都有一定的成績。
                </p>
                <p className={cx("content2")}>
                  沙龍百家樂是獲得多項博弈展覽會認證過的真人視訊遊戲之一，亦是一個現金版的百家樂平台。沙龍百家樂提供不同的遊戲類型選擇，沙龍平台無論是安全性、遊戲公平性都是獲得沙龍官方非常重視的，請完全安心地遊玩。
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
        <div className={cx("block2")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="沙龍特色介紹"
          />
          {!isMobile ? (
              <div className={cx("wrapper-block")}>
                <div className={cx("block-left")}>
                <div className={cx("common-problem")}>
                  {dataSAgaming.map((rule, id) => (
                    <div
                      key={id}
                      className={cx("problem-item", { ["active"]: active == id })}>
                      <button
                        onClick={() => handleCollapse(id)}
                        className={cx("action-collapse")}>
                        <h4>{rule.title}</h4>
                        <img src={icon2} className={cx("icon")} />
                      </button>
                      <div className={cx("content")}>
                        {rule.description.map((desc, index) => (
                          <p key={index}>{desc.paragrap}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={cx("block-right")}>
                <img src={block2} />
              </div>
          </div>
          ):(
            <div className={cx("wrapper-block")}>
                <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
              <div className={cx("common-problem")}>
                  {dataSAgaming.map((rule, id) => (
                    <div
                      key={id}
                      className={cx("problem-item", { ["active"]: active == id })}>
                      <button
                        onClick={() => handleCollapse(id)}
                        className={cx("action-collapse")}>
                        <h4>{rule.title}</h4>
                        <img src={icon2} className={cx("icon")} />
                      </button>
                      <div className={cx("content")}>
                        {rule.description.map((desc, index) => (
                          <p key={index}>{desc.paragrap}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          )}
        
        </div>
        <div className={cx("block3")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="沙龍遊戲選擇"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("content")}>
              <p>
                沙龍百家樂是備有最齊全遊戲的真人視訊娛樂品牌，沙龍國際集團全方位照顧到不同玩家的興趣喜好。沙龍百家樂的產品亦有通過真人娛樂城第三方監管機關的認可，包含GLI的測試與認證。
              </p>
            </div>

            {!isMobile ? (
              <div className={cx("block-content")}>
                <div>
                  <h4>sa36輪盤</h4>
                  <img src={block3} />
                  <p>
                    沙龍百家樂的輪盤遊戲有高達50倍的獎金賠率，以中國傳統的「魚蝦蟹」為主題，搭配超性感的荷官進行輪盤的旋轉控制，並且與每位玩家進行線上的互動，讓您有更接近實體賭場的體驗。
                  </p>
                </div>
                <div>
                  <h4>sa36幸運六</h4>
                  <img src={block4} />
                  <p>
                    沙龍百家樂幸運六玩法，提供玩家在下注莊家與閒家的同時可以選擇是否要預測莊閒其中一方可以六點的點數獲勝，賠率最高20倍。sa36玩家不得同時下注莊閒情況下，則必須下注莊或閒其中一方，且再下注幸運六選項，才能贏得彩金。
                  </p>
                </div>
                <div>
                  <h4>sa36骰寶</h4>
                  <img src={block5} />
                  <p>
                    沙龍百家樂的骰寶遊戲，玩法是以三顆骰子在骰盅裏頭滾動，以此決定開獎組合。玩家必須藉由牌面上的點數組合或者大小來預測骰盅的數字組合是為何，最終根據開獎結果進行派彩，是款非常簡單的線上遊戲。
                  </p>
                </div>
              </div>
            ) : (
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}>
                <SwiperSlide>
                  <div>
                    <h4>sa36輪盤</h4>
                    <img src={block3} />
                    <p>
                      沙龍百家樂的輪盤遊戲有高達50倍的獎金賠率，以中國傳統的「魚蝦蟹」為主題，搭配超性感的荷官進行輪盤的旋轉控制，並且與每位玩家進行線上的互動，讓您有更接近實體賭場的體驗。
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>sa36幸運六</h4>
                    <img src={block4} />
                    <p>
                      沙龍百家樂幸運六玩法，提供玩家在下注莊家與閒家的同時可以選擇是否要預測莊閒其中一方可以六點的點數獲勝，賠率最高20倍。sa36玩家不得同時下注莊閒情況下，則必須下注莊或閒其中一方，且再下注幸運六選項，才能贏得彩金。
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>sa36骰寶</h4>
                    <img src={block5} />
                    <p>
                      沙龍百家樂的骰寶遊戲，玩法是以三顆骰子在骰盅裏頭滾動，以此決定開獎組合。玩家必須藉由牌面上的點數組合或者大小來預測骰盅的數字組合是為何，最終根據開獎結果進行派彩，是款非常簡單的線上遊戲。
                    </p>
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
              <img src={block6} />
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
            {tabSAList.map((item, i) => (
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

export default SAgaming;
