import React, { useContext } from "react";
import styles from "./Lottery.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-9K/9K1.png";
import block2 from "../../../assets/images/pages/game-intro/img-9K/9K2.png";
import block3 from "../../../assets/images/pages/game-intro/img-9K/9K3.png";
import block4 from "../../../assets/images/pages/game-intro/img-9K/9K4.png";
import block5 from "../../../assets/images/pages/game-intro/img-9K/9K5.png";
import block6 from "../../../assets/images/pages/game-intro/img-9K/9K6.png";
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
                  <h4>9K彩票品牌介紹</h4>
                  <p className={cx("content1")}>
                    9K彩票有著超過十年以上的經營時間，是一個不斷提出創意思維、更注重品牌經營細節的彩票遊戲公司。9K彩票公司每次的創意構想提出，更拉近與玩家之間的距離，9K彩票一直堅持著產品是要提供給使用者有趣的遊戲體驗，亦知道維護高品質的內容與品質是不容易的事情，9K彩票有完整的技術顧問團隊，來維持品牌的高水準。9K彩票是款玩法多元、賠率高且操作體驗有趣的遊戲。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>9K彩票品牌介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    9K彩票有著超過十年以上的經營時間，是一個不斷提出創意思維、更注重品牌經營細節的彩票遊戲公司。9K彩票公司每次的創意構想提出，更拉近與玩家之間的距離，9K彩票一直堅持著產品是要提供給使用者有趣的遊戲體驗，亦知道維護高品質的內容與品質是不容易的事情，9K彩票有完整的技術顧問團隊，來維持品牌的高水準。9K彩票是款玩法多元、賠率高且操作體驗有趣的遊戲。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          <div className={cx("rigth1")}>
            <h4>9K彩票-北京賽車pk10介紹</h4>
            <p className={cx("content1")}>
              北京賽車pk10是款來自中國北京的政府福利彩票遊戲，以20分鐘為一局的遊戲模式，一日可以開出上百場的彩票，首場於2019年2月中旬正式發布。如今，北京賽車pk10已是全亞洲線上博弈平台知名的遊戲之一，玩家在平台中找到9K彩票，就一定會有北京賽車可供遊戲，是款賠率將近十倍的福利彩票遊戲。
            </p>
          </div>
          <div className={cx("wrapper-block")}>
            <div className={cx("block-content")}>
              <div className={cx("content")}>
                <img src={block2} />
                <h4>北京賽車PK10</h4>
                <p>一局時間20分鐘的北京賽車玩法，是最經典的模式。</p>
              </div>
              <div className={cx("content")}>
                <img src={block3} />
                <h4>PK10極速賽車</h4>
                <p>一局遊戲時間75秒，適合喜歡遊戲時間不長的對象。</p>
              </div>
              <div className={cx("content")}>
                <img src={block4} />
                <h4>PK10高頻賽車</h4>
                <p>一局時間為180秒，是一個非常刺激有趣的北京賽車玩法。</p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block5")}>
          <div className={cx("content-block4")}>
            <h4>北京賽車玩法與規則？</h4>
            <p className={cx("content1")}>
              9K彩票的北京賽車玩法如同上述介紹的共有三種模式可供選擇，事實上無論是玩法或者必須注意的遊戲規則則是相同的，皆以一到十的號碼表示十台虛擬賽車進行比賽的玩法，玩家再根據自己喜歡的下注模式進行遊戲，如猜單雙、龍虎、總和、單雙等等。
            </p>
          </div>
        </div>
        <div className={cx("block3")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <h4>9K彩票幸運飛艇介紹</h4>
                <p className={cx("content1")}>
                  Lucky-Airship是9K彩票此款遊戲的英文原名，中文譯為幸運飛艇，同樣是彩票遊戲中耳熟能想的遊戲。幸運飛艇是來自馬爾他共和國所發行的高頻官方福利彩票遊戲，遊戲彩五分鐘為一期，以十台飛艇進行比賽，幸運飛艇遊戲賠率落低於北京賽車pk10。
                </p>
                <p className={cx("content1")}>
                  想快速上手幸運飛艇遊戲嗎？如果您有北京賽預測玩法的底子，相信也能快速上手幸運飛艇遊戲，兩者在玩法上非常雷同。同樣是出自9k彩票公司的作品，相信您一定也會愛上幸運飛艇的。
                </p>
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <img src={block5} />
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <h4>9K彩票幸運飛艇介紹</h4>
                <img src={block5} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    Lucky-Airship是9K彩票此款遊戲的英文原名，中文譯為幸運飛艇，同樣是彩票遊戲中耳熟能想的遊戲。幸運飛艇是來自馬爾他共和國所發行的高頻官方福利彩票遊戲，遊戲彩五分鐘為一期，以十台飛艇進行比賽，幸運飛艇遊戲賠率落低於北京賽車pk10。
                  </p>
                  <p className={cx("content1")}>
                    想快速上手幸運飛艇遊戲嗎？如果您有北京賽預測玩法的底子，相信也能快速上手幸運飛艇遊戲，兩者在玩法上非常雷同。同樣是出自9k彩票公司的作品，相信您一定也會愛上幸運飛艇的。
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
        {!isMobile ? (
          <div className={cx("block6")}>
            <h4>9K彩票bingo bingo介紹</h4>
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <img src={block6} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    Bingo
                    Bingo是款五分鐘開獎一次的福利彩票遊戲，來自9K彩票公司維護與管理的。9K彩票bingo
                    bingo玩家須從80個號碼裡面進行選號，每期開獎時系統將隨機選出20個中獎號碼，並且根據玩家選擇的號碼以及玩法進行判斷中獎與否的依據。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block6")}>
            <div className={cx("wrapper-block")}>
              <h4>9K彩票bingo bingo介紹</h4>
              <div className={cx("block-left")}>
                <img src={block6} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    Bingo
                    Bingo是款五分鐘開獎一次的福利彩票遊戲，來自9K彩票公司維護與管理的。9K彩票bingo
                    bingo玩家須從80個號碼裡面進行選號，每期開獎時系統將隨機選出20個中獎號碼，並且根據玩家選擇的號碼以及玩法進行判斷中獎與否的依據。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block4")}>
          <h4>bingo bingo玩法</h4>
          <div className={cx("content-block4")}>
            <div>
              <h4>超級獎號</h4>
              <p className={cx("content1")}>
                超級獎號的玩法屬於bingo
                bingo裡頭的進階玩法，玩家需購買一到十星任何一種的玩法，都能享有超級獎號的無法資格。以每期第二十個開獎號碼做為超級獎號的中獎號碼，如選種則依據超級獎號的彩金進行派發。
              </p>
            </div>
            <div>
              <h4>猜單雙</h4>
              <p className={cx("content1")}>
                9K彩票bingo
                bingo的猜單雙屬於附加玩法之一，玩家可就當期的二十個開獎號碼中去抉擇開出的號碼中，單數的數字數量是否大於等於十三個；又或者是雙號的號碼大於還是等於十三個。
              </p>
            </div>
            <div>
              <h4>猜大小</h4>
              <p className={cx("content1")}>
                9K彩票bingo
                bingo的猜大小屬於附加玩法之一，玩家依據當期開獎號碼出來的獎號進行預測，認為小號(1-40號)開出的數目大於或等於十三個，則下注小；如認為大號(41-80號)的數目大於等於十三個，則下注大。
              </p>
            </div>
          </div>
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
