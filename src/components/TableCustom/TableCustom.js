import React from "react";
import styles from "./TableCustom.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TableCustom = ({
  dataSource,
  columns,
  className,
  headClassName,
  bodyClassName,
  children,
  colSpanHead,
}) => {
  return (
    <table className={cx("table-custom", className)}>
      <thead className={cx(headClassName)}>
        <tr>
          {columns.map((item, i) => (
            <th key={i} colSpan={colSpanHead}>{item?.name ? item.name : item}</th>
          ))}
        </tr>
      </thead>
      <tbody className={cx(bodyClassName)}>
        {dataSource.map((item, i) => (
          <tr key={i}>
            {item.data.map((child, index) => (
              <td key={index}>{child.name}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableCustom;
