import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddBankAccount.module.scss";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BsChevronLeft } from "react-icons/bs";
import InputText from "~/components/InputText/InputText";

const cx = classNames.bind(styles);

const AddBankAccount = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("bank-account", "bg-normal-linear")}>
      <div className={cx("go-back")} onClick={() => navigate(-1)}>
        <BsChevronLeft />
        <span>新增銀行帳戶</span>
      </div>
      <div className={cx("upload-data")}>
        <form onSubmit={onSubmit} autoComplete="off">
          <InputText
            name="username"
            value={username}
            wrapClassName={cx('username')}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="请输入您的账户名称"
          />
        </form>
      </div>
    </div>
  );
};
export default AddBankAccount;
