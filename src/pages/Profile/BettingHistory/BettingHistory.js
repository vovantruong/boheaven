import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BettingHistory.module.scss";
import DatePickerMulti from "~/components/DatePickerMulti/DatePickerMulti";
import CardDetailBetting from "./CardDetailBetting/CardDetailBetting";

const cx = classNames.bind(styles);
const selectButton = ["今日", "昨日", "本週", "上週"];

const dataTotalBet = [
  {
    name: '真人',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '體育',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '賓果',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '電子',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '真人',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '捕魚',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  },
  {
    name: '捕魚',
    betAmount: '0.0',
    validBet: '0.0',
    winLoss: '0.0'
  }
]

const BettingHistory = () => {
  const [active, setActive] = useState(0);
  const [date, setDate] = useState({
    from: new Date(),
    to: new Date(),
  });

  return (
    <section className={cx("betting-history")}>
      <div className={cx("record-date", "bg-normal-linear")}>
        <h4 className={cx("title")}>投注紀錄日期查詢</h4>
        <div className={cx("box-date")}>
          <DatePickerMulti
            className={cx("date-picker")}
            value={date}
            onChange={setDate}
          />
          <button className={cx("btn-betting", "search")}>查詢</button>
        </div>
        <div className={cx("btn-select")}>
          {selectButton.map((item, i) => (
            <button
              className={cx("btn-betting", { ["active"]: active === i })}
              onClick={() => setActive(i)}
              key={i}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className={cx("total-bet", "bg-normal-linear")}>
        <h4 className={cx("title")}>投注總計</h4>
        <div className={cx("general-info")}>
          <p className={cx("bet-amount")}>
            投注金額: <span>10,000</span>
          </p>
          <p className={cx("valid-bet")}>
            有效投注: <span>10,000</span>
          </p>
          <p className={cx("lost-win")}>
            輸/贏: <span>10,000</span>
          </p>
          <p className={cx("rebate-amoun")}>
            返水金額: <span>10,000</span>
          </p>
        </div>
        <div className={cx('detail-info')}>
            {
              dataTotalBet.map((item, i) => (
                <CardDetailBetting data={item} key={i} className={cx('info-item')}/>
              ))
            }
        </div>
      </div>
    </section>
  );
};
export default BettingHistory;
