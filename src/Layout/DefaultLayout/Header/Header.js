import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  const style = {
    margin: '0 20px',
  }
  return (
    <div style={{display: 'flex'}}>
      <div>Header</div>
        <Link style={style} to="/">Home</Link>
        <Link style={style} to="/bingo">Bingo</Link>
        <Link style={style} to="/chess-and-cards">Chess And Cards</Link>
        <Link style={style} to="/discount">Discount</Link>
        <Link style={style} to="/electronic">Electronic</Link>
        <Link style={style} to="/fishing">Fishing</Link>
        <Link style={style} to="/physical-education">Physical Education</Link>
        <Link style={style} to="/real-person">Real Person</Link>
        <Link style={style} to="/login">Login</Link>
        <Link style={style} to="/register">Register</Link>
    </div>
  )
}

export default Header