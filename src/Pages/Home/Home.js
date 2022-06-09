import React from 'react';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import Products from './Products';
import Summary from './Summary';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Info></Info>
            <Summary></Summary>
            <Contact></Contact> 
            
        </div>
    );
};

export default Home;