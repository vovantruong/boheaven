import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Withdrawal.module.scss";
import { AiOutlinePlus } from "react-icons/ai";
import IcCurrencyDollar from "../../../assets/images/pages/profile/diposit/ic-currency-dollar.svg";
import IcChecked from '../../../assets/images/global/components/ic-fill-checked.svg'
import ShowModalSupport from "~/Layout/DefaultLayout/SidebarSupport/ShowModalSupport";

const cx = classNames.bind(styles);

const Withdrawal = ({ className }) => {
  const [amount, setAmout] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <>
    <div className={cx("withdrawal", className)}>
      <div className={cx("bg-normal-linear", "bank-account")}>
        <h4 className={cx("bank-account__title")}>銀行帳戶</h4>
        <div className={cx("bank-account__name")}>
          <p>台北富邦****9768</p>
          <img src={IcChecked} alt="..."/>
        </div>
        <div className={cx("bank-account__add-bank")}>
          <button>
            <AiOutlinePlus />
          </button>
          <span>新增銀行帳戶</span>
        </div>
        <div className={cx("bank-account__withdrawal-amount")}>
          <img className={cx("ic-dollar")} src={IcCurrencyDollar} alt="..." />
          <input
            value={amount}
            onChange={(e) => setAmout(e.target.value)}
            placeholder="請輸入提款金額"
            type="number"
          />
          <button className={cx("all")}>全部</button>
        </div>
        <p className={cx("bank-account__notes")}>
          你尚有未完成流水1000.00，無法進行提款
        </p>
        <span className={cx("bank-account__condition")}>
          每天一次免費次數，第二次起手續費收取1%
        </span>
        <button className={cx("bank-account__btn-withdrawal")}>立即提款</button>
        <span className={cx("customer-serivce")}>
          如需幫助，請<button onClick={() => setVisible(true)}>聯繫客服</button>
        </span>
      </div>
    </div>
    <ShowModalSupport visible={visible} setVisible={setVisible} />
    </>
  );
};
export default Withdrawal;
