import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <div className='mt-2' style={{ height: '80vh' }}>
            <div className='d-flex flex-column h-100 justify-content-center align-items-center'>
                <div className='mb-3 text-center'>
                    {
                        user.photoURL ?
                            <img src={user.photoURL} alt="" className='' width='120px' />
                            :
                            <img src='https://i.ibb.co/X2sVX2b/profile.png' alt="" className='' width='120px' />
                    }
                </div>
                <p className="fw-bold">Name: <span className="text-success">{user.displayName}</span></p>
                <p className="fw-bold">Email: <span className="text-success">{user.email}</span></p>
            </div>
        </div>
    );
};

export default DashboardHome;