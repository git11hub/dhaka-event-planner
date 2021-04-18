import React, { useContext, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { AdminsContext, EventsContext, UserContext } from '../../../App';
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

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [events, setEvents] = useContext(EventsContext);
    const [admins, setAdmins] = useContext(AdminsContext);
    // console.log(admins[0].adminEmail.length);
    console.log(loggedInUser.email);
    
    const myEmail = "alahidrabbi@gmail.com";
    const gotEmail = admins.find(admin => admin.adminEmail == myEmail);
    // console.log(gotEmail.adminEmail);
    
    // const [events, setEvents] = useState([]);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://tranquil-lowlands-10989.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);

    useEffect(() => {
        fetch('https://tranquil-lowlands-10989.herokuapp.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    useEffect(() => {
        fetch('https://tranquil-lowlands-10989.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, []);

    

    return (
        <>
            <Container>
                {/* <h2>hi: {loggedInUser.email}</h2> */}
                {/* {gotEmail ?<h2>hi: {gotEmail.adminEmail}</h2>: <h3>paini re...</h3>}
                {
                    admins.map(admin => <h3>hi</h3>)
                } */}
                <NavBar></NavBar>
            </Container>
            <Hero></Hero>
            <Container>
                <h1 class="font-weight-light text-center text-lg-left mt-5 mb-0">Our Event Projects</h1>
                <hr class="mt-2 mb-1" />
                <Row>                    
                    {
                        events && events.map(event => <Event event={event}></Event>)
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