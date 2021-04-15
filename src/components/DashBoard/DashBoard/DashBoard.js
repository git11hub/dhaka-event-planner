import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Admin from '../Admin/Admin';
import OrderList from '../OrderList/OrderList';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import User from '../User/User';

const DashBoard = () => {
    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <OrderList></OrderList>                    
                </Col>
            </Row>
        </>
    );
};

export default DashBoard;