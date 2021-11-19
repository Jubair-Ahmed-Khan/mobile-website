import React, { useState } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './NavigationBar.css';

const NavigationBar = () => {
    const { user, logOut } = useAuth();
    let { pathname } = useLocation();
    if (pathname === '/') {
        pathname = '/home';
    }

    return (
        <div>
            <Navbar collapseOnSelect expand="md" variant="dark" id='navbar'
                className='px-3 px-md-5 py-0 bg-nav-md bg-dark'
            >
                {/* <Container> */}
                <Navbar.Brand as={NavLink} to='/home' className='py-2 text-danger fs-1 fw-bold'>
                    Mobile
                    <span className="text-info">HUT</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/home' className='my-nav-link'  >
                            Home
                        </Nav.Link>
                        <Nav.Link as={NavLink} to='/services' className='my-nav-link'  >
                            Explore
                        </Nav.Link>

                        {
                            (user.displayName || user.email)
                                ?
                                <>

                                    <Nav.Link as={NavLink} to='/dashboard' className='my-nav-link'  >
                                        Dashboard
                                    </Nav.Link>
                                    <span className="text-info fw-bold pt-4 ms-4">{user.displayName}</span>
                                    <Nav.Link as={NavLink} to='/login' className='my-nav-link' onClick={logOut}>
                                        <button className="btn btn-danger">Log Out</button>
                                    </Nav.Link>

                                </>
                                :
                                <Nav.Link as={NavLink} to='/login' className='my-nav-link'  >
                                    Log In
                                </Nav.Link>
                        }

                    </Nav>
                </Navbar.Collapse>
                {/* </Container> */}
            </Navbar >
        </div>
    );
};

export default NavigationBar;