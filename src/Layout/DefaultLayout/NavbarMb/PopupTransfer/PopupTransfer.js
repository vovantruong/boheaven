import React, { useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./PopupTransfer.module.scss";
import { createPortal } from "react-dom";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const PopupTransfer = ({ visible, setVisible, className }) => {
  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#popup");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);
  return createPortal(
    visible && <div className={cx("transfer-btn")} id="popup">
        <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
            <div className={cx('group')}>
                <Link className={cx('group__deposit')} to="#">存款</Link>
                <Link className={cx('group__withdrawal')} to="#">提款</Link>
                <Link className={cx('group__turning-point')} to="#">轉點</Link>
            </div>
        </OutsideClickHandler>
    </div>,
    document.body
  );
};
export default PopupTransfer;
