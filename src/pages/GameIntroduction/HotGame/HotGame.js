import React, { useContext } from "react";
import styles from "./HotGame.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-Hotgame/hotgame1.png";
import block2 from "../../../assets/images/pages/game-intro/img-Hotgame/hotgame2.png";
const cx = className.bind(styles);
const tabHotGameList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const HotGame = () => {
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
                  <h4>必贏電子遊戲介紹</h4>
                  <p className={cx("content1")}>
                    必贏電子為一間將市場目標訂在亞洲區域的電子遊戲商，目前也漸漸的朝向國際發展，展望成為國際數一數二的遊戲公司。必贏電子包辦開發及設計，研發出不少的新型遊戲，必贏電子本身的技術及設計團隊就是頂尖的陣容，又與各國的頂尖團隊進行合作，因此有著非常豐富的遊戲創意及發展空間，打造出的遊戲獨具特色，更有精緻華麗的遊戲效果，因此招攬了不少的忠實客戶。
                  </p>
                  <p>
                    在必贏電子的遊戲平台也做好了一切的風險管控，打擊任何第三方程式，讓有心人士無法透過任何手段來影響遊戲的公平性，保障所有玩家的權益，因此可以放心遊玩。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>必贏電子遊戲介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    必贏電子為一間將市場目標訂在亞洲區域的電子遊戲商，目前也漸漸的朝向國際發展，展望成為國際數一數二的遊戲公司。必贏電子包辦開發及設計，研發出不少的新型遊戲，必贏電子本身的技術及設計團隊就是頂尖的陣容，又與各國的頂尖團隊進行合作，因此有著非常豐富的遊戲創意及發展空間，打造出的遊戲獨具特色，更有精緻華麗的遊戲效果，因此招攬了不少的忠實客戶。
                  </p>
                  <p>
                    在必贏電子的遊戲平台也做好了一切的風險管控，打擊任何第三方程式，讓有心人士無法透過任何手段來影響遊戲的公平性，保障所有玩家的權益，因此可以放心遊玩。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block2")}>
          <div className={cx("content-block2")}>
            <h4>必贏電子前景未來</h4>
            <p className={cx("content1")}>
              必贏電子在研發新的老虎機遊戲內容的同時，也套入更多現代高科技的部分，將遊戲整體設計展現得更有未來感，透過無與倫比的技術集結各方創意，不斷突破自己的極限，挑戰新穎的題材，也是因為這樣的發展方向，讓這樣一間公司廣為被玩家們所知，在競爭激烈的電子遊戲市場中成功的殺出一條血路，這自然是綜合了實力及運氣所得到的結果。
            </p>
            <p className={cx("content1")}>
              當然這也跟必贏電子的經營方針有關，必贏電子給予員工足夠的發想空間，支持員工進行高度自由的設計，也才能夠研發出我們現在喜愛的豐富遊戲內容。
            </p>
          </div>
        </div>
        <div className={cx("block3")}>
          <div className={cx("content-block3")}>
            <h4>必贏電子後台支持</h4>
            <p className={cx("content1")}>
              說到必贏電子不得不提的當然還有其強勁的後台技術，將整體系統的穩定度提到最高，最大限度地減少各種Bug、白屏問題，類似的技術問題在必贏電子都是沒發生過的，完全的屏除這些會影響玩家遊戲體驗及心情的狀況。
            </p>
            <p className={cx("content1")}>
              必贏電子的安全防護系統也是值得一提的，絕對的保證玩家們個人資料的安全，因此玩家們絕對可以放心的進行投注，不必擔心個人資訊可能會被外洩而受到騷擾或影響，當然這樣都是需要強大的工程團隊來實行的，可見必贏電子實力之強勁。
            </p>
          </div>
        </div>
        <div className={cx("block4")}>
          <h4>必贏電子老虎機首選</h4>
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block2} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <p className={cx("content1")}>
                如今真的有相當多的電子遊戲商可以選擇，五花八門的老虎機也是令人眼花撩亂，這麼激烈的競爭之下選擇必贏電子就對了！值得一提的是，除了老虎機遊戲，必贏電子也有研發幾款捕魚機類型的遊戲供玩家選擇，真的相當充實豐富呢！玩家最在乎的安全性、公平性以及娛樂性必贏電子通通一手包辦，是相當全面的遊戲平台，可以放心地進行投注，博天堂娛樂城絕對的推薦給各位！
                </p>
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
            {tabHotGameList.map((item, i) => (
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
export default HotGame;
