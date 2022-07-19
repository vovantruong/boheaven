import React from "react";
import styles from "./TableCustom.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const TableCustom = ({
  dataSource = [],
  columns = [],
  className = "",
  headClassName = "",
  bodyClassName = "",
  background = true,
  panigation = false,
  children,
  colSpanHead,
}) => {
  return (
    <div className={cx("table-custom", className, !background && "non-bg")}>
      <table>
        <thead className={cx(headClassName)}>
          <tr>
            {columns.map((item, i) => (
              <th key={i} colSpan={colSpanHead}>
                {item?.name ? item.name : item}
              </th>
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
      {panigation && 
        <nav className={cx("panigation")}>
          <ul className={cx('list-btn')}>
              <li className={cx('disable')}>{'<'}</li>
              <li className={cx('active')}>1</li>
              <li>2</li>
              <li>...</li>
              <li>9</li>
              <li>10</li>
              <li>{'>'}</li>
          </ul>
        </nav>
      }
    </div>
  );
};

export default TableCustom;
