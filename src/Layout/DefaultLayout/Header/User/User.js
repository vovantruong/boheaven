import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./User.module.scss";
import Avatar from "../../../../assets/images/global/header/user.png";
import Mail from "../../../../assets/images/global/header/mail.png";
import Vip from "~/constants/tagVip";
import OutsideClickHandler from "react-outside-click-handler";
import { BsChevronDown } from "react-icons/bs";
import MenuProfile from "~/components/MenuProfile/MenuProfile";
import {dataUser} from '../../../../constants/mocks/dataAccountUser'

const cx = classNames.bind(styles);

const User = ({ className, isMobile, infoMember = false }) => {
  const [visible, setVisible] = useState(false);
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      {!infoMember ? (
        <div className={cx("user-account", className)}>
          {!isMobile ? (
            <div className={cx("head")} onClick={() => setVisible(!visible)}>
              <div className={cx("avatar")}>
                <img src={Avatar} alt="..."/>
              </div>
              <div className={cx("info")}>
                <div className={cx("top")}>
                  <span className={cx("phone")}>{dataUser.member}</span>
                  <Vip className={cx("tag-vip")} name={dataUser.vip} />
                </div>
                <div className={cx("bottom")}>
                  <span
                    className={cx("balance")}
                  >{`$${dataUser.balance}`}</span>
                  <span className={cx("member-center")}>
                    會員中心 <BsChevronDown />
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <button className={cx("sign-out-mobile")}>登出</button>
          )}

          <div className={cx("message")}>
            <img src={Mail} alt="..."/>
            <span className={cx("tick")}></span>
          </div>
          {visible && (
            <MenuProfile
              onCloseDropdown={() => setVisible(false)}
              className={cx("dropdown-menu")}
              dataUser={dataUser}
              isDropdown
            />
          )}
        </div>
      ) : (
        <div className={cx("info-member")}>
          <div className={cx("top")}>
            <span className={cx("phone")}>{`會員: ${dataUser.member}`}</span>
            <Vip className={cx("tag-vip")} name={dataUser.vip} />
          </div>
          <div className={cx("balance")}>
            {`$${dataUser.balance}`} <BsChevronDown />
          </div>
        </div>
      )}
    </OutsideClickHandler>
  );
};

export default User;
