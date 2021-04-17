import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Event = ({event}) => {
    console.log(event);

    const history = useHistory();

    const details = () => {
        history.push(`/eventDetails/${event._id}`);
    }
    return (        
        <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={event.imageURL} />
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