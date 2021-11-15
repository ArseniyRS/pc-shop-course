import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import '../../styles/navbar.scss'


const Navbar = () => {
    const {isAuthorized, setIsAuthorized} = useContext(AuthContext)
    return (
        <div className={'navBar'}>
            <div className="container navBar-container">
                <Link className={'navBar__item'}  to={'/'}>Home</Link>
                {!isAuthorized &&
                <>
                <Link className={'navBar__item'}  to={'/login'}>Log In</Link>
                <Link className={'navBar__item'} to={'/sign-up'}>Sign Up</Link>
                </>
                }
                <Link className={'navBar__item'} to={'/about'}>About</Link>
                <Link className={'navBar__item'} to={'/contact'}>Contact</Link>
                {isAuthorized && <Link className={'navBar__item'} to={'/'} onClick={()=>{
                    setIsAuthorized(false)
                    localStorage.setItem('isAuthorized', false)
                    }}>Logout</Link>}
            </div>
        </div>
    );
};

export default Navbar;