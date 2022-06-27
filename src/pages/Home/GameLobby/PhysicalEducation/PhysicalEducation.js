import React from 'react'
import styles from './PhysicalEducation.module.scss'
import classNames from 'classnames/bind'
import { GAMELOBBY } from '~/constants/imageHomePage';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

const PhysicalEducation = () => {
  return (
    <div className={cx('sports')}>
      <div className={cx("img-main")}>
          <img src={GAMELOBBY.BestSport} />
          <Button className="bg-blue">
            <Link to="#">博天堂體育 </Link>
          </Button>
        </div>
        <div className={cx("img-main")}>
          <img src={GAMELOBBY.SuperSport} />
          <Button className="bg-blue">
            <Link to="#">SUPER體育</Link>
          </Button>
        </div>
    </div>
  )
}

export default PhysicalEducation