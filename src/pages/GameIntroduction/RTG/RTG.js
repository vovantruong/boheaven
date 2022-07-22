import React, { useContext } from "react";
import styles from "./RTG.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-RTG/rtg1.png";
import block2 from "../../../assets/images/pages/game-intro/img-RTG/rtg2.png";
import block3 from "../../../assets/images/pages/game-intro/img-RTG/rtg3.png";
import block4 from "../../../assets/images/pages/game-intro/img-RTG/rtg4.png";
const cx = className.bind(styles);
const tabRTGList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const RTG = () => {
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
                  <h4>RTG電子品牌特色</h4>
                  <p className={cx("content1")}>
                    RTG電子是個電子老虎機遊戲的品牌設計商，已在歐美市場經營多年，堪稱是電子老虎機遊戲商的老字號品牌。RTG電子與其他品牌有個最大不同的特色在於，其累積獎金式的老虎機機台只有一個大獎功能，玩家如仔細在RTG電子的「真實系列」仔細看，即可看到RTG電子每款的老虎機都有兩個隨機大獎。玩家如玩RTG電子不需像其他品牌那樣門檻比較不高，且無須累積大量的彩金才能回本。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>RTG電子品牌特色</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    RTG電子是個電子老虎機遊戲的品牌設計商，已在歐美市場經營多年，堪稱是電子老虎機遊戲商的老字號品牌。RTG電子與其他品牌有個最大不同的特色在於，其累積獎金式的老虎機機台只有一個大獎功能，玩家如仔細在RTG電子的「真實系列」仔細看，即可看到RTG電子每款的老虎機都有兩個隨機大獎。玩家如玩RTG電子不需像其他品牌那樣門檻比較不高，且無須累積大量的彩金才能回本。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block2")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>RTG電子經營方針</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                  <p className={cx("content1")}>
                    如果提到年久不衰這個詞可以形容誰？那一定會告訴你是RTG電子。RTG電子開發大量多元化的遊戲產品，以卓越與創新的角度在設計遊戲產品，更已成為旗品牌的堅持特色。
                  </p>
                  <p className={cx("content1")}>
                    RTG電子所堅持的是從態度去兼顧品質，為旗下的營運商解決任何疑難雜症，如電子遊戲的營銷、開發、遊戲供給等等。如何與客戶之間建立雙贏的方式？便是RTG電子所堅持的服務品質，目前市面上RTG電子的產品項目已經超過三百多種。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>RTG電子經營方針</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                  <p className={cx("content1")}>
                    如果提到年久不衰這個詞可以形容誰？那一定會告訴你是RTG電子。RTG電子開發大量多元化的遊戲產品，以卓越與創新的角度在設計遊戲產品，更已成為旗品牌的堅持特色。
                  </p>
                  <p className={cx("content1")}>
                    RTG電子所堅持的是從態度去兼顧品質，為旗下的營運商解決任何疑難雜症，如電子遊戲的營銷、開發、遊戲供給等等。如何與客戶之間建立雙贏的方式？便是RTG電子所堅持的服務品質，目前市面上RTG電子的產品項目已經超過三百多種。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block3")}>
          <h4>RTG電子品牌背景</h4>
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block3} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <p className={cx("content1")}>
                RTG電子的辦公室總部位於美國的康州的紐哈芬市，這是一個沿海的城市，有著許多豐富的文化。RTG電子品牌創立於1998年的網路起飛時代，是以經營電子遊戲、撲克牌遊戲相關核心技術的品牌。RTG經歷了多年來的經營與競爭，已是電子遊戲市場屹立不搖的老品牌，其遊戲供應的累積獎金制度更是現在許多同行所模仿不來的。
                </p>
                <p className={cx("content1")}>
                從這20多年來的時間推演，RTG電子絕對有權利說自己是一個先驅品牌，無論是產品技術成熟技術，又或者是整個供應鏈的服務品質，絕對都是領先業界的模範品牌之一。
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
                  <h4>RTG電子獲得大量玩家好評</h4>
                  <p className={cx("content1")}>
                  RTG電子是電子遊戲老虎機的翹楚品牌，從1998年成立以來至今，二十多年的歲月為品牌打下了非常良好的經營基礎，多年來也累積了不少死忠的玩家。由於RTG電子的遊戲超過三百多種，因此至今依然是各位玩家所追捧的品牌之一。RTG電子承蒙各大線上博弈平台的合作，創造出更大的品牌曝光度。
                  </p>
                </div>
              </div>
              <div className={cx("block-right")}>
                <img src={block4} />
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>RTG電子獲得大量玩家好評</h4>
              <div className={cx("block-left")}>
                <img src={block4} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("content-block2")}>
                  <p className={cx("content1")}>
                  RTG電子是電子遊戲老虎機的翹楚品牌，從1998年成立以來至今，二十多年的歲月為品牌打下了非常良好的經營基礎，多年來也累積了不少死忠的玩家。由於RTG電子的遊戲超過三百多種，因此至今依然是各位玩家所追捧的品牌之一。RTG電子承蒙各大線上博弈平台的合作，創造出更大的品牌曝光度。
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
            {tabRTGList.map((item, i) => (
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
export default RTG;
