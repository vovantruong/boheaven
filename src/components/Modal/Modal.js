import React, { useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames/bind";
import styles from "./Modal.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import Close from '../../assets/images/global/close-outline.svg';

const cx = classNames.bind(styles);

const Modal = ({
  title = "",
  className,
  contentClassName,
  bodyClassName,
  visible = false,
  setVisible,
  onCloseModal,
  removeIconClose = false,
  children,
}) => {
  const escFunction = useCallback(
    (e) => {
      if (e.keyCode === 27) {
        onCloseModal();
      }
    },
    [onCloseModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [escFunction]);

  useEffect(() => {
    if (visible) {
      const target = document.querySelector("#modal");
      disableBodyScroll(target);
    } else {
      clearAllBodyScrollLocks();
    }
  }, [visible]);

  return createPortal(
    visible && (
      <div className={cx("modal", className)} id="modal">
        <div className={cx("modal-content", contentClassName)}>
          <OutsideClickHandler onOutsideClick={onCloseModal}>
            <div className={cx("wrapper")}>
              <div
                className={cx("head")}
                style={!title ? { justifyContent: "right" } : null}
              >
                {title && <h4 className={cx("title")}>{title}</h4>}
                {!removeIconClose && (
                  <button className={cx("btn-close")} onClick={onCloseModal}>
                    {/* <IoIosCloseCircleOutline className={cx('icon-close')}/> */}
                    {/* <Icon name="close" /> */}
                    <img src={Close} />
                  </button>
                )}
              </div>
              <div className={cx("body", bodyClassName)}>{children}</div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    ),
    document.body
  );
};

export default Modal;
