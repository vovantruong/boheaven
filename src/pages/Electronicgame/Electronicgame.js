import React, { useContext, useState } from "react";
import styles from "./Electronicgame.module.scss";
import className from "classnames/bind";
import banner from "../../assets/images/pages/img-electronic/banner1.png";
import { ELECTRONIC } from "~/constants/imageElectronic";
import { dataElectronicgame } from "~/constants/mocks/dataElectronicgame";
import { MediaQueryContext } from "~/Context/MainContext";
import BannerSlide from "~/components/BannerSlide/BannerSlide";
import Button from "~/components/Button/Button";
import DTElectronics from "./DTElectronics/DTElectronics";
import BNGElectronics from "./BNGElectronics/BNGElectronics";
import RTGElectronics from "./RTGElectronic/RTGElectronics";
import Electronics from "./Electronics/Electronics";
import PlayElectronics from "./PlayElectronics/PlayElectronics";
import SPElectronics from "./SPElectronics/SPElectronics";
const cx = className.bind(styles);

const dataBanner = [
  {
    image: banner,
    link: "#",
  },
];
const dataTabs = [
  {
    name: "DT電子",
    tab: <DTElectronics />,
  },
  {
    name: "BNG電子",
    tab: <BNGElectronics />,
  },
  {
    name: "RTG電子",
    tab: <RTGElectronics />,
  },
  {
    name: "必贏電子",
    tab: <Electronics />,
  },
  {
    name: "SP電子",
    tab: <SPElectronics />,
  },
  {
    name: "PLAY電子",
    tab: <PlayElectronics />,
  },
];
const Electronic = () => {
  const [active, setActive] = useState(0);
  const [tabControl, setTabControl] = useState(dataTabs[0].tab);
  const isMobile = useContext(MediaQueryContext);

  return (
    <div className={cx(!isMobile ? "wrapper" : "wrapper-mobile")}>
      <div className={cx("fiel")}>
        <BannerSlide
          container={false}
          data={dataBanner}
          className={cx("img-banner")}
        >
          <div className={cx("background-number")}>
            <img src={ELECTRONIC.Bg} />
          </div>
          <div className={cx("number")}>
            <img src={ELECTRONIC.Num1} />
            <img className={cx("doc")} src={ELECTRONIC.Rectangle} />
            <img src={ELECTRONIC.Num9} />
            <img src={ELECTRONIC.Num3} />
            <img src={ELECTRONIC.Num4} />
            <img className={cx("doc")} src={ELECTRONIC.Rectangle} />
            <img src={ELECTRONIC.Num5} />
            <img src={ELECTRONIC.Num2} />
            <img className={cx("num7")} src={ELECTRONIC.Num7} />
            <img className={cx("doc")} src={ELECTRONIC.Rectangle} />
            <img src={ELECTRONIC.Num6} />
            <img className={cx("num7")} src={ELECTRONIC.Num} />
            <img src={ELECTRONIC.Num8} />
          </div>
        </BannerSlide>
      </div>
      <div className={cx("container")}>
        <div className={cx("wrapper-block")}>
          <div className={cx("block1")}>
            {dataTabs.map((item, i) => (
              <Button
                className={cx( active === i ? "active" : "")}
                key={i}
                onClick={() => {
                  setTabControl(item.tab);
                  setActive(i);}} >
                {item.name}
              </Button>
            ))}
          </div>
          <div className={cx("block2")}>{tabControl}</div>
        </div>
      </div>
    </div>
  );
};

export default Electronic;
