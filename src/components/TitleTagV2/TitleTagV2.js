import React from "react";
import classNames from "classnames/bind";
import styles from "./TitleTagV2.module.scss";
import TagImg from "../../assets/images/global/components/tag-rectangle.svg";

const cx = classNames.bind(styles);

const TitleTagV2 = ({ children, className, name }) => {
  return (
    <div className={cx("title-tag-v2", className)}>
      <div className="container">
        <div className={cx("wrap")}>
          <p>
            {children || name}
            <div className={cx('img-tag')}>
              <img src={TagImg} />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TitleTagV2;
