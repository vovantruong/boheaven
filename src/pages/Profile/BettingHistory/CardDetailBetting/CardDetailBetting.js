import React from "react";
import classNames from "classnames/bind";
import styles from "./CardDetailBetting.module.scss";
import { BsChevronRight } from "react-icons/bs";

const cx = classNames.bind(styles);

const CardDetailBetting = ({ className, data }) => {
  return (
    <div className={cx("card", className)}>
      <div className={cx("wrapper")}>
        <div className={cx("card__head")}>
          <p className={cx("name")}>{data?.name}</p>
          <BsChevronRight />
        </div>
        <div className={cx("card__body")}>
          <div className={cx("group-bet")}>
            <p className={cx("bet-amount")}>
              投注金額 <span>{data?.betAmount}</span>
            </p>
            <p className={cx("valid-bet")}>
              有效投注 <span>{data?.betAmount}</span>
            </p>
          </div>
          <p className={cx("loss-win")}>
            輸/贏 <span>{data?.betAmount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CardDetailBetting;
