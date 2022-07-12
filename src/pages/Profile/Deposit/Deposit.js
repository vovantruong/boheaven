import React from 'react'
import styles from './Deposit.module.scss'
import classNames from 'classnames/bind'
import Dropdown from '~/components/Dropdown/Dropdown';


const cx = classNames.bind(styles);

const Deposit = () => {
  return (
    <div className={cx('deposit')}>
      <Dropdown />
    </div>
  )
}

export default Deposit