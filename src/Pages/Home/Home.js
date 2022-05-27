import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Products from './Products';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <h1 className='text-amber-600'>Home page</h1>
            <Banner></Banner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
        </div>
    );
};

export default Home;