import React from 'react';
import Navbar from '../../Navbar/Navbar';
import Products from '../../Products/Products';
import Watchbg from '../../Watchbg/Watchbg';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <Watchbg />
            <Products/>
        </div>
    );
};

export default Home;