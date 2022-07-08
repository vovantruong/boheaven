import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TurningPoint.module.scss";
import ShowModalSupport from "~/Layout/DefaultLayout/SidebarSupport/ShowModalSupport";

const cx = classNames.bind(styles);

const dataRule = [
  {
    id: 1,
    title: "怎麼轉帳？",
    description: [
      {
        key: 1,
        paragrap:
          "登錄帳號——點擊官網首頁上方會員帳號——我的錢包——點擊轉帳——轉帳頁面 轉帳步驟: ",
      },
      {
        key: 2,
        paragrap: "A. 在轉帳該頁面選擇轉出轉入的錢包",
      },
      {
        key: 3,
        paragrap: "B. 輸入金額，或點擊最大金額 ",
      },
      {
        key: 4,
        paragrap: "C. 點擊立即轉帳",
      },
    ],
  },
  {
    id: 2,
    title: "轉帳到遊戲錢包，金額變少？",
    description: [
      {
        key: 1,
        paragrap:
          " 大部分金額變少或金額變負數是系統二次結算導致的結果，若對該部分有疑問可聯繫線上客服進行詳細諮詢。",
        button: "線上客服",
      },
    ],
  },
  {
    id: 3,
    title: "主錢包，轉遊戲錢包失敗？",
    description: [
      {
        key: 1,
        paragrap:
          " 查看對應遊戲是否處於維護當中，若遊戲處於維護狀態是不可以進行轉帳的。 是否存在頻繁轉帳操作，因轉帳人數較多，單個帳戶若頻繁轉帳會有網路延遲，從而造成資料更新不及時或資料丟失。",
      },
      {
        key: 2,
        paragrap: "聯繫 線上客服 進行諮詢",
        button: "線上客服",
      },
    ],
  },
];

const TurningPoint = () => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <div className={cx("turning-point")}>
        {dataRule.map((item, i) => (
          <div key={i} className={cx("rule")}>
            <span className={cx("rule-id")}>{item.id}</span>
            <div className={cx("information")}>
              <p className={cx("title")}>{item.title}</p>
              <span>
                {Array.isArray(item.description) ? (
                  item?.description.map((des, id) => (
                    <React.Fragment key={id}>
                      {des.button ? (
                        <>
                          {des.paragrap.slice(
                            0,
                            des.paragrap.indexOf(des.button)
                          )}
                          <button
                            onClick={() => setVisible(true)}
                            style={{ color: "#365A97", fontWeight: "600" }}
                          >
                            {des.button}
                          </button>
                          {des.paragrap.slice(
                            des.paragrap.indexOf(des.button) +
                              des.button.length,
                            des.paragrap.length - 1
                          )}
                        </>
                      ) : (
                        des.paragrap
                      )}

                      <br />
                    </React.Fragment>
                  ))
                ) : (
                  <>{item.description}</>
                )}
              </span>
            </div>
          </div>
        ))}
      </div>
      <ShowModalSupport visible={visible} setVisible={setVisible} />
    </>
  );
};

export default TurningPoint;
