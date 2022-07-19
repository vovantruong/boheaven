import React from 'react'
import classNames from 'classnames/bind'
import styles from './MenuProfileMb.module.scss'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

const MenuProfileMb = ({className, dataUser}) => {
  return(
    <div className={cx('profile-mb',className)}>
        MenuProfileMb
    </div>
  )
}
export default MenuProfileMb