import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from '../../Shared/NavBar/NavBar';

const SignUp = () => {

    

    return (
        <Container>
            <NavBar />
            <div className="card bg-light ms-auto my-3 p-4 w-50">
                <form>
                    <div className="p-4">
                        <div className="py-2">
                            <input className="form-control" name='name' type="text" placeholder="Your Name" required />
                        </div>
                        <div className="py-2">
                            <input className="form-control" name='email' type="text" placeholder="Email" required />
                        </div>
                        <div className="py-2">
                            <input className="form-control" name='password' type="password" placeholder="Password" required />
                        </div>
                        {/* <p className='text-danger'>{user.error}</p> */}

                        <div className="py-3 text-center">
                            <button className='btn button-white w-50 bg-info'>Sign Up</button>
                            <p className='text-center m-auto pt-4'>Already have an account? <Link to="/login">Login</Link></p>
                            {/* <button className='google-login-button btn mt-4 bg-info text-white' ><img style={{ width: "20px" }} src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="goggleLogo" /> Continue With Google</button> */}
                        </div>


                    </div>
                </form>

            </div>
        </Container>
    );
};

export default SignUp;