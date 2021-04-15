import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';
import Hero from '../Hero/Hero';
import OurTeam from '../OurTeam/OurTeam';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import Pricing from '../Pricing/Pricing';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <Container>
            <NavBar></NavBar>
            <Hero></Hero>
            <Services></Services>
            <Testimonial></Testimonial>
            <PhotoGallery></PhotoGallery>
            <OurTeam></OurTeam>
            <Pricing></Pricing>
            <Footer></Footer>
        </Container>
    );
};

export default Home;