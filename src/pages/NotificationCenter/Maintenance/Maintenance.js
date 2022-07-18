import React from 'react'
import classNames from 'classnames/bind'
import styles from './Maintenance.module.scss'
import EmergencyRepair from './EmergencyRepair/EmergencyRepair'
import General from './General/General'
import Loader from '~/components/Loader/Loader'

const cx = classNames.bind(styles)

const Maintenance = () => {
  return(
    <div className={cx('maintenance')}>
        <EmergencyRepair />
        <hr />
        <General />
    </div>
  )
}
export default Maintenance