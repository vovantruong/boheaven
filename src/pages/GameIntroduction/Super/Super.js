import React, { useContext } from "react";
import styles from "./Super.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-Super/super1.png";
import block2 from "../../../assets/images/pages/game-intro/img-Super/super2.png";
const cx = className.bind(styles);
const tabSuperList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const Super = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx(!isMobile ? "wrapper" : "wrapper-mobile")}>
      <div className={cx("container")}>
        {!isMobile ? (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <h4>super體育品牌介紹</h4>
                  <p className={cx("content1")}>
                    SUPER體育是一個獲得菲律賓政府認證許可的體育博彩系統品牌，品牌多年來一直深耕於網路運彩的市場當中。SUPER體育更被認為是網路運彩品牌當中，國際市場唯二認可營運最穩定的球版博彩品牌。SUPER體育官方提供可投注的運動項目非常多，包含棒球、籃球、網球、電競還有冰球等等的熱門運動項目，總項目超過百種以上，SUPER體育最高賠率有0.97，無論系統或者服務品質，super體育皆是網路運彩的旗艦品牌。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>super體育品牌介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    SUPER體育是一個獲得菲律賓政府認證許可的體育博彩系統品牌，品牌多年來一直深耕於網路運彩的市場當中。SUPER體育更被認為是網路運彩品牌當中，國際市場唯二認可營運最穩定的球版博彩品牌。SUPER體育官方提供可投注的運動項目非常多，包含棒球、籃球、網球、電競還有冰球等等的熱門運動項目，總項目超過百種以上，SUPER體育最高賠率有0.97，無論系統或者服務品質，super體育皆是網路運彩的旗艦品牌。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          <div className={cx("content-block2")}>
            <h4>super體育安全有保障</h4>
            <p className={cx("content1")}>
              super體育是經由菲律賓的主管機關FCLRC機關所監管以及頒布執照的網路運彩品牌，FCLRC全名為First
              Cagayan Leisure and Resort Corporation。
            </p>
            <p className={cx("content1")}>
              Super體育的程式系統則是受到菲律賓官方卡加延經濟特區管理局(CEZA)監管的，super體育所有的網路運彩系統營運設計方式，皆須符合CEZA官方的要求來運轉。
            </p>
            <p className={cx("content1")}>
              super體育系統是絕對保證不能有任何作弊行為出現，同時亦是一個值得您肯定的網路運彩品牌，亦是在各大線上博彩平台都能看到的運彩系統。
            </p>
          </div>
        </div>
        <div className={cx("block3")}>
          <div className={cx("content-block3")}>
            <h4>Super體育投注項目最豐富</h4>
            <p className={cx("content1")}>
              近年來各大運動項目行銷成功，吸引了許多人的目光，市場也日漸龐大。Super體育所提供的賽事投注都是最熱門有趣的，包含棒球、籃球、足球、冰球與網球等等，您都可在super體育的系統中找到。
            </p>
            <p>
              體育投注最熱門的讓分、大小、單雙、場中投注、總進球數、主客隊大小等等超過幾十種的投注玩法，在super體育中通通都能玩到。跟上潮流提供最新最潮的投注玩法，顛覆您對傳統球版的投注玩法，這正是super體育所努力的目標。
            </p>
          </div>
        </div>
        <div className={cx("block4")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
                 <h4>Super體育與博天堂合作契機</h4>
              <div className={cx("block-left")}>
                <div className={cx("left1")}>
                 
                  <p className={cx("content1")}>
                  正是因為super體育獲得CEZA以及FCLRC兩大菲律賓博彩主管機關的監督，無論是安全性、品牌信任度或者遊戲中的公平程度，皆是值得信任的。Super體育集團在日新月異的網路運彩市場中，不斷擴張海外的營運版圖以及服務方式，創新與堅持積極的態度，正是讓博天堂團隊看到其品牌優勢，經營博彩的理念與博天堂集團相符合。Super體育提供高反水優惠，亦有國際賽事包含奧運、亞運等等的投注服務，super體育系統更支援多元裝置上網的服務，隨時照顧到不同類型的玩家族群。
                  </p>
                </div>
              </div>
              <div className={cx("block-right")}>
                <img src={block2} />
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>博天堂體育受到政府的嚴格管控</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                    博天堂體育是一個合法的網路運彩系統，來自博天堂所設計操刀的運彩平台，整個博天堂品牌是受到菲律賓政府第三方博彩監督機關所管控的，從遊戲服務的系統設計再到整個網站平台安全隱私，皆須符合菲律賓政府的規定。博天堂體育絕對是營運實力最卓越的網路運彩領先平台，提供包含MLB、CPBL、NBA、NPB各大聯盟賽事的投注服務。博天堂體育感謝所有會員朋友們的長期支持，你們的支持與愛護是讓博天堂體育更加茁壯的原動力。
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
            {tabSuperList.map((item, i) => (
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
export default Super;
