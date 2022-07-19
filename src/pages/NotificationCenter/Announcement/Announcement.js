import React from 'react'
import classNames from 'classnames/bind'
import styles from './Announcement.module.scss'
import { dataAnnouncement } from '~/constants/mocks/DataNotificationCenter/dataAnnouncement'
import Collapse from '~/components/Collapse/Collapse'

const cx = classNames.bind(styles)

const Announcement = () => {
  return(
    <div className={cx('announcement')}>
       {
        dataAnnouncement.map((item, index) => (
          <Collapse key={index} itemHead={item.name} itemDate={item.date}>
            {item.description}
          </Collapse>
        ))
       }
    </div>
  )
}
export default Announcement