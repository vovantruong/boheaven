import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./AccountManager.module.scss";
import ImgBank from "../../../assets/images/pages/profile/accountManager/bank-account.png";
import ImgCreditCard from "../../../assets/images/pages/profile/accountManager/credit-card.png";
import { BsPlusCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import RouteNotParent from "~/components/RouteNotParent/RouteNotParent";

const cx = classNames.bind(styles);

const dataBank = [
  {
    image: ImgBank,
  },
  {
    image: ImgBank,
  },
];

const dataCreditCard = [
  {
    image: ImgCreditCard,
  },
  {
    image: ImgCreditCard,
  },
];

const AccountManager = () => {
  const [amountBank, setAmountBank] = useState(1);
  const [amountCredit, setAmountCredit] = useState(1);

  useEffect(() => {
    dataBank.length < 4 ? setAmountBank(dataBank.length) : setAmountBank(3);
  }, [dataBank]);

  useEffect(() => {
    dataCreditCard.length < 4
      ? setAmountCredit(dataCreditCard.length)
      : setAmountCredit(3);
  }, [dataCreditCard]);

  return (
    <div className={cx("manager-account")} >
      <RouteNotParent pathNameParent="account-manager">
          <div className={cx("box-bank", "bg-normal-linear")}>
            <div className={cx("head")}>
              <h4 className={cx("head__title")}>銀行帳戶</h4>
              <span className={cx("head__total-card")}>{amountBank}/3</span>
            </div>
            <ul className={cx("card")}>
              {dataBank.map(
                (item, i) =>
                  i < 3 && (
                    <li key={i} className={cx("card__item")}>
                      <img src={item.image} alt="..." />
                    </li>
                  )
              )}
              {dataBank.length < 3 && (
                <li className={cx("card__item", "card__item-add")}>
                  <Link to="add-bank-account">
                    <BsPlusCircleFill />
                    <p>新增銀行帳戶</p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className={cx("box-credit-card", "bg-normal-linear")}>
            <div className={cx("head")}>
              <h4 className={cx("head__title")}>信用卡</h4>
              <span className={cx("head__total-card")}>{amountCredit}/3</span>
            </div>
            <ul className={cx("card")}>
              {dataCreditCard.map(
                (item, i) =>
                  i < 3 && (
                    <li key={i} className={cx("card__item")}>
                      <img src={item.image} alt="..." />
                    </li>
                  )
              )}
              {dataCreditCard.length < 3 && (
                <li className={cx("card__item", "card__item-add")}>
                  <Link to="add-credit-card">
                    <BsPlusCircleFill />
                    <p>新增信用卡</p>
                  </Link>
                </li>
              )}
            </ul>
          </div>
      </RouteNotParent>
    </div>
  );
};
export default AccountManager;
