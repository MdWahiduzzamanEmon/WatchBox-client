import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Products from '../../Products/Products';
import Watchbg from '../../Watchbg/Watchbg';
import Banner from '../Banner/Banner';
import GetReview from '../GetReview/GetReview';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Watchbg />
            <Products />
            <GetReview/>
        </div>
    );
};

export default Home;