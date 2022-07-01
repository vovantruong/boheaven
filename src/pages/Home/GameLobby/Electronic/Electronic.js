import React, { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Electronic.module.scss";
import Button from "~/components/Button/Button";
import { GAMELOBBY } from "~/constants/imageHomePage";
import { Link } from "react-router-dom";
import { MediaQueryContext } from "~/Context/MainContext";
import ListCardMb from "~/components/ListCardMb/ListCardMb";

const cx = classNames.bind(styles);

const data = [
  {
    image2x: GAMELOBBY.ElectronicDT,
    image: GAMELOBBY.ElectronicDTMobile,
    logo: GAMELOBBY.LogoDTElectronic,
    tag: "-DT Slot-",
    name: "DT電子",
    category: "slot",
    link: "#",
  },
  {
    image2x: GAMELOBBY.ElectronicSP,
    image: GAMELOBBY.ElectronicSPMobile,
    logo: GAMELOBBY.LogoSPElectronic,
    tag: "-SP Slot-",
    name: "SP電子",
    category: "slot",
    link: "#",
  },
  {
    image2x: GAMELOBBY.ElectronicRTG,
    image: GAMELOBBY.ElectronicRTGMobile,
    logo: GAMELOBBY.LogoRTGElectronic,
    tag: "-RTG Slot-",
    name: "RTG電子",
    category: "slot",
    link: "#",
  },
  {
    image2x: GAMELOBBY.ElectronicBNG,
    image: GAMELOBBY.ElectronicBNGMobile,
    logo: GAMELOBBY.LogoBNGElectronic,
    tag: "-BNG Slot-",
    name: "BNG電子",
    category: "slot",
    link: "#",
  },
  {
    image2x: GAMELOBBY.ElectronicBetter,
    image: GAMELOBBY.ElectronicBetterMobile,
    logo: GAMELOBBY.LogoBetterElectronic,
    tag: "-BWIN Slot-",
    name: "必贏電子",
    category: "slot",
    link: "#",
  },
  {
    image2x: GAMELOBBY.ElectronicPLAY,
    image: GAMELOBBY.ElectronicPLAYMobile,
    logo: GAMELOBBY.LogoPlayElectronic,
    tag: "-PLAY Slot-",
    name: "PLAY電子",
    category: "slot",
    link: "#",
  },
]

const Electronic = () => {
  const isMobile = useContext(MediaQueryContext);
  return (
    <div className={cx("electronic")}>
      {!isMobile ? (
        data.map((item, i) => (
          <div key={i} className={cx("item")}>
            <div className={cx("item-img")}>
              <img src={item.image2x} />
            </div>
            <Button className="bg-blue">
              <Link to={item.link}>{item.name}</Link>
            </Button>
          </div>
        ))
      ) : (
        <ListCardMb data={data} />
      )}
    </div>
  );
};

export default Electronic;
