import React from "react";
import styles from "./CardGameMb.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const CardGameMB = ({
  className,
  image,
  logo,
  tag,
  name,
  category,
  link,
  col2,
  ...props
}) => {
  return (
    <li className={cx("card-item" ,className, col2 ? 'card-col-2' : '')}>
      <Link to={link ? link : '#'} className={cx("group-item")}>
        <div className={cx("info-game")}>
          <div className={cx("logo")}>
            <img src={logo} alt="..." />
          </div>
          <p className={cx("title")}>{name ? name : 'No name'}</p>
          <p className={cx("tag")}>{tag ? tag : 'No tag'}</p>
        </div>
        <div className={cx("banner-game")}>
          <h4 className={cx("category")}>{category ? category : 'No category'}</h4>
          <div className={cx("image")}>
            <img src={image} alt="..." />
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CardGameMB;
