import React, { useContext, useState } from "react";
import styles from "./DreamGame.module.scss";
import className from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import banner from "../../../assets/images/pages/game-intro/img-Dreamgame/banner.png";
import bannermobile from "../../../assets/images/pages/game-intro/img-Dreamgame/banner-mobile.png";
import icon from "../../../assets/images/pages/game-intro/img-Dreamgame/Vector.png";
import block1 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG.png";
import block2 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG1.png";
import block3 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG2.png";
import block4 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG3.png";
import block5 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG4.png";
import block6 from "../../../assets/images/pages/game-intro/img-Dreamgame/DG5.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
const cx = className.bind(styles);
const tabAllbetList = [
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
// const tabAllbet = [
//   {
//     key: "sponsorship",
//     path:"/#",
//   },
//   {
//     key: "event",
//     path:"/#",
//   },
// ];
const DreamGame = () => {
  const [active, setActive] = useState(0);
  const isMobile = useContext(MediaQueryContext);
  // const handleChangeTab = (index) => {
  //   setActive(index);
  // };
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
            <h3>DreamGaming</h3>
            <p className={cx("title2")}> DG真人 最火辣的視訊百家樂</p>
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
            name="DG品牌介紹"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>DG百家樂品牌</h4>
                <p className={cx("content1")}>
                  DG真人娛樂（DREAM
                  GAMING）擁有數十年打造大型線上博弈娛樂的經驗，提供娛樂城投注服務項目更包含DG百家樂、龍虎百家樂、骰寶、龍虎、輪盤...等熱門遊戲之外，我們更擁有數百位訓練有素的DG專業荷官、真實的賭場環境、穩定的DG系統設備與專業的技術支持，同時成為我們的專業核心價值。
                </p>
                <p className={cx("content2")}>
                  DG真人透過經驗累積讓我們更瞭解玩家在娛樂城上的使用習慣，DG真人投入大量人力與資源，只為了讓每位投注玩家能放心擁有美好的投注體驗。
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
            name="DG娛樂城官方直營"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>
                    {" "}
                    DG真人於泰國實體賭場門市且擁有合法博彩牌照，品牌宗旨以玩家權益為優先。
                  </h4>
                </div>
              </div>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>
                    {" "}
                    DG娛樂城提供最豐富的娛樂選擇：夢幻DG百家樂、骰寶、色碟、輪盤等撲克遊戲。
                  </h4>
                </div>
              </div>

              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>
                    {" "}
                    真實的DG視訊投注體驗、專業的客服服務，24小時全天候等待每一位玩家的光臨。
                  </h4>
                </div>
              </div>
            </div>
            <div className={cx("block-right")}>
              <img src={block2} />
            </div>
          </div>
        </div>
        <div className={cx("block3")}>
          <TagTitleRectangle
            className={cx("tag-head")}
            titleClassName={cx("tag-name")}
            name="DG真人精彩遊戲"
          />
          <div className={cx("wrapper-block")}>
            {!isMobile ? (
              <div className={cx("block-content")}>
                <div>
                  <h4>DG真人－多元豐富遊戲</h4>
                  <img src={block3} />
                  <p>
                    線上百家樂正在崛起；DG不但在柬埔寨與印尼等地皆擁有真實賭場外，也將多元真人視訊百家樂娛樂創新結合系統，提供您豐富且多樣的投注選擇，包含真人DG百家樂、龍虎、輪盤、骰寶、鬥牛與炸金花…等其他豐富娛樂，讓每一位DG會員們都能在DG百家樂投注中彷彿親臨現場投注。
                  </p>
                </div>
                <div>
                  <h4>DG百家樂各國火辣荷官陪你贏！</h4>
                  <img src={block4} />
                  <p>
                    DG真人集團擁有最頂級的真人娛樂賭場，因此真人百家樂美女陪玩畫面為即時LIVE，主打真人視訊娛樂的DG真人，玩家更可根據個人喜好切換不同的荷官廳室，我們為根據不同的美女荷官設有旗艦廳、國際廳、現場廳、歐洲廳、多桌廳…等廳室，美女直播廳更是亞洲玩家公認荷官第一火辣線上百家樂品牌，如果你是喜歡尋求刺激與新鮮感的百家樂玩家，絕對不能錯過DG真人娛樂遊戲館！
                  </p>
                </div>
                <div>
                  <h4>DG真人荷官－專業受訓</h4>
                  <img src={block5} />
                  <p>
                    DG真人百家樂除了透過專業穩定的系統，更利用荷官形象傳達DG真人理念，真人荷官更是精挑細選且經嚴格受訓，從內到外皆蘊含了DG夢幻真人為線上百家樂定義了明確的核心，不管您身在何處，都能隨時到DG線上真人娛樂體驗最刺激的博弈投注。
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
                    <h4>聚龍廳</h4>
                    <img src={block3} />
                    <p>
                      聚龍廳便是集結所有歐博平檯上的遊戲內容，包括百家樂、輪盤、牛牛及骰寶等等所有深受歐博會員們喜愛的遊戲內容，各種遊戲內容皆有一個以上的桌檯供玩家選擇，且有不同的限紅滿足玩家們的不同需求。
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>快速廳／競咪廳</h4>
                    <img src={block4} />
                    <p>
                      快速廳中集結了所有提供極速模式的遊戲內容，如極速百家樂、極速骰寶及極速龍虎等遊戲模式，讓玩家可以在一個遊戲介面中同時進行投注。競咪廳則在投注過程中加入「瞇牌」玩法的遊戲。
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <h4>性感廳／VIP包桌</h4>
                    <img src={block5} />
                    <p>
                      性感廳由穿著性感的美女荷官進行發牌。最後的VIP包桌則是讓玩家可以擁有獨家的桌檯，由專屬的荷官來進行發牌服務，可以不受外在干擾來好好享受遊戲。
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
            name="安全認證、支援多平台"
          />
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block6} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>DG真人取得安全認證</h4>
                  <p>
                    最專業的線上百家樂DG真人(Dream
                    Gaming)，擁有長年博弈營運經驗外，我們遵循各項國際博弈認可的標準，更獨家取得合法博彩牌照，代表我們為資料保護與玩家安全所許下的承諾，使其DG娛樂系統有著穩定的系統設備、高品質的串接服務，在各大娛樂城代理中及玩家中取得了良好口碑，且
                    24 小時提供您最專業的在線服務。
                  </p>
                </div>
                <div>
                  <h4 className={cx("title")}>支援多裝置遊玩</h4>
                  <p>
                    DG娛樂城結合創新與沉浸式線上賭場系統，其遊戲在Android和iOS設備上提供了完整移動功能，Dream
                    gaming首創提供玩家頂級真人娛樂場，支援玩家能夠在PC、Mac、平板電腦和平板手機等…各種設備上，都能夠保證擁有最高解析度遊戲體驗和完全沉浸式娛樂體驗。
                  </p>
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

export default DreamGame;
