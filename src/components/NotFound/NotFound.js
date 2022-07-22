import React from 'react'
import classNames from 'classnames/bind'
import styles from './NotFound.module.scss'

const cx = classNames.bind(styles)

const NotFound = () => {
  return(
    <div style={{textAlign:"center"}} className={cx('')}>
        <h1>404 | Not Found</h1>
    </div>
  )
}
export default NotFound