import React from 'react';
import Banner from '../Banner/Banner';
import HomeShow from '../HomeShow/HomeShow';
import DisplayReview from '../Review/DisplayReview';
import Summary from '../Summary/Summary';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeShow></HomeShow>
            <Summary></Summary>
            <DisplayReview></DisplayReview>
        </div>
    );
};

export default Home;