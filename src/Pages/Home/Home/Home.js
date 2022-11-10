import React from 'react';
import useTitle from '../../../Hooks/Usetitle';
import Carousel from '../../Shared/Carousel/Carousel';
import Services from '../Services/Services';
import About from '../../Shared/About/About'
import Contact from '../../Shared/Contact/Contact';
import Steps from '../../Shared/Steps/Steps';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Carousel></Carousel>
            <About></About>
            <Services></Services>
            <Steps></Steps>
            <Contact></Contact>
        </div >
    );
};

export default Home;