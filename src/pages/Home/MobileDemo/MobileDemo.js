import React from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useMobile from '../../../hooks/useMobile';
import ServiceCard from '../../Service/ServiceCard/ServiceCard';

const MobileDemo = () => {
    const { mobile, isLoadingMobile } = useMobile();
    return (
        <div className="my-5">
            <h1 className='text-center fw-bold my-5'>Special Mobiles</h1>
            {
                isLoadingMobile ?
                    <div className='my-3 text-center' >
                        <Spinner animation='grow'></Spinner>
                    </div> :
                    <Container>
                        <Row lg={4} md={2} sm={2} xs={1} className="g-3 m-0 mt-3">
                            {mobile.slice(0, 6).map(x => <ServiceCard key={x.id} data={x}></ServiceCard>)}
                        </Row>
                    </Container>
            }
        </div>
    );
};

export default MobileDemo;