import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { EventsContext } from '../../App';

const EventDetails = () => {

    const { id } = useParams();

    const [events, setEvents] = useContext(EventsContext);
    console.log(events);

    const selectedEvent = events.find(event => event._id == id);
    console.log(selectedEvent.event);

    const order = () => {
        console.log('clicked on order button');

        // const url = `http://localhost:5055/order`;

        // fetch(url, {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(selectedEvent)
        // })
        //     .then(res => console.log('server side response', res))
    }

    return (
        <Container className="mt-5">
            
                <h2>{selectedEvent.event}</h2>
                <p>{selectedEvent.description}</p>
            
            <Row>
                <Col>
                    <h2>${selectedEvent.price}</h2>
                </Col>
                <Col>
                    <Button onClick={order}>Order</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default EventDetails;