import React from "react";
import styles from "./Footer.module.scss";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import { imageFooter } from "~/constants/imagesFooter";

const cx = className.bind(styles);

const logo = [
  imageFooter.Allbet,
  imageFooter.Wm,
  imageFooter.DreamGaming,
  imageFooter.SaGaming,
  imageFooter.SuperS,
  imageFooter.Super,
  imageFooter.Lottery,
];

const tabLink = [
  {
    name: "幫助中心",
    link: "/profile/help-center",
  },
  {
    name: "邀請好友",
    link: "/profile/invite-friends",
  },
  {
    name: "APP下載",
    link: "#",
  },
  {
    name: "常見問題",
    link: "#",
  },
  {
    name: "合營代理",
    link: "#",
  },
  {
    name: "娛樂城",
    link: "#",
  },
  {
    name: "百家樂",
    link: "#",
  },
  {
    name: "遊戲介紹",
    link: "/game-introduction",
  },
  {
    name: "娛樂城文章分享",
    link: "/blog-sport",
  },
];

const Footer = () => {
  return (
    <div className={cx("footer")}>
      <div className="container">
        <div className={cx("footer__logo")}>
          {logo?.map((item, index) => (
            <div key={index} className={cx("image-logo")}>
              <img src={item} alt="..." />
            </div>
          ))}
        </div>
        <div className={cx("footer__content")}>
          <p>
            博天堂918擁有歐洲政府（MGA）和菲律賓政府（PAGCOR）頒發的合法執照。
          </p>
          <p>
            註冊於英屬維爾京群島，是受國際行業協會認可的合法公司。進行註冊娛樂前，請確保您滿18歲！
          </p>
        </div>
        <div className={cx('line')}></div>
        <div className={cx("footer__tab-link")}>
          <ul className={cx("list-item")}>
            {tabLink?.map((item, index) => (
              <li key={index} className={cx("item-link")}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={cx("footer__copyright")}>
          版權所有 ©2020-2025 博天堂918 保留所有權
        </div>
      </div>
    </div>
  );
};

export default Footer;
