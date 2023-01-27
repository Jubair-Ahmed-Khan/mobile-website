import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './ServiceDetails.css';
import { Button, Spinner } from 'react-bootstrap';
import useMobile from '../../../hooks/useMobile';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const history = useHistory();
    const { mobile, isLoadingMobile } = useMobile();
    const [currentService, setCurrentService] = useState({});

    // console.log(admin);

    useEffect(() => {
        setCurrentService(mobile.find(x => x.id === serviceId));
    }, [mobile, serviceId]);

    return (

        isLoadingMobile === false
            ?
            <div className='row m-3 pt-4'>
                <div className="col-sm-12 col-md-6 col-lg-6 shadow-lg">
                    <div className=''>
                        <h2 className='text-center fw-bold py-3'>{currentService?.name}</h2>
                        <div className='mx-3 mt-3  text-center' >
                            <img src={currentService?.img} alt={" image of " + currentService?.name} width='75%' className='rounded' />
                        </div>
                    </div>
                    <div className='py-4 text-center '>

                    </div>
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6 ps-5">
                    <h2 className="text-danger text-center header-margin">Specifications</h2>
                    <table className="table w-100 mt-5">
                        <tbody>
                            <tr>
                                <th className="text-success">Launch</th>
                                <th>{currentService?.launch}</th>
                            </tr>
                            <tr>
                                <th className="text-success">Display</th>
                                <th>{currentService?.display}</th>
                            </tr>
                            <tr>
                                <th className="text-success">Camera</th>
                                <th>{currentService?.camera}</th>
                            </tr>
                            <tr>
                                <th className="text-success">OS</th>
                                <th>{currentService?.os}</th>
                            </tr>
                            <tr>
                                <th className="text-success">RAM</th>
                                <th>{currentService?.ram}</th>
                            </tr>
                            <tr>
                                <th className="text-success">Battery</th>
                                <th>{currentService?.battery}</th>
                            </tr>
                            <tr>
                                <th className="text-success">Price</th>
                                <th>{currentService?.price} Tk</th>
                            </tr>
                        </tbody>
                    </table>
                    <div className="text-center">

                        <Button variant='danger' onClick={() => { history.push(`/order/${currentService?.id}`) }} className='mt-5 text-center' >
                            Buy Now
                        </Button>

                    </div>
                </div>
            </div>
            :
            <div className='mt-5 pt-5 text-center' style={{ height: '100vh' }}>
                <Spinner animation='grow'></Spinner>
            </div>
    );
};

export default ServiceDetails;