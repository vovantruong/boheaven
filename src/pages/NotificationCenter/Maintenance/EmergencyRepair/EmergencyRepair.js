import React from 'react'
import classNames from 'classnames/bind'
import styles from './EmergencyRepair.module.scss'

const cx = classNames.bind(styles)

const EmergencyRepair = () => {
  return(
    <div className={cx('emergency-repair')}>
      <div className={cx('title')}>
          <p>緊急維修</p>
      </div>
      <div className={cx('content')}>
          <span>目前沒有緊急維修項目</span>
      </div>
    </div>
  )
}
export default EmergencyRepair