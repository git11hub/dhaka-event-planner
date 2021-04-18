import React, { useContext } from 'react';
import jwt_decode from "jwt-decode";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    // var token = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjJjOGUyYjI5NmM2ZjMyODRlYzMwYjg4NjVkNzI5M2U2MjdmYTJiOGYiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiYWwgemFoaWQiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FPaDE0R2lzYUk4S3VQTmsydks4emFGR1VXTzIzMy0yak5vVUhkcEVDd1pDPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2RoYWthLWV2ZW50LXBsYW5uZXIiLCJhdWQiOiJkaGFrYS1ldmVudC1wbGFubmVyIiwiYXV0aF90aW1lIjoxNjE4NzYwNDE5LCJ1c2VyX2lkIjoiNjR4MlRINWdZblJXaEVXSWNyUTl1N0pIRVJ4MiIsInN1YiI6IjY0eDJUSDVnWW5SV2hFV0ljclE5dTdKSEVSeDIiLCJpYXQiOjE2MTg3NjA0MjAsImV4cCI6MTYxODc2NDAyMCwiZW1haWwiOiJhbHphaGlkcmFiYmlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMTQxMjk3NjYzMzMxNzQyNjQ0OTciXSwiZW1haWwiOlsiYWx6YWhpZHJhYmJpQGdtYWlsLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6Imdvb2dsZS5jb20ifX0.iSNFQmx0C5SWFjJrBTGmi43xRXVkcZnwPGYx64IwTq7ZZ64_Kqt2EhNnFwYHSv7q9kGXAOzn6KkDXA5AuMsyikiBvgM2cm1mDxbJUj4ZeDJy6W5WSUGmbn8Kpm46x728WfnmMZh7PGQpgA8DiwjkSo2mrNHh9e1S11h5bnXrQctFb8qahV0mer9tgBW148b6M9mHqjvprhQkVzv-vIJlAqxbwPh_aTpuEd7YkJ9PrXOv0GPyUVBekXuV0qjr6gBNbDuoXiDd_vtn5aYFtv7HLT10GHofdmH-PK-hmnm72ylfNToyRkDpxeRuEV5PtPsDZwHfUt_ORZ9BVSVHxFcu5A";
    
    // var decoded = jwt_decode(token);
    // console.log(decoded);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                (loggedInUser.email) || sessionStorage.getItem('token') ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;