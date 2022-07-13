import React,{useEffect, useContext} from "react";
import styles from "./MenuProfile.module.scss";
import classNames from "classnames/bind";
import Vip from "~/constants/tagVip";
import { BsChevronDown } from "react-icons/bs";
import { NavLink, useLocation,useNavigate ,Link} from "react-router-dom";
import { MediaQueryContext } from "~/Context/MainContext";
import Icon from "~/constants/icons";

const cx = classNames.bind(styles);

const currencyItem = [
  {
    bg: "#365A97",
    key: "存",
    name: "存款",
    link: "/profile/deposit",
  },
  {
    bg: "#F1C225",
    key: "提",
    name: "提款",
    link: "/profile/withdrawal",
  },
  {
    bg: "#3BDB85",
    key: "轉",
    name: "轉點",
    link: "/profile/turning-point",
  },
];

const menuItem = [
  {
    icon: <Icon name="member" />,
    name: "個人資料",
    link: "/profile/personal-information",
    description: "",
  },
  {
    icon: <Icon name="diamon" />,
    name: "VIP特權",
    link: "/profile/vip-privileges",
    description: "",
  },
  {
    icon: <Icon name="bar" />,
    name: "優惠達標查詢",
    link: "/profile/inquiry-compliance",
    description: "",
  },
  {
    icon: <Icon name="cardDate" />,
    name: "投注紀錄",
    link: "/profile/betting-history",
    description: "",
  },
  {
    icon: <Icon name="cardTranslate" />,
    name: "交易紀錄",
    link: "/profile/transaction-record",
    description: "",
  },
  {
    icon: <Icon name="visa" />,
    name: "帳戶管理",
    link: "/profile/account-manager",
    description: "",
  },
  {
    icon: <Icon name="addPeople" />,
    name: "邀請好友",
    link: "/profile/invite-friends",
    description: "",
  },
  {
    icon: <Icon name="question" />,
    name: "幫助中心",
    link: "/profile/help-center",
    description: "存款、提款、投注疑問看這裡",
  },
];

const MenuProfile = ({
  dataUser,
  className,
  onCloseDropdown,
  isDropdown = false,
}) => {

const isMobile = useContext(MediaQueryContext);
const {pathname} = useLocation();
const navigate = useNavigate()
useEffect(() =>{
  if(!isMobile && pathname == '/profile'){
    navigate('personal-information')
  } 
},[pathname])

  return (
    <div className={cx("bg-normal-linear","menu-profile", className)}>
      {!isDropdown && (
        <div className={cx("user-info")}>
          <div className={cx("avatar")}>
            <img src={dataUser?.image} alt="..." />
          </div>
          <div className={cx('information')}>
            <div className={cx('member')}>
              <span>{dataUser.member}</span>
              <Vip className={cx("tag-vip")} name={dataUser.vip} />
            </div>
            <div className={cx('balance')}>
              <span>${dataUser.balance}</span>
              <BsChevronDown />
            </div>
          </div>
        </div>
      )}
      <div className={cx("top")}>
        {currencyItem.map((item, i) => (
          <Link key={i} to={item.link} className={cx("link")} onClick={onCloseDropdown}>
            <div style={{ background: `${item.bg}` }} className={cx("action")}>
              {item.key}
            </div>
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
      <div className={cx("body")}>
        {menuItem.map((item, i) => (
          <NavLink
            key={i}
            to={item.link}
            onClick={onCloseDropdown}
            className={({ isActive }) =>
              isActive ? cx("item", !isDropdown ? "active" : "") : cx("item")
            }
          >
            <div className={cx("icon-item")}>{item.icon}</div>
            <div className={cx("name")}>
              <h4>{item.name}</h4>
              {item.description && <p>{`(${item.description})`}</p>}
            </div>
          </NavLink>
        ))}
      </div>
      {isDropdown && <button className={cx("sign-out")}>登出</button>}
    </div>
  );
};

export default MenuProfile;
