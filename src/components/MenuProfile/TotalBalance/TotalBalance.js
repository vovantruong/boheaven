import React from "react";
import classNames from "classnames/bind";
import styles from "./TotalBalance.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { BsChevronDown } from "react-icons/bs";

const cx = classNames.bind(styles);

const dataGameBalance = [
  {
    name: 'DG真人',
    balance: '0',
  },
  {
    name: '歐博真人',
    balance: '0',
  },
  {
    name: 'SA真人',
    balance: '0',
  },
  {
    name: 'WM真人',
    balance: '0',
  },
  {
    name: 'OB真人',
    balance: '0',
  },
  {
    name: 'OG真人',
    balance: '0',
  },
  {
    name: 'SUPER體育',
    balance: '0',
  },
  {
    name: 'OB體育',
    balance: '0',
  },
]

const TotalBalance = ({ classNames, totalBalance, visible, setVisible }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cx("balance", classNames, {['active']: visible})}>
        <div className={cx("total-balance")} onClick={() => setVisible(!visible)}>
          <span>${totalBalance ? totalBalance : "0.00"}</span>
          <BsChevronDown className={cx("icon")} />
        </div>
        <div className={cx("balance-details")}>
            <div className={cx('table-info')}>
Hello
            </div>
            <div className={cx('total')}>
                <div className={cx('amount')}>總額度: {totalBalance}</div>
                <button>一鍵轉回</button>
            </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};
export default TotalBalance;
