import React, { useContext, useState } from "react";
import styles from "./OG.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import banner from "../../../assets/images/pages/game-intro/img-OG/banner.png";
import bannermobile from "../../../assets/images/pages/game-intro/img-OB/block-mobile.png";
import icon from "../../../assets/images/pages/game-intro/img-OB/Vector.png";
import icon2 from "../../../assets/images/pages/game-intro/img-OG/Vector2.png";
import block1 from "../../../assets/images/pages/game-intro/img-OG/og1.png";
import block2 from "../../../assets/images/pages/game-intro/img-OG/og2.png";
import block3 from "../../../assets/images/pages/game-intro/img-OG/og3.png";
import block4 from "../../../assets/images/pages/game-intro/img-OG/og4.png";
import block5 from "../../../assets/images/pages/game-intro/img-OG/og5.png";
import block6 from "../../../assets/images/pages/game-intro/img-OG/og6.png";
import block7 from "../../../assets/images/pages/game-intro/img-OG/allbet7.png";
import block8 from "../../../assets/images/pages/game-intro/img-OG/allbet8.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { dataOG } from "~/constants/mocks/DataGameIntro/dataOG";
const cx = className.bind(styles);
const tabOGList = [
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

const OG = () => {
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
            <h3>Oriental Game</h3>
            <p className={cx("title2")}>OG真人 東方美女荷官火辣登場</p>
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
            name="OG真人介紹"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>OB百家樂品牌介紹</h4>
                <p className={cx("content1")}>
                  OG真人娛樂（Oriental
                  Game）強調最穩定的百家樂系統，OG真人開發與營運真人百家樂系統數十年來，不僅想挑戰最高品質的投注系統，我們更為線上博弈注入全新的整合服務，OG真人提供您獨家的OG百家樂，更有其他為玩家客製化的龍虎百家樂、骰寶、龍虎、輪盤...等熱門博弈遊戲。
                </p>
                <p className={cx("content1")}>
                  我們在篩選OG真人專業荷官、真人系統與回饋等每個平台細節上，擁有菲律賓頂級iGaming許可商，站在玩家角度做了深入考量，和遊戲公司（PAGCOR）的交互式遊戲許可證，同時也成為我們OG娛樂城的專業核心價值。
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
            name="OG百家樂介紹"
          />
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <div className={cx("common-problem")}>
                  {dataOG.map((rule, id) => (
                    <div
                      key={id}
                      className={cx("problem-item", {
                        ["active"]: active == id,
                      })}
                    >
                      <button
                        onClick={() => handleCollapse(id)}
                        className={cx("action-collapse")}
                      >
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
          ) : (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("common-problem")}>
                  {dataOG.map((rule, id) => (
                    <div
                      key={id}
                      className={cx("problem-item", {
                        ["active"]: active == id,
                      })}
                    >
                      <button
                        onClick={() => handleCollapse(id)}
                        className={cx("action-collapse")}
                      >
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
            name="OG百家樂遊戲有哪些"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("content")}>
              <p>
              線上百家樂品牌多，OG真人（OG CASINO）為打造符合玩家期待的真人百家樂平台，OG集團在不斷研發與創新下，創造出像是龍虎、炸金花、牛牛、輪盤 多台下注、自主切牌等玩法…，在豐富的百家樂玩法中一同與OG真人荷官一對一玩牌等業界首創的百家樂投注模式，開發出的OG Gaming獨家品牌娛樂系統，讓每一位OG百家樂玩家們都能在OG真人投注中擁有最頂級投注體驗。
              </p>
            </div>

            {!isMobile ? (
              <div className={cx("block-content")}>
                <div>
                  <h4>OG百家樂－龍虎</h4>
                  <img src={block3} />
                  <p>
                    沙龍百家樂的輪盤遊戲有高達50倍的獎金賠率，以中國傳統的「魚蝦蟹」為主題，搭配超性感的荷官進行輪盤的旋轉控制，並且與每位玩家進行線上的互動，讓您有更接近實體賭場的體驗。
                  </p>
                </div>
                <div>
                  <h4>OG百家樂－牛牛</h4>
                  <img src={block4} />
                  <p>
                  OG真人玩家在牛牛廳拿到5張牌後透過牛牛遊戲規則來進行排列組合，分前2張及後3張，後三張須為十的倍數為”妞”，若前兩張點數超過八點以上即有倍數賠付，牛牛比的不僅是大小，閒以特定牌組勝出還能贏高倍率彩金！

                  </p>
                </div>
                <div>
                  <h4>OG百家樂－炸金花</h4>
                  <img src={block5} />
                  <p>
                  炸金花一方手持三張牌進行比牌，正常炸金花大小順序為：豹子>同花順>金花>順子>對子>單張，最常見的還是梭哈與大老二牌組，玩家在玩炸金花前基本觀念需要先建立好，拿到對子牌型優勢就能雙倍提升，並非要拿順子金花才比牌哦。
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
                    <h4>OG百家樂－龍虎</h4>
                    <img src={block3} />
                    <p>
                    龍虎鬥（The big battle）是由經典OG百家樂衍生的撲克遊戲，是所有百家樂玩法中最易學的撲克遊戲；投注方式與百家樂一樣的是使用八副撲克牌，並以牌面大小來決定輸贏，牌面大小不比花色，只比點數，K為最大牌，A為最小。
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>OG百家樂－牛牛</h4>
                    <img src={block4} />
                    <p>
                    OG真人玩家在牛牛廳拿到5張牌後透過牛牛遊戲規則來進行排列組合，分前2張及後3張，後三張須為十的倍數為”妞”，若前兩張點數超過八點以上即有倍數賠付，牛牛比的不僅是大小，閒以特定牌組勝出還能贏高倍率彩金！

                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>OG百家樂－炸金花</h4>
                    <img src={block5} />
                    <p>
                    炸金花一方手持三張牌進行比牌，正常炸金花大小順序為：豹子>同花順>金花>順子>對子>單張，最常見的還是梭哈與大老二牌組，玩家在玩炸金花前基本觀念需要先建立好，拿到對子牌型優勢就能雙倍提升，並非要拿順子金花才比牌哦。
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
            name="獨家系統取得合法認證"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block6} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("block-title")}>
                <div>
                  <p>
                  OG百家樂具備可靠性與穩定的獨家運算基礎系統外，更提供喜愛百家樂的玩家們最尖端產品和服務，OG真人獨家開發系統更以安全的最佳方式執行真人直播，玩家可以在OG百家樂遊戲中根據喜好自由切換各玩法廳室提升其投注效率；OG集團自家開發伺服器功能更經過菲律賓驗證，讓OG真人伺服器也經過測試且確保玩家投注過程的安全，與PC、Mac、平板電腦和平板手機等…各種設備上投注軟體完全相容，讓玩家放心在OG百家樂投注過程中不必在安全性上有所妥協。
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
            {tabOGList.map((item, i) => (
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

export default OG;
