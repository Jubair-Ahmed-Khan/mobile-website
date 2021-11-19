import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {

    const history = useHistory();
    const src = "https://i.ibb.co/26QDftm/404-error.jpg";

    // redirect to home on button click 
    const redirectHome = () => {
        history.push('/home');
    }

    return (
        <div className="container-fluid">
            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                <img className="img-fluid" src={src} alt="404_error" />
                <br /> <br />
                <button onClick={redirectHome} className="btn btn-dark my-5">Go back to Home</button>
            </div>
        </div>
    );

};

export default NotFound;