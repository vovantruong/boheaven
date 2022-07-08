import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./HandsHelping.module.scss";
import WithDrawal from "./WithDrawal/WithDrawal";
import Deposit from "./Deposit/Deposit";
import TurningPoint from "./TurningPoint/TurningPoint";

const cx = classNames.bind(styles);

const dataTabs = [
  {
    name: "提款",
    tab: <WithDrawal />,
  },
  {
    name: "存款",
    tab: <Deposit />,
  },
  {
    name: "轉點",
    tab: <TurningPoint />,
  },
];

const HandsHelping = () => {
  const [tabControl, setTabControl] = useState(dataTabs[0].tab);
  const [active, setActive] = useState(0);

  return (
    <div className={cx("hands-help")}>
      <div className={cx("action-tabs")}>
        {dataTabs.map((item, i) => (
          <button
            key={i}
            className={cx(active === i && "active")}
            onClick={() => {
              setActive(i);
              setTabControl(item.tab);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className={cx("tab-pane")}>{tabControl}</div>
    </div>
  );
};
export default HandsHelping;