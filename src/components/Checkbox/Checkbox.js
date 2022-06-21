import React from 'react'
import classNames from 'classnames/bind'
import styles from './Checkbox.module.scss'

const cx = classNames.bind(styles)

const Checkbox = ({className,check, content, value, onChange}) => {
  return (
    <label className={cx("checkbox", className)}>
      <input
        className={cx('input')}
        type="checkbox"
        onChange={onChange}
        checked={value}
      />
      <span className={cx('inner')}>
        <span className={cx("tick",check)}></span>
        <span className={cx('text')}>{content}</span>
      </span>
    </label>
  )
}

export default Checkbox