import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { useHistory } from 'react-router';
const ServiceCard = (props) => {
    const history = useHistory();
    const { id, name, img, price } = props.data;

    return (
        < Col >
            <Card className='h-100 pb-3 shadow-lg service-card rounded' >

                <img src={img} className='w-75 mx-auto my-3 rounded-top' height='250px' alt={name} />

                <Card.Body className='py-2' >
                    <Card.Title className='text-primary text-center fw-bold pb-2'>{name}</Card.Title>
                    <Card.Text style={{ textAlign: 'justify' }}>

                    </Card.Text>
                </Card.Body>
                <div className=' px-3 d-flex justify-content-between align-items-center '>
                    <div className='d-flex flex-column'>
                        <h5 className='text-success fw-bold m-0 mt-3'>
                            Price: <span className="text-danger fw-bold">{price} Tk</span>
                        </h5>
                        <br />
                    </div>
                    <Button variant='info' onClick={() => { history.push(`/service/${id}`) }} >
                        View Details
                    </Button>
                </div>
                {
                    props?.from === '/dashboard/manage-service' &&
                    <div className='text-center mt-3 mb-2 '>
                        <Button variant='success' onClick={() => props?.event(id)} className='text-white w-75 mx-2'>
                            Delete
                        </Button>
                    </div>

                }
            </Card >
        </Col>

    );
};

export default ServiceCard;