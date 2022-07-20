import React from "react";
import classNames from "classnames/bind";
import styles from "./InquiryCompliance.module.scss";
import TableCustom from "~/components/TableCustom/TableCustom";
import { dataInquiry } from "~/constants/mocks/DataInquiryCompliance/dataInquiry";

const cx = classNames.bind(styles);

const column = ["類型", "金額", "流水", "時間", "交易編號"];

const InquiryCompliance = () => {
  return (
    <div className={cx("inuiry")}>
      <div className={cx("bg-normal-linear", "wrapper")}>
        <h4 className={cx("title")}>優惠達標查詢</h4>
        <p className={cx("turnover")}>未完成流水:2,000.00</p>
        <div className={cx("table-detail")}>
          <TableCustom
            background={false}
            bodyClassName={cx("tbody")}
            headClassName={cx("thead")}
            columns={column}
            dataSource={dataInquiry}
          />
        </div>
      </div>
    </div>
  );
};
export default InquiryCompliance;
