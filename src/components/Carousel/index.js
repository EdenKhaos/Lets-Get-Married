import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';


import chipmunk from './imgs/chipmunkad.jpg';
import bishop from './imgs/bishopad.jpg';
import mountain from './imgs/mountainad.jpg';


const CarouselPage = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2500}>
                <img width={1000} height={600}
                    className="d-block w-100"
                    src={chipmunk}
                    alt="first slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img width={1000} height={600}
                    className="d-block w-100"
                    src={bishop}
                    alt="second slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img width={1000} height={600}
                    className="d-block w-100"
                    src={mountain}
                    alt="third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};
export default CarouselPage;