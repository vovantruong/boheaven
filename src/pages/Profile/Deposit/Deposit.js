import React, { useState } from "react";
import styles from "./Deposit.module.scss";
import classNames from "classnames/bind";
import BoxInforProfile from "~/components/BoxInfoProfile/BoxInforProfile";
import BankAccountImg from "../../../assets/images/pages/profile/diposit/bank-account.png";
import StoreImg from "../../../assets/images/pages/profile/diposit/convenience-store.png";
import OnlinePayImg from "../../../assets/images/pages/profile/diposit/online-pay.png";
import { BsCheckCircleFill } from "react-icons/bs";
import Dropdown from "~/components/Dropdown/Dropdown";
import IcCurrencyDollar from "../../../assets/images/pages/profile/diposit/ic-currency-dollar.svg";
import IcArrowUpDown from "../../../assets/images/pages/profile/diposit/ic-arrow-up-down.svg";
import ShowModalSupport from "~/Layout/DefaultLayout/SidebarSupport/ShowModalSupport";

const cx = classNames.bind(styles);

const paymentMethod = [
  {
    name: "ATM轉帳",
    image: BankAccountImg,
    method: "bank",
  },
  {
    name: "超商代碼繳款",
    image: StoreImg,
    method: "store",
  },
  {
    name: "信用卡",
    image: OnlinePayImg,
    method: "payonline",
  },
];

const storeOptions = ["全家超商", "全家超商 A", "全家超商 B", "全家超商 C"];
const payOnlineOptions = [
  "信用卡(信用卡渠道)",
  "信用卡(信用卡渠道) A",
  "信用卡(信用卡渠道) B",
  "信用卡(信用卡渠道) C",
];
const bankOptions = ["富邦銀行", "富邦銀行 A", "富邦銀行 B", "富邦銀行 C"];

const Deposit = () => {
  const [active, setActive] = useState(0);
  const [methodPayment, setMethobPayment] = useState("bank");
  const [store, setStore] = useState(storeOptions[0]);
  const [payOnline, setPayOnline] = useState(payOnlineOptions[0]);
  const [bank, setBank] = useState(bankOptions[0]);
  const [amountDeposit, setAmoutDeposit] = useState("");
  const [onShowPopup, setOnShowPopup] = useState(false);

  const onClickChangeMethod = (index, method) => {
    setActive(index);
    setMethobPayment(method);
  };

  return (
    <>
      <section className={cx("deposit")}>
        <BoxInforProfile className={cx("box-group")} titleHead="請選擇付款方式">
          <div className={cx("payment-method")}>
            {paymentMethod.map((method, i) => (
              <button
                onClick={() => onClickChangeMethod(i, method.method)}
                key={i}
                className={cx("btn-change", { ["active"]: active === i })}
              >
                {active === i && (
                  <span className={cx("ic-active-check")}>
                    <BsCheckCircleFill />
                  </span>
                )}
                <div className={cx("image-method")}>
                  <img src={method.image} alt="..." />
                </div>
                <span>{method.name}</span>
              </button>
            ))}
          </div>
        </BoxInforProfile>
        <BoxInforProfile
          className={cx("box-group")}
          bodyClassName={cx("method-payment")}
          titleHead="付款通道"
        >
          {methodPayment === "bank" ? (
            <div className={cx("atm-transfer")}>
              <Dropdown
                className={cx("drop-option")}
                value={bank}
                setValue={setBank}
                options={bankOptions}
              />
              <span className={cx("notes")}>
                請使用綁訂得帳戶轉帳，轉帳金額務必與訂單金額一致
              </span>
            </div>
          ) : methodPayment === "payonline" ? (
            <div className={cx("code-payment")}>
              <Dropdown
                className={cx("drop-option")}
                value={payOnline}
                setValue={setPayOnline}
                options={payOnlineOptions}
              />
              <span className={cx("notes")}>請保留繳費單，以供審核使用</span>
            </div>
          ) : (
            <div className={cx("credit-card")}>
              <Dropdown
                className={cx("drop-option")}
                value={store}
                setValue={setStore}
                options={storeOptions}
              />
              <span className={cx("notes")}>
                存款請使用本人銀行操作，若非本人而影響出款權益須自行承擔
              </span>
            </div>
          )}
        </BoxInforProfile>
        <BoxInforProfile
          className={cx("box-group", "deposit-amount")}
          titleHead="存款金額"
        >
          <div className={cx("input-deposit")}>
            <span className={cx("ic-dollar")}>
              <img src={IcCurrencyDollar} alt="..." />
            </span>
            <input
              value={amountDeposit}
              onChange={(e) => setAmoutDeposit(e.target.value)}
              placeholder="單筆存款金額 500-50000"
              type="number"
              min={500}
              max={50000}
            />
            <span className={cx("ic-change")}>
              <img src={IcArrowUpDown} alt="..." />
            </span>
          </div>
          <span className={cx("notes")}>
            刷卡需收10%手續費，最低儲值金額1,000
          </span>
          <br />
          <button className={cx("deposit-now")}>立即存款</button>
          <div className={cx("customer-service")}>
            <span>如需幫助，請</span>
            <button onClick={() => setOnShowPopup(true)}>聯繫客服</button>
          </div>
        </BoxInforProfile>
      </section>
      <ShowModalSupport visible={onShowPopup} setVisible={setOnShowPopup} />
    </>
  );
};

export default Deposit;
