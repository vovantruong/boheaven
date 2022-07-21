import React, { useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddCreditCard.module.scss";
import { useNavigate } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import ImgExample from "../../../../assets/images/pages/profile/accountManager/example-credit-card.png";
import ImgUserExample from '../../../../assets/images/pages/profile/accountManager/example-use-card.png';

const cx = classNames.bind(styles);

const AddCreditCard = () => {
  const navigate = useNavigate();
  const [cardName, setCardName] = useState();
  const [cardNumber, setCardNumber] = useState("");

  const fileRef = useRef();

  const changeFile = (e) => {
    // console.log(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("credit-card", "bg-normal-linear")}>
      <div className={cx("go-back")} onClick={() => navigate(-1)}>
        <BsChevronLeft />
        <span>新增銀行帳戶</span>
      </div>
      <div className={cx("form-wrapper")}>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className={cx("form-item")}>
            <label className={cx("lb-name")} htmlFor="f-card-name">
              持卡人姓名:
            </label>
            <div className={cx("input")}>
              <input
                id="f-card-name"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="请输入持卡人姓名"
              />
            </div>
          </div>
          <div className={cx("form-item")}>
            <label className={cx("lb-name")}></label>
            <span className={cx("notes")}>
              為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致
            </span>
          </div>
          <div className={cx("form-item")}>
            <label className={cx("lb-name")} htmlFor="f-card-number">
              信用卡卡號:
            </label>
            <div className={cx("input")}>
              <input
                id="f-card-number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="請輸入卡號"
              />
            </div>
          </div>
          <div className={cx("form-item")}>
            <div className={cx("file")}>
              <label>
                <span>
                  點擊此處上傳信用卡(最多上傳20份、大小不超過5MB) <br />
                  1.雙證件+信用卡合拍 <br />
                  2.本人+信用卡合拍(手不能遮住名字跟卡號) <br />
                  需顯示完整姓名卡號及日期，若會拍攝到三位安全碼，<br />
                  請務必遮擋。
                </span>
                <input
                  ref={fileRef}
                  onChange={changeFile}
                  type="file"
                  multiple
                  accept=".jpg, .png, .jpeg, .gif"
                />
              </label>
            </div>
          </div>
          <div className={cx("form-item")}>
            <button className={cx("btn-upload")}>上傳</button>
          </div>
          <div className={cx("form-item")}>
            <div className={cx("example")}>
              <p>範例:</p>
              <div className={cx("img-example")}>
                <img src={ImgExample} />
              </div>
              <div className={cx("img-user-example")}>
                <img src={ImgUserExample} />
              </div>
            </div>
          </div>
          <div className={cx("form-item", "group-btn")}>
            <button className={cx("btn-finish")}>完成</button>
            <button className={cx("btn-cancel")}>取消</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default AddCreditCard;
