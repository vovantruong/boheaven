import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./DatePickerMulti.module.scss";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import OutsideClickHandler from "react-outside-click-handler";
import { BsCalendar } from "react-icons/bs";

const cx = classNames.bind(styles);

DatePickerMulti.propTypes = {
  className: PropTypes.string,
  value: PropTypes.object,
  onChange: PropTypes.object,
  fromDateDefault: PropTypes.string,
  toDateDefault: PropTypes.string
}

function DatePickerMulti(props) {
  const { className, value, onChange, fromDateDefault, toDateDefault } =
    props;
  const [visible, setVisible] = useState(false);
  const [visibleFrom, setVisibleFrom] = useState(false);
  const [visibleTo, setVisibleTo] = useState(false);
  const [fromDate, setFromDate] = useState(value?.from);
  const [toDate, setToDate] = useState(value?.to);

  const handleSetVisible = () => {
    setVisible(true);
    fromDate && setVisibleTo(false);
    toDate && setVisibleFrom(false);
  };

  useEffect(() => {
    onChange({
      from: fromDate.toLocaleDateString(),
      to: toDate.toLocaleDateString(),
    });
  }, [visible]);

  return (
    <div
      className={cx(
        "date-picker",
        { ["show-fromdate"]: visibleFrom },
        { ["show-todate"]: visibleTo },
        className
      )}
    >
      <OutsideClickHandler
        onOutsideClick={() => {
          setVisible(false);
          setVisibleFrom(false);
          setVisibleTo(false);
        }}
      >
        <div className={cx("box")}>
          <span
            className={cx("name-fromdate")}
            onClick={() => {
              handleSetVisible();
              setVisibleFrom(true);
            }}
          >
            {fromDateDefault
              ? new Date(fromDateDefault).toLocaleDateString()
              : fromDate.toLocaleDateString()}
          </span>
          <span>-</span>
          <span
            className={cx("name-todate")}
            onClick={() => {
              handleSetVisible();
              setVisibleTo(true);
            }}
          >
            {toDateDefault
              ? new Date(toDateDefault).toLocaleDateString()
              : toDate.toLocaleDateString()}
          </span>
          <BsCalendar
            className={cx("ic-calendar")}
            onClick={() => {
              handleSetVisible();
              setVisibleFrom(true);
            }}
          />
        </div>
        <div className={cx("picker", "picker-from")}>
          <Calendar
            activeStartDate={fromDateDefault && new Date(fromDateDefault)}
            value={fromDate}
            onChange={setFromDate}
            className={cx("box-picker")}
          />
        </div>
        <div className={cx("picker", "picker-to")}>
          <Calendar
            activeStartDate={toDateDefault && new Date(toDateDefault)}
            value={toDate}
            onChange={setToDate}
            className={cx("box-picker")}
          />
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default DatePickerMulti;
