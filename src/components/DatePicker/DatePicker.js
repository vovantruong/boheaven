import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DatePicker.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import OutsideClickHandler from "react-outside-click-handler";
import { BsCalendar } from "react-icons/bs";

const cx = classNames.bind(styles);

function DatePicker(props) {
  const { label, className, value, onChange } = props;
  const [visible, setVisible] = useState(false);

  const fromDate = value?.from;
  const toDate = value?.to;

  console.log(new Date(fromDate));

  return (
    <div className={cx("date-picker", { ["show-picker"]: visible })}>
      <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
        <div className={cx("box")}>
          <span className={cx("from")} onClick={() => setVisible(true)}>
            2022/04/20
          </span>
          <span>-</span>
          <span className={cx("to")} onClick={() => setVisible(true)}>
            2022/04/21
          </span>
          <BsCalendar className={cx("ic-calendar")} />
        </div>
        <div className={cx("picker")}>
          <Calendar className={cx("box-picker")} />
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default DatePicker;
