import React,{useState} from 'react'
import styles from './Dropdown.module.scss'
import classNames from 'classnames/bind'
import OutsideClickHandler from 'react-outside-click-handler'
import { BsChevronDown } from "react-icons/bs";

const cx = classNames.bind(styles);
const Dropdown = ({ className, value, setValue, options, icon }) => {

  const [visible, setVisible] = useState(false)
  const handleClick = (value) => {
    setValue(value);
    setVisible(false);
  };

  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div
        className={cx('dropdown', className, { ['active']: visible })}
      >
        <div className={cx('head')} onClick={() => setVisible(!visible)}>
          <div className={cx("selection")}>{value}</div>
          <div className={cx("arrow")}>
           {icon ? icon : <BsChevronDown />}
          </div>
        </div>
        <div className={cx("body")}>
          {options?.map((x, index) => (
            <div
              className={cx("option", {
                ["selectioned"]: x === value,
              })}
              onClick={() => handleClick(x, index)}
              key={index}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </OutsideClickHandler>
  )
}

export default Dropdown