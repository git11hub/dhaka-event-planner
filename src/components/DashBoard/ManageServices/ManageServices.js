import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const ManageServices = () => {
    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <h1>Manage Services...</h1>                    
                </Col>
            </Row>
        </>
    );
};

export default ManageServices;