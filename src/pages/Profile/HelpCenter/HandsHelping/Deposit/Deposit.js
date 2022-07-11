import React from 'react'
import classNames from 'classnames/bind'
import styles from './Deposit.module.scss'

const cx = classNames.bind(styles)

const dataRule = [
  {
    id: 1,
    title: "如何儲值？",
    description: [
      {
        key: 1,
        paragrap: "首先您需要加入博天堂娛樂會員，在您註冊完成後登入博天堂娛樂帳戶，即可在首頁右上角找到儲值按鈕，進入後即可找到適合您的存款方式。",
      },{
        key:2,
        paragrap: "作為我們尊貴的客戶，我們會一直努力讓銀行免收取何任費用，讓你不會被我們收取任何在存款時或從您的帳戶中提款時的費用。"
      }
    ],
  },
  {
    id: 2,
    title: "儲值一般多久到帳戶？",
    description: "系統約於5~20分鐘內自動入點，若繳費完90分鐘後點數仍未入帳，請洽詢線上客服。",
  },
]

const Deposit = () => {
  return (
    <div className={cx('deposit')}>
   {dataRule.map((item, i) => (
        <div key={i} className={cx("rule")}>
          <span className={cx("rule-id")}>{item.id}</span>
          <div className={cx("information")}>
            <p className={cx("title")}>{item.title}</p>
            <span>
              {Array.isArray(item.description) ? (
                item?.description.map((des, id) => (
                  <React.Fragment key={id}>
                    {des?.paragrap} <br />
                  </React.Fragment>
                ))
              ) : (
                <>{item.description}</>
              )}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Deposit