import { Button, Container } from 'react-bootstrap';
import React, { useContext, useEffect } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import jwt_decode from "jwt-decode";
import { Link } from 'react-router-dom';
import NavBar from '../Shared/NavBar/NavBar';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // console.log(loggedInUser);

    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = (e) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email } = result.user;
                const signedInUser = {name: displayName, email};

                setUserToken();
                // console.log(signedInUser);
                // setLoggedInUser(signedInUser);                
                history.replace(from);

                // sessionStorage('token', signedInUser)

            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
            e.preventDefault();
    }

    const setUserToken = () => {
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken);
            history.replace(from);
          }).catch(function(error) {
            // Handle error
          });
    }

    useEffect(()=>{
        const token = sessionStorage.getItem('token');
        if (token) {
            const decoded = jwt_decode(token);
            console.log(decoded);
            const {name, email} = decoded;
            const user = {name, email};
            setLoggedInUser(setLoggedInUser);
            history.replace(from);
        }
    }, [])

    return (
        <Container>
            <NavBar/>
            <div className="card bg-light ms-auto my-3 p-4 w-50">
                <form>
                    <div className="p-4">
                        <div className="py-2">
                            <input className="form-control" name='email' defaultValue='' type="text" placeholder="Email" required />
                        </div>
                        <div className="py-2">
                            <input className="form-control" name='password' defaultValue='' type="password" placeholder="Password" required />
                        </div>
                        {/* <p className='text-danger'>error</p> */}
                        <div className="py-3 text-center">
                            <button className='btn button-white bg-info w-50'>Login</button>
                            <p className='text-center m-auto pt-5'>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                            <button className='btn mt-4 bg-success text-white' onClick={handleGoogleSignIn}><img style={{ width: "20px" }} src="https://image.similarpng.com/very-thumbnail/2020/12/Illustration-of-Google-icon-on-transparent-background-PNG.png" alt="goggleLogo" /> Continue With Google</button>
                        </div>

                    </div>
                </form>
            </div>
            {/* <Button className="m-5" onClick={handleGoogleSignIn} variant="warning"><strong>Google Sign In</strong></Button> */}
        </Container>
    );
};

export default Login;