import { Button, Container } from 'react-bootstrap';
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import bgImage from '../../../images/banner.jpg'
import { Carousel } from 'react-bootstrap';

const Hero = () => {
    return (        
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Marriage Event</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1131&q=80"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Birthday Event</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Corporate Event</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    );
};

export default Hero;