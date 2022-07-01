import React from 'react'
import classNames from 'classnames/bind'
import styles from './GameIntroduction.module.scss'

const cx = classNames.bind(styles);

const GameIntroduction = () => {
  return (
    <div className={cx('game-intro')}>
        <div className='container'>
            <div className={cx('wrapper')}>
                Game Introduction
            </div>
        </div>
    </div>
  )
}

export default GameIntroduction