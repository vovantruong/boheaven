import React from 'react'
import classNames from 'classnames/bind'
import styles from './General.module.scss'
import { dataGeneralMaintence } from '~/constants/mocks/DataNotoficationCenter/dataGeneralMaintence'

const cx = classNames.bind(styles)

const General = () => {
  return(
    <div className={cx('general')}>
        <div className={cx('general__title')}>
            <p>一般維修</p>
        </div>
        <div className={cx('general__content')}>
          {
            dataGeneralMaintence.map((item, index) => (
              <div key={index} className={cx('weekdays')}>
                  <p className={cx('weekdays__title')}>{item.weekdays}</p>
                  <div className={cx('weekdays__details')}>
                  {
                    item.data?.map((detail,id) => (
                      <React.Fragment key={id}>
                        <div className={cx('name')}>{detail.name}</div>
                        <p>{detail.time}</p>
                      </React.Fragment>
                    ))
                  }
                  </div>
              </div>
            ))
          }
        </div>
    </div>
  )
}
export default General