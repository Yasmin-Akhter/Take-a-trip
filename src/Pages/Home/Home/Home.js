import React from 'react';
import Reviews from '../../Reviews/Reviews';
import Slider from '../Slider/Slider';

import Services from './Services/Services';

const Home = () => {
    return (
        <div>

            <Slider></Slider>
            <Services></Services>
            <Reviews></Reviews>

        </div>
    );
};

export default Home;