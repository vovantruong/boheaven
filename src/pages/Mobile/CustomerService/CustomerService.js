import React,{useContext, useEffect} from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { MediaQueryContext } from '~/Context/MainContext'

const CustomerService = () => {
    const isMobile = useContext(MediaQueryContext);
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        if(!isMobile){
            navigate("/")
        }
    },[pathname])

  return (
    <div>CustomerService</div>
  )
}

export default CustomerService