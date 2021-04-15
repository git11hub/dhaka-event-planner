import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const MakeAdmin = () => {
    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <h1>Make Admin...</h1>                    
                </Col>
            </Row>
        </>
    );
};

export default MakeAdmin;