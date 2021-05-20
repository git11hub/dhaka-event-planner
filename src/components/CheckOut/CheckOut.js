import React from 'react';
import { Container } from 'react-bootstrap';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import NavBar from '../Shared/NavBar/NavBar';

const CheckOut = () => {
    return (
        <Container>
            <NavBar></NavBar>
            <h3>This is checkout...</h3>
            <ProcessPayment />
        </Container>
    );
};

export default CheckOut;