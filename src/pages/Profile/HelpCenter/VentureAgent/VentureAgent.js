import React from "react";
import classNames from "classnames/bind";
import styles from "./VentureAgent.module.scss";
import TableRebate from "./TableRebate/TableRebate";

const cx = classNames.bind(styles);

const dataRule = [
  {
    id: 1,
    title: "統計周期為自然月的00:00:00-23:59:59。",
    description: "",
  },
  {
    id: 2,
    title:
      "退傭計算為下線的會員總負盈利值，若當月會員總輸贏值為正，將累計到下個月並扣除上月的正盈利值，直到總輸贏值為負且符合有效會員人數，即可啟動退傭模式。 舉例:",
    description:
      "A代理下線3月總輸贏值為-150000，優惠領取2000，洗碼2000，計算退傭方式為150000*0.25-2000-2000，故實得傭金為33500B代理下線3月總輸贏值為+300000，優惠領取5000，洗碼2000，4月總輸贏值為-500000，優惠領取5000，洗碼2000，計算退傭方式為500000-300000=200000(對應退傭比例為25%)，故200000*0.25-3月優惠7000-4月優惠7000=50000-7000-7000=36000為實得傭金。",
  },
  {
    id: 3,
    title: "有效會員人數定義為當月有效投注額滿5萬，為一個有效會員人數。",
    description: "",
  },
  {
    id: 4,
    title:
      "同IP、電話、銀行卡進行多帳號投注或是註冊不同帳號，會視為1個有效會員。",
    description: "",
  },
];

const VentureAgent = () => {
  return (
    <div className={cx("venture-agent")}>
      <TableRebate />
      <div className={cx("unlimited-bonus")}>
        <h4 className={cx("title-bonus")}>獎金無上限</h4>
        <p className={cx('other-des')}>若是想洽談其他的方式進行代理請聯繫客服</p>
        <div className={cx("content")}>
          {dataRule.map((item, i) => (
            <div key={i} className={cx("rule")}>
              <span className={cx("rule-id")}>{item.id}</span>
              <div className={cx("information")}>
                <p className={cx("title")}>{item.title}</p>
                {item.description && (
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
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VentureAgent;
