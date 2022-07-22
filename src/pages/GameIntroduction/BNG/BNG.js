import React, { useContext } from "react";
import styles from "./BNG.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-BNG/bng1.png";
import block2 from "../../../assets/images/pages/game-intro/img-BNG/bng2.png";
import block3 from "../../../assets/images/pages/game-intro/img-BNG/bng3.png";
const cx = className.bind(styles);
const tabBNGList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const BNG = () => {
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
                  <h4>BNG電子遊戲介紹</h4>
                  <p className={cx("content1")}>
                    BNG電子全名《Booongo電子》，以最為專業的技術以及先進的遊戲系統聞名於業界，對於喜歡角子老虎機的朋友們，是一定要嘗試看看的經典品牌。BNG電子提供的遊戲主題相當全面，例如經典遊戲創新、各國歷史神話傳說還有各種原創的故事內容，而畫面風格則是比較喜氣大膽的，歡迎有興趣的朋友們來體驗一番。
                  </p>
                  <p>
                    博天堂娛樂城從多間電子遊戲品牌經過層層的篩選，引進代理BNG電子給各位會員，可以保證BNG電子絕對是數一數二的優質品牌。
                    程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>BNG電子遊戲介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    BNG電子全名《Booongo電子》，以最為專業的技術以及先進的遊戲系統聞名於業界，對於喜歡角子老虎機的朋友們，是一定要嘗試看看的經典品牌。BNG電子提供的遊戲主題相當全面，例如經典遊戲創新、各國歷史神話傳說還有各種原創的故事內容，而畫面風格則是比較喜氣大膽的，歡迎有興趣的朋友們來體驗一番。
                  </p>
                  <p className={cx("content1")}>
                    博天堂娛樂城從多間電子遊戲品牌經過層層的篩選，引進代理BNG電子給各位會員，可以保證BNG電子絕對是數一數二的優質品牌。
                    程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>BNG電子特色</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                  <p className={cx("content1")}>
                    Booongo電子相當注重遊戲的品質，將每個細節都做到最好，精心的打造讓玩家能夠享受最美好的遊戲體驗，為了打造雙贏的局面，自然是要以公平公正且精彩的遊戲內容來回饋給玩家，讓玩家可以持續的支持BNG電子。
                  </p>
                  <p className={cx("content1")}>
                    由BNG電子的專業團隊所研發的遊戲具有以下的特色：良好的操作體驗、精彩豐富的遊戲內容以及公平安全的投注過程，一切皆是為了保證所有的玩家能感受到我們的誠意及專業技術，也就是在BNG電子可以滿足玩家們的一切喜好。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>BNG電子特色</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("right1")}>
                  <p className={cx("content1")}>
                    Booongo電子相當注重遊戲的品質，將每個細節都做到最好，精心的打造讓玩家能夠享受最美好的遊戲體驗，為了打造雙贏的局面，自然是要以公平公正且精彩的遊戲內容來回饋給玩家，讓玩家可以持續的支持BNG電子。
                  </p>
                  <p className={cx("content1")}>
                    由BNG電子的專業團隊所研發的遊戲具有以下的特色：良好的操作體驗、精彩豐富的遊戲內容以及公平安全的投注過程，一切皆是為了保證所有的玩家能感受到我們的誠意及專業技術，也就是在BNG電子可以滿足玩家們的一切喜好。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block3")}>
          <div className={cx("content-block4")}>
            <h4>BNG電子多方合作夥伴</h4>
            <p className={cx("content1")}>
              BNG電子為了最大化的提升遊戲的品質及整體遊戲平台的效能，與多方最頂尖的工作室進行合作，由各方菁英打造出頂尖的遊戲內容，自然是值得各位朋友們嘗試看看且長期遊玩的。BNG電子在老虎機遊戲方面有著多年的經驗及絕對的熱忱，一切的研發及改良皆是站在使用者的角度，更貼近使用者的需求。
            </p>
          </div>
        </div>
        <div className={cx("block4")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>BNG電子遊戲內容</h4>
              <div className={cx("block-left")}>
                <img src={block3} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                    BNG電子將最經典的777及水果盤進行改良，研發出多款不同風格卻融合懷舊體驗的遊戲機台如：超級水果大亨:
                    6軸、錢滾滾水果盤:集鴻運以及經典小瑪莉等，另外也有埃及之魂:
                    集鴻運、悟空傳-集鴻運、阿茲特克王朝這種以歷史或傳說故事為啟發的遊戲主題，設計畫風較為古樸喜氣，一看就讓人覺得是準備好中大獎了呢！
                  </p>
                  <p className={cx("content1")}>
                    BNG電子仍在持續研發出新的遊戲內容，不定時的更新上架提供給玩家們，另外更不定時地舉行各種優惠活動，與各大娛樂城進行合作將超值的優惠帶給各位，時不時的額外彩金也是相當不錯的福利！因此在博天堂娛樂城相當的受歡迎。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>BNG電子遊戲內容</h4>
              <div className={cx("block-left")}>
                <img src={block3} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                    BNG電子將最經典的777及水果盤進行改良，研發出多款不同風格卻融合懷舊體驗的遊戲機台如：超級水果大亨:
                    6軸、錢滾滾水果盤:集鴻運以及經典小瑪莉等，另外也有埃及之魂:
                    集鴻運、悟空傳-集鴻運、阿茲特克王朝這種以歷史或傳說故事為啟發的遊戲主題，設計畫風較為古樸喜氣，一看就讓人覺得是準備好中大獎了呢！
                  </p>
                  <p className={cx("content1")}>
                    BNG電子仍在持續研發出新的遊戲內容，不定時的更新上架提供給玩家們，另外更不定時地舉行各種優惠活動，與各大娛樂城進行合作將超值的優惠帶給各位，時不時的額外彩金也是相當不錯的福利！因此在博天堂娛樂城相當的受歡迎。
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
            {tabBNGList.map((item, i) => (
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
export default BNG;
