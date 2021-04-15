import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Event = () => {
    return (
        <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src="http://www.kathaweddings.com/uploads/kathaweddings/home_ban_1.jpg" />
                <Card.Body>
                    <Card.Title><h4>{}</h4></Card.Title>
                    <Card.Text>
                        <h3><strong>Event Name:</strong> {}</h3>
                    </Card.Text>
                    <Button variant="primary">Details...</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Event;