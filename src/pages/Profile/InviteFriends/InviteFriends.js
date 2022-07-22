import React, { useContext } from "react";
import styles from "./InviteFriends.module.scss";
import className from "classnames/bind";
import banner from "../../../assets/images/pages/img-navfooter/img-invitefriends/banned-invite.png";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import TagTitleRectangle from "~/components/TagTitleRectangle/TagTitleRectangle";
import { MediaQueryContext } from "~/Context/MainContext";
import TagTitlePattern from "~/components/TagTitlePattern/TagTitlePattern";

const cx = className.bind(styles);

const dataBanner = [
  {
    image: banner,
    link: "#",
  },
];

const dataInvated = [
  {
    name: "邀請註冊(人)",
    number: 0,
  },
  {
    name: "獲得邀請彩金(元)",
    number: 0,
  },
  {
    name: "邀請成功(人)",
    number: 0,
  },
];

const dataActivity = [
  {
    name: "【優惠申請方式與要求】",
    description: "點擊申請之後聯繫線上客服領取",
    policy: [
      {
        id: 1,
        name: "活動方案",
      },
      {
        id: 2,
        name: "會員帳號",
      },
      {
        id: 3,
        name: "推薦好友帳號",
      },
    ],
  },
  {
    name: "【活動條件】",
    description: "",
    policy: [
      {
        id: 1,
        name: "推薦人與被推薦人都需存款1000以上，且不包含享受首存優惠的金額",
      },
      {
        id: 2,
        name: "每位被推薦人只可推薦一次，且註冊時必須填寫推薦碼",
      },
      {
        id: 3,
        name: "若是推薦人推薦多次，推薦人每次都需要存款1000以上，並且不包含申請其他任何優惠的金額",
      },
    ],
  },
  {
    name: "【優惠規則與條款】",
    description: "",
    policy: [
      {
        id: 1,
        name: "提供被推薦人帳號、電話、lineID予線上客服進行申請",
      },
      {
        id: 2,
        name: "推薦人(舊會員)以及被推薦人(新會員)都須有存款1000以上之記錄(有領優惠之該筆存款不予計算)",
      },
      {
        id: 3,
        name: "每位相同註冊資料包含IP位置的新會員僅限被推薦一次，且需完成銀行綁定",
      },
      {
        id: 4,
        name: "舊會員可推薦多位好友，推薦優惠金無上限",
      },
      {
        id: 5,
        name: "該優惠進行彩票以及棋牌類型投注將不計算出款流水",
      },
      {
        id: 6,
        name: "若會員有重複註冊帳號惡意套取優惠或其他非正當盈利之行為，將扣除優惠以及所有不當盈利",
      },
      {
        id: 7,
        name: "出款流水僅需一倍即可",
      },
      {
        id: 8,
        name: "若同時推薦多位好友，每位都需有存1000以上之紀錄(有領優惠之該筆存款不予計算)",
      },
      {
        id: 9,
        name: "僅限網站上直營會員享有此優惠",
      },
    ],
  },
];

const linkCopy =
  "https://www.918bt.net/0987123654413513513513513205123515314315035120";

function InviteFriends() {
  const isMobile = useContext(MediaQueryContext);

  return (
    <section className={cx("invite-friends")}>
      <BannerSlide container={false} loop={false} data={dataBanner} />
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("invation")}>
            {dataInvated.map((item, i) => (
              <div key={i} className={cx("info")}>
                <h4>{item.number}</h4>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
          <div className={cx("copy-link")}>
            {!isMobile ? (
              <TagTitleRectangle className={cx("tag-head")} name="邀請連結" />
            ) : (
              <TagTitlePattern
                className={cx("tag-title-pattern")}
                container={false}
                name="邀請連結"
              />
            )}
            <div className={cx("link")}>
              <p>{linkCopy}</p>
              <button
                onClick={() => navigator.clipboard.writeText(linkCopy)}
                className={cx("action-copy")}
              >
                複製
              </button>
            </div>
          </div>
          <div className={cx("activity-details")}>
            {!isMobile ? (
              <TagTitleRectangle className={cx("tag-head")} name="活動詳情" />
            ) : (
              <h4 className={cx('title-head')}>活動詳情</h4>
            )}
            <div className={cx("content")}>
              <p className={cx("head")}>
                凡是在本網站進行遊戲的會員，推薦好友加入並進行存款成功，即可向博天堂娛樂城線上客服申請優惠金500，還不趕快通知好友一起獲得高額彩金!!
                更好康的是，此筆獎金只需1倍流水即可取款，還不呼朋引伴領獎金。
              </p>
              {dataActivity.map((item, i) => (
                <div key={i} className={cx("box-rules")}>
                  <h4 className={cx("title")}>{item.name}</h4>
                  {item.description && (
                    <p className={cx("desciption")}>{item.description}</p>
                  )}
                  <ul className={cx("list-rules")}>
                    {item.policy.map((rules, index) => (
                      <li className={cx("rules-item")} key={index}>
                        {`${rules.id}. ${rules.name}`}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InviteFriends;
