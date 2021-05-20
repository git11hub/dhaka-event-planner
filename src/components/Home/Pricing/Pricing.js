import React from 'react';
import { useHistory } from 'react-router';



const Pricing = () => {
    const history = useHistory();

    const payment = () => {
        history.push(`/checkOut`)
    }
    return (
        <>
            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Our Pricing</h1>
            <hr class="mt-2 mb-5" />

            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top w-50" src="https://i.ibb.co/BTcGbVH/basic.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Basic</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$300</h4>
                        <button onClick={payment} className="btn btn-primary">Order</button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top  w-50" src="https://i.ibb.co/q1wXcMZ/standard.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Standard</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$500</h4>
                        <button onClick={payment} className="btn btn-primary">Order</button>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top  w-50" src="https://i.ibb.co/3Fft640/premium.png" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Premium</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$900</h4>
                        <button onClick={payment} className="btn btn-primary">Order</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;