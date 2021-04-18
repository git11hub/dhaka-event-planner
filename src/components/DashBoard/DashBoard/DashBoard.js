import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { UserContext } from '../../../App';
import Admin from '../Admin/Admin';
import OrderList from '../OrderList/OrderList';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import User from '../User/User';

const DashBoard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser.email);
    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <h1 className="mt-5">Click Toggle icon to see the options</h1>
                </Col>
            </Row>
        </>
    );
};

export default DashBoard;