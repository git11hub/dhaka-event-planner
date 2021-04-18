import { Button } from 'react-bootstrap';
import React, { useContext } from 'react';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

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
                // console.log(signedInUser);
                setLoggedInUser(signedInUser);                
                history.replace(from);

                setUserToken();

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
          }).catch(function(error) {
            // Handle error
          });
    }

    return (
        <div>
            <Button className="m-5" onClick={handleGoogleSignIn} variant="warning"><strong>Google Sign In</strong></Button>
        </div>
    );
};

export default Login;