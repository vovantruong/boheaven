import React from 'react'
import classNames from 'classnames/bind';
import styles from './Banner.module.scss'
import { imagesBanner } from "~/constants/imagesBanner";
import BannerSlide from "~/components/BannerSlide/BannerSlide";

const cx = classNames.bind(styles);

const data = [
    {
        link: '#',
        image: imagesBanner.Banner1,
    },
    {
        link: '#',
        image: imagesBanner.Banner2,
    },
];

const Banner = ({className, ...props}) => {
  return (
    <div style={props?.style} className={cx('banner-wrapper', className)}>
        <BannerSlide data={data} />
    </div>
  )
}

export default Banner