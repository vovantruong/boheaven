import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TurningPoint.module.scss";
import { dataGamesPrice } from "~/constants/mocks/DataTurningPoint/dataTurningPoint";
import {
  dataTransferIn,
  dataTransferOut,
} from "~/constants/mocks/DataTurningPoint/dataTransfer";
import DropTransfer from "./DropTransfer/DropTransfer";

const cx = classNames.bind(styles);

const TurningPoint = () => {
  const [transferOut, setTransferOut] = useState(dataTransferOut[0]);
  const [transferIn, setTransferIn] = useState({name: "請選擇"});

  return (
    <section className={cx("bg-normal-linear", "turning-point")}>
      <div className={cx("wrapper")}>
        <div className={cx("transaction")}>
          <div className={cx("transfer-in")}>
            <span>轉出</span>
           <DropTransfer
             className={cx('drop-transfer')}
            value={transferOut}
            setValue={setTransferOut}
            options={dataTransferOut}
           />
          </div>
          <div className={cx("transfer-out")}>
            <span>轉入</span>
            <DropTransfer 
              className={cx('drop-transfer')}
              value={transferIn}
              setValue={setTransferIn}
              options={dataTransferIn}
             />
          </div>
          <div className={cx("amount")}>
            <label htmlFor="amt">金額</label>
            <input id="amt" placeholder="請輸入金額" type="number" />
          </div>
        </div>
        <div className={cx("account")}>
          <div className={cx("wallet")}>
            <p className={cx("account__main")}>
              主帳戶: <span>1,500</span>
            </p>
            <p className={cx("account__total-amount")}>
              總額度: <span>3,300</span>
            </p>
          </div>
          <div className={cx("btn-group")}>
            <button className={cx("btn-transfer-back")}>轉回主帳戶</button>
            <button className={cx("btn-sure")}>確定</button>
          </div>
        </div>
        <ul className={cx("list-convertions")}>
          {dataGamesPrice.map((item, i) => (
            <li key={i} className={cx("list-convertions__item")}>
              <button className={cx("b-price")}>
                <h4 className={cx("b-price__name")}>{item.name}</h4>
                <p className={cx("b-price__price")}>${item.price}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default TurningPoint;
