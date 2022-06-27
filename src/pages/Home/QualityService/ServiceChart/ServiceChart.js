import React from "react";
import classNames from "classnames/bind";
import styles from "./ServiceChart.module.scss";
import { RadialBarChart, RadialBar, Text, LabelList } from "recharts";
import ImageTransparent from '../../../../assets/images/pages/home/bg-radial-bar.png'

const cx = classNames.bind(styles);


const initialChart = [
  {
    name: "All",
    fill: "#fff",
    value: 100,
  },
];

const circleSize = 150;

const ServiceChart = ({ className,data, ...props }) => {

  const dataChart = [...initialChart, ...data, ...data]

  return (
    <div key={props.key} className={cx("service-chart", className)}>
      <div className={cx("radial-bar")}>
        <RadialBarChart
          width={circleSize}
          height={circleSize}
          cx={circleSize / 2}
          cy={circleSize / 2}
          startAngle={270}
          endAngle={-90}
          innerRadius={30}
          outerRadius={circleSize / 2}
          data={dataChart}
          barSize={15}
        >
          <RadialBar background={{fill: '#ecf0ff'}} dataKey="value">
          </RadialBar>
        </RadialBarChart>
        <div className={cx("span-middle")}>
          <h4>
            {dataChart[1].value ? dataChart[1].value : 'No key `value`'}
            <p>{dataChart[1].character ? dataChart[1].character : ''}</p>
          </h4>
        </div>
      <img className={cx('bg-chart-transparent')} src={ImageTransparent}/>
      </div>
      <div className={cx('title-chart')}>
        <p>{dataChart[1].title ? dataChart[1].title : 'No key `title`'}</p>
      </div>
    </div>
  );
};

export default ServiceChart;
