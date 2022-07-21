import React from "react";
import classNames from "classnames/bind";
import styles from "./AddCreditCard.module.scss";
import { useNavigate } from "react-router-dom";
import {BsChevronLeft} from 'react-icons/bs'

const cx = classNames.bind(styles);

const AddCreditCard = () => {
  const navigate = useNavigate();
  return (
    <div className={cx("credit-card", "bg-normal-linear")}>
      <div className={cx("go-back")} onClick={() => navigate(-1)}>
        <BsChevronLeft />
        <span>新增銀行帳戶</span>
      </div>
    </div>
  );
};
export default AddCreditCard;
