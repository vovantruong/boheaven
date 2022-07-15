import React, { useContext } from "react";
import styles from "./DreamTech.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-DT/DT1.png";
import block2 from "../../../assets/images/pages/game-intro/img-DT/DT2.png";
import block3 from "../../../assets/images/pages/game-intro/img-DT/DT3.png";
const cx = className.bind(styles);
const tabLotteryList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const Lottery = () => {
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
                  <h4>DT電子遊戲介紹</h4>
                  <p className={cx("content1")}>
                    DT電子全名為《DREAMTECH電子》，是一間經過多國的安全、公平認證，具有多年經驗的線上博弈遊戲商，遊戲主題相當多樣，帶給各位玩家豐富精緻的遊戲內容。DREAMTECH
                    GAMING嚴格把關所有流程，對於遊戲品質有極力的要求，且保證玩家們可以享有公平公正的遊戲過程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>DT電子遊戲介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    DT電子全名為《DREAMTECH電子》，是一間經過多國的安全、公平認證，具有多年經驗的線上博弈遊戲商，遊戲主題相當多樣，帶給各位玩家豐富精緻的遊戲內容。DREAMTECH
                    GAMING嚴格把關所有流程，對於遊戲品質有極力的要求，且保證玩家們可以享有公平公正的遊戲過程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>DT電子遊戲風格</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                  DT電子全名為《DREAMTECH電子》，是一間經過多國的安全、公平認證，具有多年經驗的線上博弈遊戲商，遊戲主題相當多樣，帶給各位玩家豐富精緻的遊戲內容。DREAMTECH GAMING嚴格把關所有流程，對於遊戲品質有極力的要求，且保證玩家們可以享有公平公正的遊戲過程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>DT電子遊戲風格</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                  DT電子全名為《DREAMTECH電子》，是一間經過多國的安全、公平認證，具有多年經驗的線上博弈遊戲商，遊戲主題相當多樣，帶給各位玩家豐富精緻的遊戲內容。DREAMTECH GAMING嚴格把關所有流程，對於遊戲品質有極力的要求，且保證玩家們可以享有公平公正的遊戲過程，加上高中獎率，令許多老虎機的忠實玩家欲罷不能，也很適合新手朋友們嘗試。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block3")}>
          <div className={cx("content-block4")}>
            <h4>DT電子安全保證</h4>
            <p className={cx("content1")}>
            DT電子的技術不只應用於遊戲的設計及研發上，在安全防護上也做足了功夫，因此玩家不必擔心自己的遊戲過程有任何的風險，除了保障玩家個資及投注紀錄之外，也保證遊戲過程為絕對的公平公正，因此對於網路博弈有顧慮的朋友們大可放心，享受DT電子所提供最全面的保護措施，體驗線上玩老虎機隨時切換機台的便利樂趣。
            </p>
          </div>
        </div>
        <div className={cx("block4")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <h4>DREAMTECH老虎機超高中獎率</h4>
              <div className={cx("block-left")}>
                <img src={block3} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                  DT電子所推出的老虎機遊戲各有不同的連線方式，但值得一提的就是中獎率都相當的高，小獎常常開、大獎雖然比較看運氣，但一但開出來真的都是相當高額的彩金，相當值得各位朋友去挑戰一下。更多精彩內容及高額彩金等您來挖掘哦！            
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>DREAMTECH老虎機超高中獎率 </h4>
              <div className={cx("block-left")}>
                <img src={block3} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("left1")}>
                  <p className={cx("content1")}>
                  DT電子所推出的老虎機遊戲各有不同的連線方式，但值得一提的就是中獎率都相當的高，小獎常常開、大獎雖然比較看運氣，但一但開出來真的都是相當高額的彩金，相當值得各位朋友去挑戰一下。更多精彩內容及高額彩金等您來挖掘哦！
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
            {tabLotteryList.map((item, i) => (
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
export default Lottery;
