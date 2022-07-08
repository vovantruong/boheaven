import React from "react";
import styles from "./WithDrawal.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const dataRule = [
  {
    id: 1,
    title: "提款規則?",
    description: "一般存款沒有享受任何優惠的情況下，達到1倍流水即可出款。",
  },
  {
    id: 2,
    title: "提款手續費",
    description: "每天一次免費次數，第二次起手續費收取1%",
  },
  {
    id: 3,
    title: "驗證本人帳戶身分",
    description: [
      {
        key: 1,
        paragrap:
          "首次存款後，需要驗證您存款的銀行帳戶資訊，請您提供雙證件(身分證+駕照或健保卡)及存摺，於＂綁定銀行帳戶＂頁面綁定銀行帳戶及上傳照片，或依照客服指示放置物品，並傳送圖片檔案給客服確認。",
      },
      {
        key: 2,
        paragrap:
          "以上流程驗證完成後，才會將您的存款到帳，還請您務必配合操作，謝謝您。",
      },
    ],
  },
];

const WithDrawal = () => {
  return (
    <div className={cx("with-drawal")}>
      {dataRule.map((item, i) => (
        <div key={i} className={cx("rule")}>
          <span className={cx("rule-id")}>{item.id}</span>
          <div className={cx("information")}>
            <p className={cx("title")}>{item.title}</p>
            <span>
              {Array.isArray(item.description) ? (
                item?.description.map((des, id) => (
                  <React.Fragment key={id}>
                    {des?.paragrap} <br />
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
  );
};

export default WithDrawal;
