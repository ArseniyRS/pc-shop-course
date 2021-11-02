import React from 'react';
import {Link} from "react-router-dom";
import '../../styles/navbar.scss'


const Navbar = () => {
    return (
        <div className={'navBar'}>
            <div className="container navBar-container">
                <Link className={'navBar__item'}  to={'/login'}>Log In</Link>
                <Link className={'navBar__item'} to={'/sign-up'}>Sign Up</Link>
                <Link className={'navBar__item'} to={'/about'}>About</Link>
                <Link className={'navBar__item'} to={'/contact'}>Contact</Link>
            </div>
        </div>
    );
};

export default Navbar;