import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IqDm3Ghts85D2Uc3FBbKWjjDOiv5o67Fqe1gTzAAvNlHhD49KRRAj0cgJCcRoX8q3nECElCavzeYp2YvlZi21Fe00zzgGOmtO');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default ProcessPayment;