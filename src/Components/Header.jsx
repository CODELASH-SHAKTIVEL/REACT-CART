import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">SHOP HERE</nav>
        <nav>
        <Link to={"/"}>HOME</Link>
        <Link to={"/Cart"}>Cart</Link>
        <Link to={"/Help"}>Help</Link>
        </nav>
    </div>
  )
}

export default Header
