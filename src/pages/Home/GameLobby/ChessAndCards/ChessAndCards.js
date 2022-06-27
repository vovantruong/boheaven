import React from 'react'
import classNames from 'classnames/bind'
import styles from './ChessAndCards.module.scss'
import { GAMELOBBY } from '~/constants/imageHomePage'
import { Link } from 'react-router-dom'
import Button from '~/components/Button/Button'

const cx = classNames.bind(styles)

const ChessAndCards = () => {
  return (
    <div className={cx('chess')}>
       <div className={cx("img-main")}>
        <img src={GAMELOBBY.MGChess} />
        <Button className="bg-blue">
          <Link to="#">MG棋牌</Link>
        </Button>
      </div>
      <div className={cx("img-main")}>
        <img src={GAMELOBBY.ChessAndCard} />
        <Button className="bg-blue">
          <Link to="#">博樂棋牌</Link>
        </Button>
      </div>
    </div>
  )
}

export default ChessAndCards