import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { NavLink, Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../LogIn/AdminRoute/AdminRoute';
import AddService from '../../Service/AddService/AddService';
import NotFound from '../../Shared/NotFound/NotFound';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrder from '../ManageAllOrder/ManageAllOrder';
import ManageServices from '../ManageServices/ManageServices';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Paymnet/Payment';
import ReviewWrite from '../ReviewWrite/ReviewWrite';
import './Dashboard.css';
const Dashboard = () => {

    const { user, admin, logOut } = useAuth();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for nested routing
    let { path, url } = useRouteMatch();

    const style = {
        color: 'red'
    }
    return (
        <div className='container mt-3 pt-4'>
            <div className='row mx-0 py-2'>
                <h2 className='fw-bold text-center mb-5'>{user.displayName.trim() + "'s"} Dashboard </h2>
                <div className='text-center' >
                    <Button variant="danger mb-5" onClick={handleShow}>
                        Dashboard Menu
                    </Button>
                </div>
            </div>
            <Offcanvas show={show} onHide={handleClose} >
                <Offcanvas.Header closeButton className='bg-success'>
                    <Offcanvas.Title className='text-white' >Dashboard</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                            <h4 className='text-center m-0'>
                                <NavLink exact to={`${url}`} activeStyle={style} style={{ textDecoration: 'none' }}>Profile</NavLink>
                            </h4>
                        </div>
                        {admin ? <>
                            <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}/make-admin`} activeStyle={style} style={{ textDecoration: 'none' }}>Make Admin</NavLink>
                                </h4>
                            </div>

                            <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}/manage-order`} activeStyle={style} style={{ textDecoration: 'none' }}>Manage Orders</NavLink>
                                </h4>
                            </div>
                            <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}/manage-service`} activeStyle={style} style={{ textDecoration: 'none' }}>Manage Services</NavLink>
                                </h4>
                            </div>
                            <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                <h4 className='text-center m-0'>
                                    <NavLink exact to={`${url}/add-service`} activeStyle={style} style={{ textDecoration: 'none' }}>Add Service</NavLink>
                                </h4>
                            </div>

                        </>
                            :
                            <>
                                <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                    <h4 className='text-center m-0'>
                                        <NavLink exact to={`${url}/my-order`} activeStyle={style} style={{ textDecoration: 'none' }}>My Orders</NavLink>
                                    </h4>
                                </div>


                                <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                    <h4 className='text-center m-0'>
                                        <NavLink exact to={`${url}/review`} activeStyle={style} style={{ textDecoration: 'none' }}>Review</NavLink>
                                    </h4>
                                </div>

                                <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                                    <h4 className='text-center m-0'>
                                        <NavLink exact to={`${url}/payment`} activeStyle={style} style={{ textDecoration: 'none' }}>Payment</NavLink>
                                    </h4>
                                </div>
                            </>

                        }
                        <div className='drawer-list-item py-3 border-dark border-bottom' style={{ backgroundColor: "lightblue" }}>
                            <h4 className='text-center m-0' onClick={logOut}>
                                <NavLink exact to='/' activeStyle={style} style={{ textDecoration: 'none' }}>Log Out</NavLink>
                            </h4>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

            <div>
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <Route exact path={`${path}/my-order`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route exact path={`${path}/review`}>
                        <ReviewWrite></ReviewWrite>
                    </Route>
                    <AdminRoute path={`${path}/manage-order`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manage-service`}>
                        <ManageServices></ManageServices>
                    </AdminRoute>
                    <AdminRoute path={`${path}/add-service`}>
                        <AddService></AddService>
                    </AdminRoute>
                    <AdminRoute path={`${path}/make-admin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <Route path={`${path}/*`}>
                        <NotFound></NotFound>
                    </Route>
                </Switch>
            </div>
        </div>
    );
};

export default Dashboard;