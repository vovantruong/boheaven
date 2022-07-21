import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TransactionRecord.module.scss";
import SelectOption from "~/components/SelectOption/SelectOption";
import DatePicker from "~/components/DatePicker/DatePicker";

const cx = classNames.bind(styles);

const options = [
  { value: "存款", label: "存款" },
  { value: "提款", label: "提款" },
  { value: "轉點", label: "轉點" },
];

const TransactionRecord = () => {
  const [method, setMethod] = useState();
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <div className={cx("transction-record")}>
      <div className={cx("wrapper", "bg-normal-linear")}>
        <h4 className={cx("title")}>交易紀錄查詢</h4>
        <div className={cx("record")}>
          <div className={cx("record__group")}>
            <SelectOption
              className={cx("method")}
              value={method}
              options={options}
              placeholder="存款"
              onChange={(value) => setMethod(value)}
            />
            <DatePicker value={date} onChange={setDate} />
          </div>
          <div className={cx("record__btn")}>
            <button>查詢</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TransactionRecord;
