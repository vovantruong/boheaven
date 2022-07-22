import React, { useState } from "react";
import styles from "./HelpCenter.module.scss";
import classNames from "classnames/bind";
import CommonProblem from "./CommonProblem/CommonProblem";
import HandsHelping from "./HandsHelping/HandsHelping";
import VentureAgent from "./VentureAgent/VentureAgent";
import BoxInforProfile from "~/components/BoxInfoProfile/BoxInforProfile";

const cx = classNames.bind(styles);

const dataTabs = [
  {
    name: "新手幫助",
    tab: <HandsHelping />,
  },
  {
    name: "合營代理",
    tab: <VentureAgent />,
  },
  {
    name: "常見問題",
    tab: <CommonProblem />,
  },
];

const HelpCenter = () => {
  const [tabControl, setTabControl] = useState(dataTabs[0].tab);
  const [active, setActive] = useState(0);

  return (
    <div className={cx("help-center")}>
      <BoxInforProfile
        className={cx("tab-head")}
        titleHead="通知中心"
        bodyClassName={cx("wrap-tabs")} >
        <div className={cx("action-tabs")}>
          {dataTabs.map((item, i) => (
            <button
              className={cx(active === i ? "active" : "")}
              key={i}
              onClick={() => {
                setTabControl(item.tab);
                setActive(i); }}>
              {item.name}
            </button>
          ))}
        </div>
      </BoxInforProfile>
      <BoxInforProfile
        className={cx("tab-pane")}
        bodyClassName={cx(active === 0 && "tab-hands")}
      >
        {tabControl}
      </BoxInforProfile>
    </div>
  );
};

export default HelpCenter;
