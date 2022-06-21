import React, {useState} from "react";
import styles from "./Register.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import ImageLogo from "../../../assets/images/global/boheaven.png";
import InputText from "~/components/InputText/InputText";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [verifyCode, setVerifyCode] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
  }

  return (
    <div className={cx("section-register")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("image-top")}>
            <img src={ImageLogo} alt="..." />
          </div>
          <form
            onSubmit={handleRegister}
            className={cx("body")}
            autoComplete="off"
          >
            <h3>會員註冊</h3>
            <InputText
              className={cx("input")}
              icon={<Icon name="user" />}
              placeholder="請輸入帳號"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <InputText
              className={cx("input")}
              icon={<Icon name="lock" />}
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="密碼"
              required
            />
            <InputText
              className={cx("input")}
              icon={<Icon name="lock" />}
              name="confirmpassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="確認密碼"
              required
            />
            <InputText
              className={cx("input")}
              placeholder="請輸入手機號碼"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <InputText
              className={cx("input")}
              placeholder="請輸入驗證碼"
              name="verifycode"
              value={verifyCode}
              onChange={(e) => setVerifyCode(e.target.value)}
              required
            >
              <button className={cx('get-code')}>獲取驗證碼</button>
            </InputText>
            <button className={cx("submit")} type="submit">
              註冊
            </button>
            <div className={cx("options")}>
              <Link to="/login">已有帳號? 登入</Link>
              <Link to="#">先去逛逛</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
