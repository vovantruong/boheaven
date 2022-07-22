import React from 'react'
import classNames from 'classnames/bind'
import styles from './Announcement.module.scss'

const cx = classNames.bind(styles)

const Announcement = () => {
  return(
    <div classNames={cx('Announcement')}>
        Announcement
    </div>
  )
}
export default Announcement