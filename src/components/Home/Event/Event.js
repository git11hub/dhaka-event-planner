import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { useSpring, animated } from 'react-spring'

const Event = ({ event }) => {
    // console.log(event);

    const history = useHistory();

    const details = () => {
        history.push(`/eventDetails/${event._id}`);
    };

    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    
    return (
        <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
            <animated.div style={props}>
                <Card.Img variant="top" src={event.imageURL} />
                </animated.div>
                <Card.Body>
                    <Card.Title>{event.event}</Card.Title>
                    <Card.Text>
                        {/* <h3><strong>{event.event}</strong> {}</h3> */}
                    </Card.Text>
                    <Button onClick={details} variant="primary">Details...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;