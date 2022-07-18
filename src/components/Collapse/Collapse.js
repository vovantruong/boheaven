import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Collapse.module.scss";
import IcSound from "~/assets/images/global/components/ic-fill-sound.svg";

const cx = classNames.bind(styles);

const Collapse = ({
  className,
  itemHead = "",
  itemContent = "",
  itemDate = "",
  ...props
}) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className={cx("collapse",{['active']: visible} ,className)}>
      {itemHead && (
        <div className={cx("header")} onClick={() => setVisible(!visible)}>
          <div className={cx("title")}>
            <img src={IcSound} alt="..." />
            <span>【{itemHead}】</span>
          </div>
          {itemDate && <span className={cx("date")}>{itemDate}</span>}
        </div>
      )}
        <div className={cx("body")}>
          <span>{itemContent || props.children}</span>
        </div>
    </div>
  );
};
export default Collapse;
