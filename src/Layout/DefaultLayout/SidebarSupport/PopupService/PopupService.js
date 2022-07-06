import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./PopupService.module.scss";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const dataSocial = [
  {
    icon: <Icon name="line" />,
    title: "加入LINE官方帳號",
    note: "@918bo",
    link: "#",
    key: "line",
  },
  {
    icon: <Icon name="facebook" />,
    title: "FB粉專",
    note: "粉專討論區",
    link: "#",
    key: "fb",
  },
  {
    icon: <Icon name="mail" />,
    title: "意見反饋",
    note: "歡迎提供意見",
    link: "#",
    key: "mail",
  },
];

const PopupService = ({ className, onChangeFeedback,...props }) => {
  return (
    <div className={cx("popup-service")}>
      <div className={cx("wrapper")}>
        {dataSocial.map((item, i) => (
          <button
            onClick={() => (item.key === "mail" ? onChangeFeedback() : null)}
            className={cx("box-action", item.key)}
            key={i}
          >
            <Link to={item.link} className={cx("link")}>
              <div className={cx("info")}>
                <div className={cx("img-icon")}>{item.icon}</div>
                <div className={cx("text")}>
                  <h4>{item.title}</h4>
                  <p>{item.note}</p>
                </div>
              </div>
              <div className={cx("icon-next")}>
                <Icon name="arrowRight" />
              </div>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default PopupService;
