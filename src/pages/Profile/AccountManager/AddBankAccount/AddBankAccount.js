import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./AddBankAccount.module.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import ImgExample from "../../../../assets/images/pages/profile/accountManager/example-bank-account.png";
import Select from "react-select";
import SelectOption from "~/components/SelectOption/SelectOption";

const cx = classNames.bind(styles);

const options = [
  { value: "瑞士银行", label: "瑞士银行" },
  { value: "清华银行", label: "清华银行" },
  { value: "北京银行", label: "北京银行" },
];

const AddBankAccount = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [bankCode, setBankCode] = useState(null);
  const [bankAccount, setBankAccount] = useState("");

  const fileRef = useRef();

  const changeFile = (e) => {
    // console.log(e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("bank-account", "bg-normal-linear")}>
      <div className={cx("go-back")} onClick={() => navigate(-1)}>
        <BsChevronLeft />
        <span>新增銀行帳戶</span>
      </div>
      <div className={cx("form-wrapper")}>
        <form onSubmit={onSubmit} autoComplete="off">
          <div className={cx("form-item")}>
            <label className={cx('lb-name')} htmlFor="f-user">帳戶人姓名:</label>
            <div className={cx("input")}>
              <input
                id="f-user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="请输入您的账户名称"
              />
            </div>
          </div>
          <div className={cx('form-item')}>
            <label className={cx('lb-name')}></label>
            <span className={cx('notes')}>為了您的資金能夠迅速到帳，請確保填寫的姓名與銀行卡的開戶姓名一致</span>
          </div>
          <div className={cx("form-item")}>
            <label className={cx('lb-name')}>銀行代碼與名稱:</label>
            <SelectOption
              className={cx("bank-code")}
              value={bankCode}
              onChange={(e) => setBankCode(e)}
              options={options}
              placeholder="請選擇銀行"
            />
          </div>
          <div className={cx("form-item")}>
            <label className={cx('lb-name')} htmlFor="f-bank-account">銀行帳號:</label>
            <div className={cx("input")}>
              <input
                id="f-bank-account"
                value={bankAccount}
                onChange={(e) => setBankAccount(e.target.value)}
                placeholder="請輸入帳號"
                type="number"
              />
            </div>
          </div>
          <div className={cx('form-item')}>
            <label className={cx('lb-name')}></label>
            <span className={cx('notes')}>請認真檢查儀行帳號，帳號錯誤資金無法到帳</span>
          </div>
          <div className={cx("form-item")}>
            <div className={cx("file")}>
              <label>
                <span>
                  點擊此處上傳驗證資料 <br /> 身分證+健保卡(或第二有效證件)+銀行存摺
                  合拍(示意圖)<br /> *最多上傳40筆，上傳檔案大小請在5MB以下
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
export default AddBankAccount;
