import React from 'react'
import styles from './Discount.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);

const Discount = () => {
  return (
    <div className={cx('discount')}>
      <div className='container'>
        <div className={cx('wrapper')}>
            Discount
        </div>
      </div>
    </div>
  )
}

export default Discount