import React, { useContext, useState } from "react";
import styles from "./OB.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import banner from "../../../assets/images/pages/game-intro/img-OB/banner.png";
import bannermobile from "../../../assets/images/pages/game-intro/img-OB/block-mobile.png";
import icon from "../../../assets/images/pages/game-intro/img-OB/Vector.png";
import icon2 from "../../../assets/images/pages/game-intro/img-OB/Vector2.png";
import block1 from "../../../assets/images/pages/game-intro/img-OB/OB1.png";
import block2 from "../../../assets/images/pages/game-intro/img-OB/OB2.png";
import block3 from "../../../assets/images/pages/game-intro/img-OB/OB3.png";
import block4 from "../../../assets/images/pages/game-intro/img-OB/OB4.png";
import block5 from "../../../assets/images/pages/game-intro/img-OB/OB5.png";
import block6 from "../../../assets/images/pages/game-intro/img-OB/OB6.png";
import block7 from "../../../assets/images/pages/game-intro/img-OB/allbet7.png";
import block8 from "../../../assets/images/pages/game-intro/img-OB/allbet8.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import { dataOB } from "~/constants/mocks/DataGameIntro/dataOB";
const cx = className.bind(styles);
const tabOBList = [
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

const OB = () => {
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
            <h3>OB Gaming</h3>
            <p className={cx("title2")}> 亞博百家樂 最新最多百家樂檯桌</p>
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
            name="OB品牌介紹"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>OB百家樂品牌介紹</h4>
                <p className={cx("content1")}>
                OB百家樂亦可稱為亞博真人、亞博百家樂等名稱，早已在市場中經營十多年的OB百家樂是每一位線上博弈玩家耳熟能想的品牌，其營業版圖涵蓋日韓、歐美等地，是一個高品質的線上真人百家樂遊戲商。OB百家樂集團初始代表作是一系列的線上百家樂遊戲服務，在真人視訊娛樂佔有一席之地。隨著市場的變化，近年來亞博真人已經走向多元化服務的經營，目前遊戲服務產品觸及包含百家樂、線上麻將棋牌還有體育球版等等領域，OB真人可謂一個全方位服務的優質品牌。
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
            name="OB特色介紹"
          />
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <div className={cx("common-problem")}>
                {dataOB.map((rule, id) => (
                  <div
                    key={id}
                    className={cx("problem-item", { ["active"]: active == id })}>
                    <button
                      onClick={() => handleCollapse(id)}
                      className={cx("action-collapse")} >
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
                {dataOB.map((rule, id) => (
                  <div
                    key={id}
                    className={cx("problem-item", { ["active"]: active == id })}>
                    <button
                      onClick={() => handleCollapse(id)}
                      className={cx("action-collapse")} >
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
            name="OB百家樂三大遊戲亮點"
          />
          <div className={cx("wrapper-block")}>
            {!isMobile ? (
              <div className={cx("block-content")}>
                <div>
                  <h4>最齊全的百家樂品牌</h4>
                  <img src={block3} />
                  <p>
                  OB百家樂是目前亞洲線上視訊真人娛樂品牌中，覆蓋率最高的主流視訊遊戲。OB百家樂官方提供跨平台的技術支援，照顧到不同裝置與平台的客戶群；OB百家樂更有多達15款的線上真人視訊遊戲任君挑選遊玩。
                  </p>
                </div>
                <div>
                  <h4>最多遊戲選擇的品牌</h4>
                  <img src={block4} />
                  <p>
                  OB百家樂提供包含競咪追逐、共咪共享咪牌的真人百家樂玩法，多達24種左右的線上百家樂玩法，還有資訊最齊全的牌路紀錄資訊。OB百家樂玩法是業界最多選擇的品牌。
                  </p>
                </div>
                <div>
                  <h4>最新遊戲技術100%圖像支援</h4>
                  <img src={block5} />
                  <p>
                  現在是個講求高畫質享受的年代，OB百家樂定期優化內部產品品質，以最新技術符合現在玩家的遊戲體驗需求。OB百家樂提供100%高畫質的圖像識別率，以及視訊同步開牌的過程讓玩家一覽無遺。
                  </p>
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
                <div>
                  <h4>最齊全的百家樂品牌</h4>
                  <img src={block3} />
                  <p>
                  OB百家樂是目前亞洲線上視訊真人娛樂品牌中，覆蓋率最高的主流視訊遊戲。OB百家樂官方提供跨平台的技術支援，照顧到不同裝置與平台的客戶群；OB百家樂更有多達15款的線上真人視訊遊戲任君挑選遊玩。
                  </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                   <div>
                  <h4>最多遊戲選擇的品牌</h4>
                  <img src={block4} />
                  <p>
                  OB百家樂提供包含競咪追逐、共咪共享咪牌的真人百家樂玩法，多達24種左右的線上百家樂玩法，還有資訊最齊全的牌路紀錄資訊。OB百家樂玩法是業界最多選擇的品牌。
                  </p>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>  
                  <h4>最新遊戲技術100%圖像支援</h4>
                  <img src={block5} />
                  <p>
                  現在是個講求高畫質享受的年代，OB百家樂定期優化內部產品品質，以最新技術符合現在玩家的遊戲體驗需求。OB百家樂提供100%高畫質的圖像識別率，以及視訊同步開牌的過程讓玩家一覽無遺。
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
            name="OB百家即時連線即時玩"
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
                  OB百家樂是個領先業界的第一優質品牌，在世界各地皆有設立真人遊戲場所，全球員工超過三千人以上，提供高品質沉浸式服務，以及多國語言支援。OB百家樂同時是個24小時營運的遊戲商，支援多裝置隨連即玩的特色，保證玩家不受時間與地域的限制。
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
            {tabOBList.map((item, i) => (
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

export default OB;
