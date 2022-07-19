import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./DropTransfer.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { BsChevronDown } from "react-icons/bs";

const cx = classNames.bind(styles);

const DropTransfer = ({ className, value, setValue, icon, options }) => {
  const [visible, setVisible] = useState(false);
  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cx("dropdown", className, { ["active"]: visible })}>
        <div className={cx("head")} onClick={() => setVisible(!visible)}>
          <div className={cx("selection")}>
            <span>{value.name}</span>
            <span>{value.price}</span>
          </div>
          <div className={cx("arrow")}>{icon ? icon : <BsChevronDown />}</div>
        </div>
        <div className={cx("body")}>
          {options?.map((x, index) => (
            <div
              className={cx("option", {
                ["selectioned"]: x.name === value.name,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              <span className={cx('option__name')}>{x.name}</span>
              <span className={cx("option__price")}>{x.price}</span>
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  );
};
export default DropTransfer;
