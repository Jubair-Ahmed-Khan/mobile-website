import React from 'react';
import Banner from '../Banner/Banner';
import MobileDemo from '../MobileDemo/MobileDemo';
import Review from '../Review/Review';
import Specialities from '../Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MobileDemo></MobileDemo>
            <Review></Review>
            <Specialities></Specialities>
        </div>
    );
};

export default Home;