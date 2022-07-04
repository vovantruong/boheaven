import React from "react";
import styles from "./Bacarat.module.scss";
import className from "classnames/bind";

const cx = className.bind(styles);
const tabBacarattList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];

function CasinoArt() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        {/* <div className={cx("title")}>標題</div>
          <div className={cx("time")}>時間</div> */}
        <table>
          <tr>
            <th className={cx("title")}>標題</th>
            <th className={cx("time")}>時間</th>
          </tr>
        </table>
      </div>
      <div className={cx("tableTab")}>
        {tabBacarattList.map((item, i) => (
          <div className={cx("block")} key={i}>
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
