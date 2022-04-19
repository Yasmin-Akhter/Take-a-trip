import React from 'react';
import { Container, Nav, Navbar as nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import logo from '../../../images/logo/logo.png';
import { signOut } from 'firebase/auth';

import CustomLink from '../../CustomLink/CustomLink';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    return (

        <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <h3> Take A Trip</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">



                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/about">About us</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                        <CustomLink to="/Packages">Packages</CustomLink>
                        <CustomLink to="/checkOut">Checkout</CustomLink>
                        {
                            user ? <button onClick={handleSignOut} className='btn btn-link text-decoration-none'> SignOut</button> :
                                <CustomLink to="/Login">Login</CustomLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>



    );
};

export default Header;