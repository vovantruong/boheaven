import React from "react";
import styles from "./Invitefriends.module.scss";
import className from "classnames/bind";
import banner from "../../assets/images/pages/img-navfooter/img-invitefriends/banned-invite.png";

const cx = className.bind(styles);

function Invitefriends() {
  return (
    <div className={cx("wrapper")}>
      <div>
        <img className={cx("img-banner")} src={banner} />
      </div>
      <div className={cx("container")}>
        <div className={cx("inner")}>
          <div className={cx("title-block")}>
            <div>
              <p>0</p>
              <p>邀請註冊(人)</p>
            </div>
            <div>
              <p>0</p>
              <p>獲得邀請彩金(元)</p>
            </div>
            <div>
              <p>0</p>
              <p>邀請成功(人)</p>
            </div>
          </div>
        </div>
        <div className={cx("inner1")}>
          <div className={cx("title-block1")}>
            <div>
              <p className={cx("title")}>邀請連結</p>
            </div>
            <div className={cx("block")}>
              <div>
                <p className={cx("content")}>
                  https://www.918bt.net/0987123654413513513513513205123515314315035120
                </p>
              </div>
              <div>
                <button className={cx("btn-copy")}>複製</button>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("inner2")}>
          <div className={cx("title-block2")}>
            <div>
              <p className={cx("title")}>活動詳情</p>
            </div>
            <p>
              活動詳情凡是在本網站進行遊戲的會員，推薦好友加入並進行存款成功，即可向博天堂娛樂城線上客服申請優惠金500，還不趕快通知好友一起獲得高額彩金!!
              更好康的是，此筆獎金只需1倍流水即可取款，還不呼朋引伴領獎金。
            </p>
            <div className={cx("block1")}>
              <p className={cx("block1-title")}>【優惠申請方式與要求】</p>
              <p className={cx("content")}>點擊申請之後聯繫線上客服領取</p>
              <p className={cx("content")}>1.活動方案</p>
              <p className={cx("content")}>2.會員帳號</p>
              <p className={cx("content")}>3.推薦好友帳號</p>
            </div>
            <div className={cx("block2")}>
              <p className={cx("block1-title")}>【活動條件】</p>
              <p className={cx("content")}>
                1.推薦人與被推薦人都需存款1000以上，且不包含享受首存優惠的金額
              </p>
              <p className={cx("content")}>
                2.每位被推薦人只可推薦一次，且註冊時必須填寫推薦碼
              </p>
              <p className={cx("content")}>
                3.若是推薦人推薦多次，推薦人每次都需要存款1000以上，並且不包含申請其他任何優惠的金額
              </p>
            </div>
            <div className={cx("block3")}>
              <p className={cx("block1-title")}>【優惠規則與條款】</p>
              <p className={cx("content")}>
                1.提供被推薦人帳號、電話、lineID予線上客服進行申請
              </p>
              <p className={cx("content")}>
                2.推薦人(舊會員)以及被推薦人(新會員)都須有存款1000以上之記錄(有領優惠之該筆存款不予計算)
              </p>
              <p className={cx("content")}>
                3.每位相同註冊資料包含IP位置的新會員僅限被推薦一次，且需完成銀行綁定
              </p>
              <p className={cx("content")}>
                4.舊會員可推薦多位好友，推薦優惠金無上限
              </p>
              <p className={cx("content")}>
                5.該優惠進行彩票以及棋牌類型投注將不計算出款流水
              </p>
              <p className={cx("content")}>
                6.若會員有重複註冊帳號惡意套取優惠或其他非正當盈利之行為，將扣除優惠以及所有不當盈利
              </p>
              <p className={cx("content")}>7.出款流水僅需一倍即可</p>
              <p className={cx("content")}>
                8.若同時推薦多位好友，每位都需有存1000以上之紀錄(有領優惠之該筆存款不予計算)
              </p>
              <p className={cx("content")}>9.僅限網站上直營會員享有此優惠</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invitefriends;
