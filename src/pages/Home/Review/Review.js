import React from 'react';
import { useState } from "react";
import { Carousel, Container, Spinner } from 'react-bootstrap';
import useReview from '../../../hooks/useReview';
import './Review.css';
import Rating from 'react-rating';

const Review = () => {
    const { review, isLoadingReview } = useReview();
    //console.log(review);
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <div className='my-5 py-5 shadow-lg mx-5'>
            <h1 className='text-center fw-bold mt-5 pb-5'>Client's Feedback</h1>
            {
                isLoadingReview ?
                    <div className='my-3 text-center' >
                        <Spinner animation='grow'></Spinner>
                    </div> :
                    <Carousel activeIndex={index} onSelect={handleSelect} fade variant='dark' className='px-3 px-md-5'>
                        {/* <Container> */}
                        {
                            review.map(x => <Carousel.Item key={x._id}>
                                <Container>
                                    <div className='row mx-0 g-3'>
                                        <div className='col-md-4 mx-auto text-center' id='review-user'>
                                            <img
                                                className="d-block rounded-circle mx-auto mb-3"
                                                src={x.img}
                                                alt="First slide"
                                                width='150px'
                                                height='150px'
                                            />
                                            <h4 className='text-capitalize fw-bold'>{x.name}</h4>
                                            <Rating
                                                emptySymbol="fa fa-star-o fa-2x fs-5 text-info"
                                                fullSymbol="fa fa-star fa-2x fs-5 text-info"
                                                initialRating={x.rating}
                                                readonly
                                            />
                                            <h5 className='px-2 py-3 mb-5'>{x.review}</h5>
                                        </div>
                                    </div>
                                </Container>
                            </Carousel.Item>)
                        }
                    </Carousel>
            }
        </div>
    )
};

export default Review;