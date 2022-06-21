import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import SidebarSupport from './SidebarSupport/SidebarSupport'
import classNames from 'classnames/bind'
import styles from './DefaultLayout.module.scss'

const cx = classNames.bind(styles)

const DefaultLayout = ({children}) => {
  return (
    <div className={cx('section-main')}>
      <Header />
        {children}
      <Footer />
    </div>
  )
}

export default DefaultLayout