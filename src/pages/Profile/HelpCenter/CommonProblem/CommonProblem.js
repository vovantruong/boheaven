import React, { useState } from "react";
import styles from "./CommonProblem.module.scss";
import classNames from "classnames/bind";
import { BsChevronRight } from "react-icons/bs";
import { dataCommon } from "~/constants/mocks/DataHeplCenter/dataCommonProblem";

const cx = classNames.bind(styles);

const CommonProblem = () => {
  const [active, setActive] = useState(0);

  const handleCollapse = (id) => {
    // setVisible(!visible);
    setActive(id)
    if(active === id){
      setActive(null);
    }
  };

  return (
    <div className={cx("common-problem")}>
      {dataCommon.map((rule, id) => (
        <div key={id} className={cx("problem-item", { ["active"]: active === id})}>
          <button
            onClick={() => handleCollapse(id)}
            className={cx("action-collapse")}
          >
            <h4>{rule.title}</h4>
            <BsChevronRight className={cx("icon")} />
          </button>
          <div className={cx('content')}>
              {
                rule.description.map((desc, index) => (
                  <p key={index}>{desc.paragrap}</p>
                ))
              }
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonProblem;
