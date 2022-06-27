import React from "react";
import classNames from "classnames/bind";
import styles from "./Electronic.module.scss";
import Button from "~/components/Button/Button";
import { GAMELOBBY } from "~/constants/imageHomePage";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

const data = [
  {
    image: GAMELOBBY.ElectronicDT,
    name: "DT電子",
    link: "#",
  },
  {
    image: GAMELOBBY.ElectronicBNG,
    name: "BNG電子",
    link: "#",
  },
  {
    image: GAMELOBBY.ElectronicRTG,
    name: "RTG電子",
    link: "#",
  },
  {
    image: GAMELOBBY.ElectronicBetter,
    name: "必贏電子",
    link: "#",
  },
  {
    image: GAMELOBBY.ElectronicSP,
    name: "SP電子",
    link: "#",
  },
  {
    image: GAMELOBBY.ElectronicPLAY,
    name: "PLAY電子",
    link: "#",
  },
];

const Electronic = () => {
  return (
    <div className={cx("electronic")}>
      {data.map((item, i) => (
        <div key={i} className={cx("item")}>
          <div className={cx("item-img")}>
            <img src={item.image} />
          </div>
          <Button className="bg-blue">
            <Link to={item.link}>{item.name}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Electronic;
