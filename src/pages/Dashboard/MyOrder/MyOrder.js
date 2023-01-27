import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useLocation } from 'react-router';
import swal from 'sweetalert';
import useOrder from '../../../hooks/useOrder';
import SingleOrder from '../SingleOrder/SingleOrder'
const MyOrder = () => {
    window.scrollTo(0, 0);
    const location = useLocation();
    const { orders, isLoadingOrder, setOrders } = useOrder();
    const handleStatus = (desiredStatus, id) => {

        swal({
            title: "Are you sure to Delete?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((x) => {
                if (x) {
                    fetch(`https://mobile-hut.onrender.com/deleteOrder/${id}`, {
                        method: 'delete'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal({
                                    title: "Successfully Deleted!",
                                    icon: "success",
                                    button: "Ok",
                                });
                                const remainingUsers = orders.filter(x => x._id !== id);
                                setOrders(remainingUsers);
                            }
                            else {
                                swal({
                                    title: "Failed to delete!",
                                    icon: "warning",
                                    button: "Ok",
                                });
                            }
                        })
                }
            });
    }
    return (
        <div>
            {
                !isLoadingOrder
                    ?
                    orders.length
                        ?
                        <div className="container my-5">
                            <h2 className="text-success text-center my-5">My Orders</h2>
                            <div className="mx-auto">
                                {
                                    orders.map(x => <SingleOrder data={x} key={x._id} from={location.pathname.toLowerCase()} event={handleStatus}></SingleOrder>)
                                }
                            </div>

                        </div>
                        :
                        <div style={{ height: '55vh' }} className='d-flex align-items-center justify-content-center' >
                            <h1 className='text-secondary fw-bold'>
                                You have no placed order
                            </h1>
                        </div>
                    :
                    <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                        <Spinner animation='grow'></Spinner>
                    </div>
            }
        </div>
    );
};

export default MyOrder;