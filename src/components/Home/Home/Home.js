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

    useEffect(() => {
        fetch('http://localhost:5055/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    },[])

    return (
        <Container>
            <NavBar></NavBar>
            <Hero></Hero>
            <Row>
                {
                    events.map(event => <Event event={event}></Event>)
                }
            </Row>

            <Testimonial></Testimonial>
            <PhotoGallery></PhotoGallery>
            <OurTeam></OurTeam>
            <Pricing></Pricing>
            <Footer></Footer>
        </Container>
    );
};

export default Home;