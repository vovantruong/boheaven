import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./InfoBox.module.scss";

const cx = classNames.bind(styles);

export const InfoImage = ({ src, children, className, ...props }) => {
    return <div className={cx("info-image", className)}>
        {children}
        <img src={src} alt={props.alt ? props.alt : '...'}/>
    </div>;
  };

export const InfoHead = ({ children, className }) => {
  return <div className={cx("info-head", className)}><p>{children}</p></div>;
};

export const InfoTag = ({ children, className }) => {
  return <div className={cx("info-tag", className)}><p>{children}</p></div>;
};

export const InfoBody = ({ children, className }) => {
  return <div className={cx("info-body", className)}><p>{children}</p></div>;
};

export const InfoLinkMore = ({ children, className, to }) => {
  return (
    <div className={cx("info-link-more", className)}>
      <Link to={to}>{children}</Link>
    </div>
  );
};

const InfoBox = ({ className, children, ...props }) => {
  return (
    <div className={cx("info-box", className)}>
      {
        children.map((item, i) => (
            item.type.name === 'InfoImage' && item
        ))
      }
      <div className={cx('wrap-text')}>
        {
            children.map((item, i) => (
                item.type.name !== 'InfoImage' && item
            ))
        }
      </div>
    </div>
  );
};

export default InfoBox;
