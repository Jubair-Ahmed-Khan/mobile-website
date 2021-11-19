import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useMobile from '../../../hooks/useMobile';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const { mobile, isLoadingMobile } = useMobile();
    if (isLoadingMobile) {
        return (
            <div className='mt-5 pt-4 text-center' style={{ height: '70vh' }} >
                <Spinner animation='grow'></Spinner>
            </div>);
    }
    else {
        return (
            <div className='mt-3 pt-5'>
                <h1 className='text-center fw-bold mb-5' >Our Mobile</h1>
                <Container>
                    <Row md={2} lg={3} sm={2} xs={1} className="g-2 m-0 my-3">
                        {mobile.map(x => <ServiceCard key={x.id} data={x}></ServiceCard>)}
                    </Row>
                </Container>
            </div>
        );
    }
};

export default Services;