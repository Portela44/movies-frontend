import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  let navigate = useNavigate();
  return (
    <div className="navbar">
      <NavLink className={element => (element.isActive? "selected":"")} to="/"> Home </NavLink>
      <NavLink className={element => (element.isActive? "selected":"")} to="/new"> New </NavLink>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  )
}
