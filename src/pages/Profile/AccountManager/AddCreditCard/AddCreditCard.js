import React from 'react'
import classNames from 'classnames/bind'
import styles from './AddCreditCard.module.scss'
import { useNavigate } from 'react-router-dom'

const cx = classNames.bind(styles)

const AddCreditCard = () => {
  const navigate = useNavigate();
  return(
    <div className={cx('')}>
        <button onClick={() => navigate(-1)}>Back</button>
        Add Credit Card
    </div>
  )
}
export default AddCreditCard