import React, { useContext } from "react";
import styles from "./Bacarat.module.scss";
import className from "classnames/bind";
import { MediaQueryContext } from "~/Context/MainContext";
const cx = className.bind(styles);
const tabBacarattList = [
  {
    Date: "2022/04/27",
    Subject: "百家樂 | 北京暴雨！地鐵成「水簾洞」河水毀民宅 3男抱樹求生",
  },
];

function Bacarat() {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("fiel")}>
        <div className={cx("title")}>標題</div>
        <div className={cx("time")}>時間</div>
      </div>
      <div className={cx(!isMobile ? "tableTab" : "tableTabMobile")}>
        {tabBacarattList.map((item, i) => (
          <div className={cx("block")} key={i}>
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

export default Bacarat;
