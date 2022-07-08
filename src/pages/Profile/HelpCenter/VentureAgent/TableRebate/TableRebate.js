import React from 'react'
import styles from './TableRebate.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles);
const TableRebate = ({className}) => {
  return (
    <table className={cx('table-rebate',className)}>
        <thead>
            <tr>
                <th colSpan="3">退傭</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>輸贏值</td>
                <td>退傭比例</td>
                <td>活躍人數</td>
            </tr>
            <tr>
                <td>10W</td>
                <td>20%</td>
                <td>有效會員人數3個</td>
            </tr>
        </tbody>
    </table>
  )
}

export default TableRebate