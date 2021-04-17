import { Button } from 'react-bootstrap';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';
import css from './Testimonial.css'

const Testimonial = ({review}) => {
    return (
        <Col>
            <Card className="mt-5" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={review.userImageURL} />
                <Card.Body>
                    <Card.Title>{review.userName}</Card.Title>
                    <Card.Text>
                        <p>{review.description}</p>
                    </Card.Text>
                    <Button variant="primary">Details...</Button>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Testimonial;