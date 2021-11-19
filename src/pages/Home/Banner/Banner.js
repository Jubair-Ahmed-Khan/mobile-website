import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import './Banner.css';
const Banner = () => {
    const src = "https://i.ibb.co/jRj2Fhp/mobile.png";
    return (
        <div style={{ backgroundColor: "lightsteelblue" }}>
            <Container>
                <Row className="py-5">

                    {/* header image  */}
                    <Col sm={12} md={6} lg={6}>
                        <div className="mt-5">
                            <img className="img-fluid" src={src} alt="welcome_image" />
                        </div>
                    </Col>

                    {/* header text  */}
                    <Col sm={12} md={6} lg={6}>
                        <div className="mt-5 pt-4">
                            <h1 className="text-danger text-uppercase">
                                We Help People <br />
                                <span className="text-black">To Stay Connected</span>
                            </h1>
                            <p className="my-5">
                                We have a huge collections of mobiles of different companies.Latest models of phones are always available here.We provide our customers at a cheapest rate. Customer's satisfaction is our priority.
                            </p>
                            <a className="btn btn-dark text-white" href="https://www.youtube.com">Learn More</a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>




        // <div >
        //     <Carousel variant="dark">
        //         <Carousel.Item>
        //             <div
        //                 style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img1})` }} className='banner-pos'>
        //             </div>
        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <div
        //                 style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img2})` }} className='banner-pos'>
        //             </div>

        //         </Carousel.Item>
        //         <Carousel.Item>
        //             <div
        //                 style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1)),url(${img3})` }} className='banner-pos'>
        //             </div>
        //         </Carousel.Item>
        //     </Carousel>
        // </div>
    );
};

export default Banner;