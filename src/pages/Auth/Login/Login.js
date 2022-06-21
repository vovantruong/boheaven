import React, { useState } from "react";
import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import ImageLogo from "../../../assets/images/global/boheaven.png";
import InputText from "~/components/InputText/InputText";
import Checkbox from "~/components/Checkbox/Checkbox";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <div className={cx("section-login")}>
      <div className="container">
        <div className={cx("wrapper")}>
          <div className={cx("image-top")}>
            <img src={ImageLogo} alt="..." />
          </div>
          <form
            onSubmit={handleLogin}
            className={cx("body")}
            autoComplete="off"
          >
            <h3>會員登入</h3>
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
            <div className={cx("options")}>
              <Checkbox
                content="記住密碼"
                value={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              <div className={cx("forgot-password")}>
                <Link to="#">忘記密碼?</Link>
              </div>
            </div>
            <button className={cx("submit")} type="submit">
              登入
            </button>
            <div className={cx("options")}>
              <Link to="/register">免費註冊</Link>
              <Link to="#">先去逛逛</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
