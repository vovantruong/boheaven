import React from 'react'
import styles from './CustomTag.module.scss'
import classNames from 'classnames/bind'
import TagLeft from '../../../assets/images/global/components/tag-title-reactangle/tag-left.png'
import TagRight from '../../../assets/images/global/components/tag-title-reactangle/tag-right.png'
import TagBottom from '../../../assets/images/global/components/tag-title-reactangle/tag-bottom.svg'

const cx = classNames.bind(styles);

const CustomTag = ({children}) => {
  return (
    <div className={cx('tag')}>
      <div className={cx('left')}>
        <img src={TagLeft} alt="..."/>
      </div>
      <div className={cx('text')}>
        {children}
        <div className={cx('right')}>
          <img src={TagRight} alt="..."/>
        </div>
      </div>
    </div>
  )
}

export default CustomTag