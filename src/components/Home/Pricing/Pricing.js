import React from 'react';

const Pricing = () => {
    return (
        <>
            <h1 class="font-weight-light text-center text-lg-left mt-4 mb-0">Our Pricing</h1>
            <hr class="mt-2 mb-5" />

            <div class="card-deck">
                <div class="card">
                    <img class="card-img-top" src="https://www.flaticon.com/svg/vstatic/svg/39/39862.svg?token=exp=1618668831~hmac=480e1cccfb8d79517f3023a6afb074f9" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Basic</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$300</h4>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://www.flaticon.com/svg/vstatic/svg/4252/4252330.svg?token=exp=1618668783~hmac=1025bd9703596ee821bc001227189617" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Standard</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$500</h4>
                    </div>
                </div>
                <div class="card">
                    <img class="card-img-top" src="https://www.flaticon.com/svg/vstatic/svg/3644/3644000.svg?token=exp=1618668902~hmac=d88298c52920f5d9e90186c6ff381cbc" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="card-title">Premium</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <h4 class="card-title">$900</h4>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pricing;