import React from "react";
import styles from "./CasinoArt.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);
const tabBlogSportList = [
  {
    Date: "2022/04/27",
    Subject: "娛樂城 | 娛樂城測評條件大公開！賭場排名怎麼來？",
  },
];

function CasinoArt() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        <div className={cx("title")}>標題</div>
        <div className={cx("time")}>時間</div>
      </div>
      <div className={cx("tableTab")}>
        {tabBlogSportList.map((item, i) => (
          <div className={cx("block1")} key={i}>
            {/* <div className={cx("subject")}>{item.Subject}</div>
              <div className={cx("date")}>{item.Date}</div> */}
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
  );
}

export default CasinoArt;
