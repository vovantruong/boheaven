import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TransactionRecord.module.scss";
import SelectOption from "~/components/SelectOption/SelectOption";
import DatePickerMulti from "~/components/DatePickerMulti/DatePickerMulti";
import TableCustom from "~/components/TableCustom/TableCustom";
import {
  dataWithdrawal,
  dataDeposit,
  dataTransfer,
} from "~/constants/mocks/DataTransactionRecord/dataTransaction";

const cx = classNames.bind(styles);

const options = [
  { value: "提款", label: "提款" },
  { value: "存款", label: "存款" },
  { value: "轉帳", label: "轉帳" },
];

const selectButton = ["今日", "昨日", "本週", "上週"];

const columnWithDrawal = ["日期", "訂單編號", "繳費密碼", "金額", "狀態"];
const columnDeposit = ["日期", "訂單編號", "繳費密碼", "金額", "狀態"];
const columnTransfer = ["日期", "訂單編號", "轉出帳戶", "轉入帳戶", "金額"];

const TransactionRecord = () => {
  const [active, setActive] = useState(0);
  const [method, setMethod] = useState(options[0]);
  const [dataColumn, setDataColumn] = useState(columnWithDrawal)
  const [dataTable, setDataTable] = useState(dataWithdrawal)
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  const handleChangeMethod = (item) => {
    setMethod(item)
    if(item.value === '提款'){
      setDataColumn(columnWithDrawal)
      setDataTable(dataWithdrawal)
    }else if (item.value === '存款'){
      setDataColumn(columnDeposit)
      setDataTable(dataDeposit)
    }else{
      setDataColumn(columnTransfer)
      setDataTable(dataTransfer)
    }
  }

  return (
    <section className={cx("transaction-record")}>
      <div className={cx("enquiry", "bg-normal-linear")}>
        <h4 className={cx("title")}>交易紀錄查詢</h4>
        <div className={cx("record")}>
          <div className={cx("record__group")}>
            <SelectOption
              className={cx("method")}
              value={method}
              options={options}
              placeholder="存请选择方法款"
              onChange={handleChangeMethod}
            />
            <DatePickerMulti value={date} onChange={setDate} />
            <div className={cx("record__btn-select")}>
              {selectButton.map((item, i) => (
                <button
                  className={cx({ ["active"]: active === i })}
                  onClick={() => setActive(i)}
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className={cx("record__btn")}>
            <button>查詢</button>
          </div>
        </div>
      </div>
      <div className={cx("info-transaction", "bg-normal-linear")}>
        <TableCustom
          background={false}
          columns={dataColumn}
          dataSource={dataTable}
          panigation
        />
      </div>
    </section>
  );
};
export default TransactionRecord;
