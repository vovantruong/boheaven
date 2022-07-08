import React, { useContext, useState } from "react";
import styles from "./AllBet.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import TagTitlePattern from "~/components/TagTitlePattern/TagTitlePattern";
import banner from "../../../assets/images/pages/game-intro/img-Allbet/banner.png";
import icon from "../../../assets/images/pages/game-intro/img-Allbet/Vector.png";
import icon1 from "../../../assets/images/pages/game-intro/img-Allbet/Vector1.png";
import icon2 from "../../../assets/images/pages/game-intro/img-Allbet/Vector2.png";
import block1 from "../../../assets/images/pages/game-intro/img-Allbet/allbet1.png";
import block2 from "../../../assets/images/pages/game-intro/img-Allbet/allbet2.png";
import block3 from "../../../assets/images/pages/game-intro/img-Allbet/allbet3.png";
import block4 from "../../../assets/images/pages/game-intro/img-Allbet/allbet4.png";
import block5 from "../../../assets/images/pages/game-intro/img-Allbet/allbet5.png";
import block6 from "../../../assets/images/pages/game-intro/img-Allbet/allbet6.png";
import block7 from "../../../assets/images/pages/game-intro/img-Allbet/allbet7.png";
import block8 from "../../../assets/images/pages/game-intro/img-Allbet/allbet8.png";
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
const AllBet = () => {
  const [active, setActive] = useState(0);
  const isMobile = useContext(MediaQueryContext);
  // const handleChangeTab = (index) => {
  //   setActive(index);
  // };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        <BannerSlide container={false} data={dataBanner} />
        <div className={cx("content-item")}>
          <div className={cx("title-content")}>
            <h3>Welcome to</h3>
            <h3>Allbet Baccarat</h3>
            <p className={cx("title2")}> 歐博百家樂性感廳新上線 等您來體驗</p>
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
          {!isMobile ? (
            <TagTitleRectangle 
              className={cx("tag-head")}
              titleClassName={cx('tag-name')}
              name="邀請連結" 
             />
          ) : (
            <TagTitlePattern
              className={cx("tag-title-pattern")}
              container={false}
              name="邀請連結"
            />
          )}
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block1} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("rigth1")}>
                <h4>歐博百家樂品牌</h4>
                <p className={cx("content1")}>
                  歐博百家樂( Allbet Baccarat
                  )這款真人百家樂品牌於2014年推出，集結了數十位頗有經驗的博彩專家，以及最高等級的技術團隊，將歐博百家樂系統穩定且高品質。玩家宛如置身澳門賭場的遊戲體驗。歐博更結合了網路便利性的優勢，將經典百家樂玩法加以變化，推出更多豐富且新鮮的百家樂模式，因此在業界中建立了屹立不搖的地位及信譽
                </p>
                <p className={cx("content2")}>
                  歐博百家樂砸了重金打造，以真人視訊的博弈遊戲為主軸，任何遊戲流程皆嚴格按照國際標準，保證玩家們可以獲得公平、公正且公開的投注體驗，並提供多種方式讓玩家進行視訊直播的測試，保證歐博百家樂為現場直播而非預錄影片。
                </p>
              </div>
              <div className={cx("block-btn")}>
                <div>
                  <a> 立即註冊</a>
                </div>
                <div>
                  <a> 免費試玩</a>
                </div>
                {/* {tabAllbet.map((item, index) => (
                  <div className={cx("tab-Allbet__items", index === active ? "active" : "")} key={index}>
                        <div>
                      <a onClick={() => handleChangeTab(index, item.key)}> 立即註冊</a>
                    </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block2")}>
        {!isMobile ? (
            <TagTitleRectangle 
              className={cx("tag-head")}
              titleClassName={cx('tag-name')}
              name="邀請連結" 
             />
          ) : (
            <TagTitlePattern
              className={cx("tag-title-pattern")}
              container={false}
              name="邀請連結"
            />
          )}
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>關於歐博集團</h4>
                </div>
                <div className={cx("icon")}>
                  <img src={icon2} />
                </div>
              </div>
            </div>
            <div className={cx("block-right")}>
              <img src={block2} />
            </div>
          </div>
        </div>
        <div className={cx("block3")}>
        {!isMobile ? (
            <TagTitleRectangle 
              className={cx("tag-head")}
              titleClassName={cx('tag-name')}
              name="邀請連結" 
             />
          ) : (
            <TagTitlePattern
              className={cx("tag-title-pattern")}
              container={false}
              name="邀請連結"
            />
          )}
          <div className={cx("wrapper-block")}>
            <div className={cx("content")}>
              <p>
                歐博真人遊戲廳中分為聚龍廳、快速廳、超級多檯、競咪廳、性感廳以及VIP包桌等等。
              </p>
              <p>
                {" "}
                除了百家樂外，歐博app中還有骰寶、輪盤、龍虎、博丁、牛牛、炸金花、三公以及剪刀石頭布等多種類型的真人娛樂遊戲供玩家選擇，豐富精采的內容也是歐博能夠營運至今仍舊廣受歡迎的主因。
              </p>
            </div>
            <div className={cx("block-content")}>
              <div>
                <h4>聚龍廳</h4>
                <img src={block3} />
                <p>
                  聚龍廳便是集結所有歐博平檯上的遊戲內容，包括百家樂、輪盤、牛牛及骰寶等等所有深受歐博會員們喜愛的遊戲內容，各種遊戲內容皆有一個以上的桌檯供玩家選擇，且有不同的限紅滿足玩家們的不同需求。
                </p>
              </div>
              <div>
                <h4>快速廳／競咪廳</h4>
                <img src={block4} />
                <p>
                  快速廳中集結了所有提供極速模式的遊戲內容，如極速百家樂、極速骰寶及極速龍虎等遊戲模式，讓玩家可以在一個遊戲介面中同時進行投注。競咪廳則在投注過程中加入「瞇牌」玩法的遊戲。
                </p>
              </div>
              <div>
                <h4>性感廳／VIP包桌</h4>
                <img src={block5} />
                <p>
                  性感廳由穿著性感的美女荷官進行發牌。最後的VIP包桌則是讓玩家可以擁有獨家的桌檯，由專屬的荷官來進行發牌服務，可以不受外在干擾來好好享受遊戲。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("block4")}>
        {!isMobile ? (
            <TagTitleRectangle 
              className={cx("tag-head")}
              titleClassName={cx('tag-name')}
              name="邀請連結" 
             />
          ) : (
            <TagTitlePattern
              className={cx("tag-title-pattern")}
              container={false}
              name="邀請連結"
            />
          )}
          <div className={cx("wrapper-block")}>
            <div className={cx("block-left")}>
              <img src={block6} />
            </div>
            <div className={cx("block-right")}>
              <div className={cx("block-title")}>
                <div>
                  <h4 className={cx("title")}>關於歐博集團</h4>
                  <p>
                    歐博百家樂相容各種裝置，行動裝置亦可下載歐博app來進行遊玩，歐博集團將官網設計為響應式，會依據玩家所使用的裝置來自動調整比例、顯示大小，讓玩家可以隨意切換自己喜愛的螢幕方向來進行投注，盡情享受歐博遊戲的樂趣。
                  </p>
                  <p>
                    {" "}
                    歐博app與許多線上賭場都有進行串接，博天堂便是其中的一員，在博天堂娛樂城即可玩到最原汁原味的歐博遊戲，若是不想要下載，也可以選擇線上玩的模式，於博天堂官網登入後開啟即可開玩，不分時間地點相當便利！
                  </p>
                </div>
                <div className={cx("block")}>
                  <div className={cx("block1")}>
                    <div>
                      <img src={block7} />
                    </div>
                    <div className={cx("content")}>
                      <p>桌機、筆電、電視</p>
                      <p>不管使用任何尺寸螢幕，讓您娛樂投注隨心所欲！</p>
                    </div>
                  </div>
                  <div className={cx("block2")}>
                    <div>
                      <img src={block8} />
                    </div>
                    <div className={cx("content")}>
                      <p>各式手機裝置</p>
                      <p>不管使用任何設備，讓您娛樂投注隨心所欲！</p>
                    </div>
                  </div>
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
              <p>«</p>
              <p>‹</p>
              <p>1</p>
              <p>2</p>
              <p>...</p>
              <p>9</p>
              <p>10</p>
              <p>›</p>
              <p>»</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBet;
