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
                <h1 class="font-weight-light text-center text-lg-left mt-5 mb-0">Our Event Projects</h1>
                <hr class="mt-2 mb-1" />
                <Row>
                    {
                        events.map(event => <Event event={event}></Event>)
                    }
                </Row>
            </Container>
            <PhotoGallery></PhotoGallery>
            <Container>
                {/* <OurTeam></OurTeam> */}
                <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Client Reviews</h1>
                <hr class="mt-2 mb-1" />
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