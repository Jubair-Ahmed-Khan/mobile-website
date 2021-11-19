import './Specialities.css'
const Specialities = () => {
    return (
        <div className='my-5'>
            <div className="container">
                <h1 className="text-center pt-5 fw-bold">Why Choose US</h1>
                <h5 className="text-center  text-secondary text-muted">We provide high quality products and services</h5>
                <div className="row g-4 row-cols-lg-3 row-cols-md-3 row-cols-1 my-5">
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">
                            <img src='https://i.ibb.co/YDxhTCN/mobile-service.jpg' className="card-img-top w-50 mx-auto my-3 speciality-img" alt="speciality" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Mobile Servicing</h5>
                                <p className="card-text text-center">We have enough servicing experts to provide our customer free servicing</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">
                            <img src='https://i.ibb.co/qJphS9S/01-Location.png' className="card-img-top w-50 mx-auto my-3 speciality-img" alt="speciality" />
                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Within Your Reach</h5>
                                <p className="card-text text-center">We have showrooms almost in every cities in our country</p>
                            </div>
                        </div>
                    </div>
                    <div className="col ">
                        <div className="card h-100 border-0 single-speciality">

                            <img src='https://i.ibb.co/GPMc5QW/COVID-19-Quarantine-Coronavirus-epidemic-Free-Delivery-Man-in-a-protective-mask-carries-food-on-a-mo.jpg' className="card-img-top w-50 mx-auto my-3 speciality-img" alt="speciality" />

                            <div className="card-body">
                                <h5 className="card-title text-center fw-bold">Home Delivery</h5>
                                <p className="card-text text-center">We are always here to deliver your desired mobile without any delivery charge</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Specialities;
