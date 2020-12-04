import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";


import chipmunk from './imgs/chipmunk.jpg';
import bishop from './imgs/bishop.jpg';
import mountain from './imgs/mountain.jpg';


const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={chipmunk}
                    alt="chipmunk"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={bishop}
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={mountain}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};
export default CarouselPage;