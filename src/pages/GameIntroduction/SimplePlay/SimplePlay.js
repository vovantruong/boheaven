import React, { useContext } from "react";
import styles from "./SimplePlay.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-SimplePlay/SP1.png";
import block2 from "../../../assets/images/pages/game-intro/img-SimplePlay/SP2.png";
import block3 from "../../../assets/images/pages/game-intro/img-SimplePlay/SP3.png";
import block4 from "../../../assets/images/pages/game-intro/img-SimplePlay/SP4.png";
const cx = className.bind(styles);
const tabSimplePlayList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const SimplePlay = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx(!isMobile ? "wrapper" : "wrapper-mobile")}>
      <div className={cx("container")}>
        <div className={cx("block")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <h4>SimplePlay電子介紹</h4>
                  <p className={cx("content1")}>
                    SP電子（SimplePlay）2007年起源自於菲律賓，擁有數十年打造大型線上博弈娛樂的經驗，很快地，吸引許多對電子遊戲有興趣的專業團隊也加入這個行列，由於SimplePlay受到許多大型娛樂城品牌的認可與廣為流傳的口碑，讓他們在近年內快速拓展於上百家的娛樂城平台，成為了電子遊戲品牌先驅。
                  </p>
                  <p>
                    SimplePlay通過使用業界首創的系統與技術與線上娛樂城完美結合，除了數十種經典老虎機外，SimplePlay更獨家推出首創的社交競技遊戲《魚樂無窮》，為迎合廣大玩家社交需求的同時，將對戰體驗整合華麗流暢的畫面，如果你是剛踏入娛樂城的新手玩家也能以0技巧輕鬆打出高獲利。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>SimplePlay電子介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    SP電子（SimplePlay）2007年起源自於菲律賓，擁有數十年打造大型線上博弈娛樂的經驗，很快地，吸引許多對電子遊戲有興趣的專業團隊也加入這個行列，由於SimplePlay受到許多大型娛樂城品牌的認可與廣為流傳的口碑，讓他們在近年內快速拓展於上百家的娛樂城平台，成為了電子遊戲品牌先驅。
                  </p>
                  <p>
                    SimplePlay通過使用業界首創的系統與技術與線上娛樂城完美結合，除了數十種經典老虎機外，SimplePlay更獨家推出首創的社交競技遊戲《魚樂無窮》，為迎合廣大玩家社交需求的同時，將對戰體驗整合華麗流暢的畫面，如果你是剛踏入娛樂城的新手玩家也能以0技巧輕鬆打出高獲利。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block2")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>SimplePlay電子有哪些精彩遊戲？</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                  <p className={cx("content1")}>
                    SimplePlay的經營方式和玩家的聯繫非常密切且與眾不同，SimplePlay將自家的經典老虎機遊戲中融入豬八戒、上海教父、財神到、假面王子、招財貓、紅
                    樓春夢、美女沙排、喪屍獵人、黃飛鴻、比基尼狂熱、濟公、錦衣衛等…家喻戶曉的亞洲傳統故事，在當時的娛樂城平台主要的老虎機品牌都是依靠沙龍電子、RTG電子等較知名的老虎機來獲取優勢，但是SimplePlay選擇自己的路，自行創立老虎機遊戲權威品牌，並成為電子遊藝領域首度融合濃厚亞洲風格的老虎機品牌。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>SimplePlay電子有哪些精彩遊戲？</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                <p className={cx("content1")}>
                    SimplePlay的經營方式和玩家的聯繫非常密切且與眾不同，SimplePlay將自家的經典老虎機遊戲中融入豬八戒、上海教父、財神到、假面王子、招財貓、紅
                    樓春夢、美女沙排、喪屍獵人、黃飛鴻、比基尼狂熱、濟公、錦衣衛等…家喻戶曉的亞洲傳統故事，在當時的娛樂城平台主要的老虎機品牌都是依靠沙龍電子、RTG電子等較知名的老虎機來獲取優勢，但是SimplePlay選擇自己的路，自行創立老虎機遊戲權威品牌，並成為電子遊藝領域首度融合濃厚亞洲風格的老虎機品牌。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block3")}>
          <h4>SimplePlay電子支援多平台且經合法認證</h4>
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block3} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <p className={cx("content1")}>
                SimplePlay研發了大量創新的老虎機遊戲並將迷人的亞洲文化風格與線上娛樂城娛樂項目完美結合，加上華麗精緻的遊戲畫面，SimplePlay背後擁有一群傑出的專業系統開發團隊，且憑藉的是對於玩家遊戲體驗的細心堅持，SimplePlay為了讓所有老虎機遊戲都能完美的支援所有行動裝置，我們不依靠傳統的老虎機系統與遊戲方式營運，我們利用HTML5開發移動裝置且支持包括中文在內的多國語言選項，為來自世界各地的老虎機玩家們帶來最優秀的老虎機遊戲，不管是Android還是iOS設備都能在線上賭場也能彷彿親臨現場投注。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block4")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <div className={cx("content-block2")}>
                  <p className={cx("content1")}>
                  專業的SimplePlay遵循各項國際博弈認可的標準，我們利用自家穩定的老虎機系統設備與高品質的串接服務，使得我們獨家取得菲律賓合法博彩牌照，SimplePlay期許未來能夠持續在各大娛樂城代理中24H提供玩家最專業的投注服務。
                  </p>
                </div>
              </div>
              <div className={cx("block-right")}>
                <img src={block4} />
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <img src={block4} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("content-block2")}>
                <p className={cx("content1")}>
                  專業的SimplePlay遵循各項國際博弈認可的標準，我們利用自家穩定的老虎機系統設備與高品質的串接服務，使得我們獨家取得菲律賓合法博彩牌照，SimplePlay期許未來能夠持續在各大娛樂城代理中24H提供玩家最專業的投注服務。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("wrapper-block")}>
          <div className={cx("fiel")}>
            <div className={cx("title")}>標題</div>
            <div className={cx("time")}>時間</div>
          </div>
          <div className={cx(!isMobile ? "tableTab" : "tableTabMobile")}>
            {tabSimplePlayList.map((item, i) => (
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
export default SimplePlay;
