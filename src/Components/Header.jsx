import React from 'react';
import '../style/Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
          <h1>LOGO GO</h1>
            <Link to={"/"}>HOME</Link>
            <Link to={"/Cart"}>Cart</Link>
            <Link to={"/Help"}>Help</Link>
            <div className="Search">
                <input type="text" list="city" placeholder="Search"/>
                <button type="button">SEARCH</button>
            </div>
        </nav>
    );
};

export default Header;
