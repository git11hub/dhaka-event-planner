import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Event from '../Event/Event';
import Hero from '../Hero/Hero';
import OurTeam from '../OurTeam/OurTeam';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Pricing from '../Pricing/Pricing';
// import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {

    const [events, setEvents] = useState([]);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    useEffect(() => {
        fetch('http://localhost:5055/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    return (
        <>
            <Container>
                <NavBar></NavBar>
            </Container>
            <Hero></Hero>
            <Container>
                <Row>
                    {
                        events.map(event => <Event event={event}></Event>)
                    }
                </Row>
                <PhotoGallery></PhotoGallery>
                <OurTeam></OurTeam>
                <Row>
                    {
                        reviews.map(review => <Testimonial review={review}></Testimonial>)
                    }
                </Row>
                
                <Pricing></Pricing>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;