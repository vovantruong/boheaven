import React, { useContext } from "react";
import styles from "./BetSport.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import block1 from "../../../assets/images/pages/game-intro/img-Betsport/betsport1.png";
import block2 from "../../../assets/images/pages/game-intro/img-Betsport/betsport2.png";
const cx = className.bind(styles);
const tabBetSportList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];
const BetSport = () => {
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
                  <h4>博天堂體育品牌介紹</h4>
                  <p className={cx("content1")}>
                    博天堂918自從品牌創立以來，不斷堅持著誠信的理念經營著，團隊背後一直有著一群強大的技術工程團隊，以及行銷經驗豐富的同伴們在支撐著。為了提供更高品質的服務，博天堂918一直不惜成本在許多大大小小的事務上，同時也不斷加強旗下品牌的遊戲服務選擇，就像博天堂體育。
                  </p>
                  <p className={cx("content1")}>
                    在日漸成熟的網路運彩市場中，博天堂一直在運彩領域都佔有一席之地。博天堂體育為了玩家們的權益，努力爭取更種最優質球版投注盤口，讓玩家有更多機會可以取得更高的遊戲點數回饋。同時，博天堂體育也有一群專業的體育分析師，不定期進行相關網路運彩資訊的剖析分享。
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className={cx("block")}>
            <div className={cx("wrapper-block")}>
              <h4>博天堂體育品牌介紹</h4>
              <div className={cx("block-left")}>
                <img src={block1} />
              </div>
              <div className={cx("block-right")}>
                <div className={cx("rigth1")}>
                  <p className={cx("content1")}>
                    博天堂918自從品牌創立以來，不斷堅持著誠信的理念經營著，團隊背後一直有著一群強大的技術工程團隊，以及行銷經驗豐富的同伴們在支撐著。為了提供更高品質的服務，博天堂918一直不惜成本在許多大大小小的事務上，同時也不斷加強旗下品牌的遊戲服務選擇，就像博天堂體育。
                  </p>
                  <p className={cx("content1")}>
                    在日漸成熟的網路運彩市場中，博天堂一直在運彩領域都佔有一席之地。博天堂體育為了玩家們的權益，努力爭取更種最優質球版投注盤口，讓玩家有更多機會可以取得更高的遊戲點數回饋。同時，博天堂體育也有一群專業的體育分析師，不定期進行相關網路運彩資訊的剖析分享。
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className={cx("block2")}>
          <div className={cx("content-block2")}>
            <h4>博天堂體育品牌介紹</h4>
            <p className={cx("content1")}>
              博天堂體育乃是博天堂娛樂城旗下的網路運彩主力平台，博天堂團隊長年以來強調著保障玩家任何資料安全以及平台穩定性。博天堂體育有規模龐大的網路資訊安全防護團隊在把關著！從玩家的個人安全隱私到所有會員朋友的個資，以及平台遊戲的投注過程通通嚴格把關。博天堂體育的加密技術採用最新的1024位元的RSA密鑰交換以及448位元blowfish的安全認證機制，更有強大的伺服器防火牆把關著，讓每位運彩愛好者都能放心玩遊戲。
            </p>
          </div>
        </div>
        <div className={cx("block3")}>
          <div className={cx("content-block3")}>
            <h4>博天堂體育支援多元化裝置</h4>
            <p className={cx("content1")}>
              現代能夠上網的裝置越來越多元，無論手機、平板、PC或者筆記型電腦，都具備上網功能，且行動載具更不受時間與地域的限制，只要有網路的地方就能上網。博天堂體育因應這個多元化的時代，系統支援了多裝置的因應的設計。博天堂體育知道不同的玩家所使用的上網工具不盡相同，團隊盡力照顧到不同面向的玩家族群，這是博天堂團隊所堅持的。
            </p>
          </div>
        </div>
        <div className={cx("block4")}>
          {!isMobile ? (
            <div className={cx("wrapper-block")}>
              <div className={cx("block-left")}>
                <div className={cx("left1")}>
                  <h4>博天堂體育受到政府的嚴格管控</h4>
                  <p className={cx("content1")}>
                    博天堂體育是一個合法的網路運彩系統，來自博天堂所設計操刀的運彩平台，整個博天堂品牌是受到菲律賓政府第三方博彩監督機關所管控的，從遊戲服務的系統設計再到整個網站平台安全隱私，皆須符合菲律賓政府的規定。博天堂體育絕對是營運實力最卓越的網路運彩領先平台，提供包含MLB、CPBL、NBA、NPB各大聯盟賽事的投注服務。博天堂體育感謝所有會員朋友們的長期支持，你們的支持與愛護是讓博天堂體育更加茁壯的原動力。
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
            {tabBetSportList.map((item, i) => (
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
export default BetSport;
