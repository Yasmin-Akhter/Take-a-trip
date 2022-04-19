import React from 'react';
import { Navbar as nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png';
import { signOut } from 'firebase/auth';

import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (


        <nav className='d-flex align-items-center justify-content-center justify-content-between  text-white sticky-top'>

            <div>
                {/* <img src={logo} alt="" /> */}
                <h3> Take A Trip</h3>
            </div>
            <div className="nav-link d-flex">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About us</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/Packages">Packages</CustomLink>
                <CustomLink to="/checkOut">Checkout</CustomLink>
                {
                    user ? <button onClick={handleSignOut} className='btn btn-link'> SignOut</button> :
                        <CustomLink to="/Login">Login</CustomLink>
                }

            </div>

        </nav >
    );
};

export default Header;