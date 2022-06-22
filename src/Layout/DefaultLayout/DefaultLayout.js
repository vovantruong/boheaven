import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SidebarSupport from './SidebarSupport/SidebarSupport'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'
import Notification from './Notification/Notification'

const cx = classNames.bind(styles)

const DefaultLayout = ({children}) => {
  return (
    <div className={cx('wrapper-frame')}>
      <Header />
      <Notification />
        {children}
      <SidebarSupport />
      <Footer />
    </div>
  )
}

export default DefaultLayout