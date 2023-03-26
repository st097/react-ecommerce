import React from "react";
import {NavLink} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Account.scss'
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
const Account=()=>{
    const loggeduser=JSON.parse(localStorage.getItem('user'));
    return(
        <div className="account">
            <div className="name">
            <AccountCircleIcon className="icon"/><span className="surname">{loggeduser.name} {loggeduser.surname}</span>
            </div>
            <div className="row">
            <p><NavLink to='/profile' className='link'>My Account</NavLink></p>
            <p><NavLink to='/login' className='link'>Log In/Sign Up <LoginIcon className="icon"/></NavLink></p>
            <p>Log Out <LogoutIcon className="icon"/></p>
        </div>
    </div>
    )
}
export default Account;