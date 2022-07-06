import React, { useState } from "react";
import styles from "./PopupFastTransfer.module.scss";
import classNames from "classnames/bind";
import InputText from "~/components/InputText/InputText";
import { AiFillCaretRight } from "react-icons/ai";

const cx = classNames.bind(styles);

const fixedAmount = [100, 500, 1000, 5000];

const PopupFastTransfer = ({ data }) => {
  const [amount, setAmount] = useState("");
  return (
    <div className={cx("transfer")}>
      <div className={cx("convert-wallet")}>
        <div className={cx("main-wallet")}>
          <span className={cx('text')}>主錢包</span>
          <span className={cx('currency')}>$0.00</span>
          <button className={cx('recycling')}>一鍵回收</button>
        </div>
        <div className={cx("icon")}>
          <div />
          <div />
        </div>
        <div className={cx("game-wallet")}>
        <span className={cx('text')}>{data?.name}</span>
          <span className={cx('currency')}>$0.00</span>
        </div>
      </div>
      <div className={cx("activity")}>
        <InputText
          className={cx("input-amount")}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="請輸入轉帳金額"
        >
          <button className={cx("btn-all")}>全部</button>
        </InputText>
        <div className={cx("fixed-amount")}>
          {fixedAmount.map((item, i) => (
            <button
              onClick={() => setAmount(item)}
              className={cx("fixed-item")}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
        <div className={cx("action")}>
          <button className={cx("transfer-now")}>立即轉帳</button>
          <button className={cx("join-game")}>進入遊戲</button>
        </div>
      </div>
    </div>
  );
};

export default PopupFastTransfer;
