import React, { useContext } from "react";
import styles from "./SuperG.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-SuperG/superg1.png";
import block2 from "../../../assets/images/pages/game-intro/img-SuperG/superg2.png";
import block3 from "../../../assets/images/pages/game-intro/img-SuperG/superg3.png";
const cx = className.bind(styles);
const tabSuperGList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const SuperG = () => {
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
                  <h4>super六合彩</h4>
                  <p className={cx("content1")}>
                    六合彩為香港的官方彩票，而SUPER六合彩除了香港六合彩外，更有提供台灣的今彩539、大樂透、威力彩以及美國的天天樂等各國的彩票遊戲，且系統開獎皆同步官方平台，開獎彩金立即到帳，帶給玩家最無與倫比的博彩體驗。
                  </p>
                  <p className={cx("content1")}>
                    接下來就來介紹給各位，博天堂娛樂城所代理的SUPER六合彩有哪些詳細的精采內容！是喜愛彩票投注的朋友們絕對不能錯過的呢！
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>super六合彩</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    六合彩為香港的官方彩票，而SUPER六合彩除了香港六合彩外，更有提供台灣的今彩539、大樂透、威力彩以及美國的天天樂等各國的彩票遊戲，且系統開獎皆同步官方平台，開獎彩金立即到帳，帶給玩家最無與倫比的博彩體驗。
                  </p>
                  <p className={cx("content1")}>
                    接下來就來介紹給各位，博天堂娛樂城所代理的SUPER六合彩有哪些詳細的精采內容！是喜愛彩票投注的朋友們絕對不能錯過的呢！
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <div className={cx("content-block2")}>
                  <h4>SUPER六合彩遊戲介紹</h4>
                  <p className={cx("content1")}>
                    六合彩：每次由01~49個號碼中抽出一組6個的號碼做為開獎結果，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    大樂透：每次由01~49個號碼中抽出一組6個的號碼做為開獎結果，並額外開出一個號碼做為特別號，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    今彩539：每次由01~39個號碼中抽出一組5個的號碼做為開獎結果，根據結果來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    賓果賓果(BINGO
                    BINGO)：每次由01~80個號碼中抽出一組6個的號碼做為開獎結果，每5分鐘開獎一次，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    時時彩：由中國福利彩票所發行，每10分鐘開獎一次。
                  </p>
                </div>
              </div>
              <div className={cx("block-right")}>
                <img src={block2} />
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <h4>SUPER六合彩遊戲介紹</h4>
              <div className={cx("block-left")}>
                <img src={block2} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("content-block2")}>
                  <p className={cx("content1")}>
                    六合彩：每次由01~49個號碼中抽出一組6個的號碼做為開獎結果，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    大樂透：每次由01~49個號碼中抽出一組6個的號碼做為開獎結果，並額外開出一個號碼做為特別號，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    今彩539：每次由01~39個號碼中抽出一組5個的號碼做為開獎結果，根據結果來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    賓果賓果(BINGO
                    BINGO)：每次由01~80個號碼中抽出一組6個的號碼做為開獎結果，每5分鐘開獎一次，根據結果及玩家投注的玩法來進行獎金的分配。
                  </p>
                  <p className={cx("content1")}>
                    時時彩：由中國福利彩票所發行，每10分鐘開獎一次。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className={cx("block3")}>
          <h4>super六合彩</h4>
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block3} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <p className={cx("content1")}>
                  六合彩及539都有特別的地下玩法可以選擇，這些投注方式看似複雜，但其實只需要稍加研究就很好理解。
                </p>
                <p className={cx("content1")}>
                  單碰-二星單碰、三星單碰、四星單碰 <br />
                  單投一組號碼、分別投注兩個、三個、四個號碼
                </p>
                <p className={cx("content1")}>
                  連碰-二星連碰、三星連碰、四星連碰 <br />
                  投注由數個號碼構成的多種組合
                </p>
                <p className={cx("content1")}>
                  柱碰-二星柱碰、三星柱碰、四星柱碰 <br />
                  選擇數柱的號碼並進行搭配，投注所有出現的組合
                </p>
                <p className={cx("content1")}>
                  全車、半車
                  <br />
                  指定一個號碼進行投注，若要投全車輸入1，半車則輸入0.5
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block4")}>
          <div className={cx("content-block4")}>
            <h4>為何要選擇娛樂城投注六合彩？</h4>
            <p className={cx("content1")}>
              不是有官方的管道可以進行投注嗎？為何投注這些種類的彩票會更建議在娛樂城投注呢？主要是地下六合彩的賠率更高，且玩法更為多樣，相較於官方管道，對玩家而言是更為有利的，一方面更多樣的玩法代表著更高的中獎率，在這樣的分析之後，聰明的小夥伴們都知道該如何選擇吧！想要以更合算的方式投注六合彩、539就快來博天堂娛樂城的SUPER六合彩吧！
            </p>
          </div>
        </div>
        <div className={cx("wrapper-block")}>
          <div className={cx("fiel")}>
            <div className={cx("title")}>標題</div>
            <div className={cx("time")}>時間</div>
          </div>
          <div className={cx(!isMobile ? "tableTab" : "tableTabMobile")}>
            {tabSuperGList.map((item, i) => (
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
export default SuperG;
