import React from 'react'
import classNames from 'classnames/bind'
import styles from './AddBankAccount.module.scss'
import {useNavigate, useOutletContext} from 'react-router-dom'

const cx = classNames.bind(styles)

const AddBankAccount = () => {
  const navigate = useNavigate();
  return(
    <div className={cx('')}>

    </div>
  )
}
export default AddBankAccount