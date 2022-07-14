import React from 'react'
import classNames from 'classnames/bind'
import styles from './Maintenance.module.scss'

const cx = classNames.bind(styles)

const Maintenance = () => {
  return(
    <div classNames={cx('Maintenance')}>
        Maintenance
    </div>
  )
}
export default Maintenance