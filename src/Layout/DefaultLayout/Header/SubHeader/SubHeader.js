import React from "react";
import classNames from "classnames/bind";
import styles from "./SubHeader.module.scss";
import OutsideClickHandler from "react-outside-click-handler";
import Button from "~/components/Button/Button";
import { dataSubMenu } from "~/constants/mocks/dataSubHeader";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const SubHeader = ({ className, id, visible, setVisible, ...props }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => setVisible(false)}>
      <div className={cx("sub-header", className)} style={props.style}>
        <div className="container-fluid">
          <div className={cx("wrapper")}>
            {dataSubMenu.map(
              (subMenu, i) =>
                subMenu.id === id &&
                subMenu.data.map((item, index) =>
                  subMenu.data?.length < 3 ? (
                    <div key={index} className={cx("item-short-data")}>
                      <img className={cx("image-main")} src={item.image} alt="..."/>
                      <div className={cx("action")}>
                        <div className={cx("info")}>
                          <div className={cx("logo")}>
                            <img src={item.logo} alt="..."/>
                          </div>
                          <div className={cx("content")}>
                            <h4 className={cx("name")}>{item.name}</h4>
                            <p className={cx("tag")}>{item.tag}</p>
                          </div>
                        </div>
                        <Button className={cx("link")} active>
                          <Link to={item.link}>進入遊戲</Link>
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Link
                      className={cx("item-game")}
                      key={index}
                      to={item?.link ?? "#"}
                    >
                      <div className={cx("info")}>
                        <div className={cx("logo")}>
                          <img src={item.logo} alt="..."/>
                        </div>
                        <div className={cx("content")}>
                          <h4 className={cx("name")}>{item.name}</h4>
                          <p className={cx("tag")}>{item.tag}</p>
                        </div>
                      </div>
                        <img className={cx("image-game")} src={item.image} alt="..."/>
                    </Link>
                  )
                )
            )}
          </div>
        </div>
      </div>
    </OutsideClickHandler>
  );
};

export default SubHeader;
