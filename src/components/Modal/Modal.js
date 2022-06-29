import React from "react";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const Modal = ({ title, className, visible, setVisible, children }) => {
  return (
    <div className={cx("modal", className)}>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div className={cx("modal-content")}>
          <div className={cx("head")} style={!title ? {justifyContent: 'right'} : null}>
            {title && <h4 className={cx("title")}>{title}</h4>}
            <button
              className={cx("close")}
              onClick={() => {
                setVisible(false);
              }}
            >
              <Icon name="close" />
            </button>
          </div>
          <div className={cx("body")}>{children}</div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
