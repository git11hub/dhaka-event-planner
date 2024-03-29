import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { OrdersContext, UserContext } from '../../../App';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import SideBarComponent from '../SideBarComponent/SideBarComponent';
import { useParams } from 'react-router';

const OrderList = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    console.log(loggedInUser);

    const { id } = useParams();

    // const [orders, setOrders] = useState({});
    const [orders, setOrders] = useContext(OrdersContext);

    // const selectedOrder = orders.find(order => order._id == id);
    // console.log(selectedOrder);

    useEffect(() => {
        fetch(`https://tranquil-lowlands-10989.herokuapp.com/order`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    return (
        <Row>
            <Col md={3}>
                <SideBarComponent></SideBarComponent>
            </Col>
            <Col md={9}>
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">User Email</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order =>
                                <tr>
                                    <th scope="row"></th>
                                    <td>{loggedInUser.email}</td>
                                    <td>{order.event}</td>
                                    <td>{order.price}</td>
                                    <td>Pending</td>
                                </tr>)
                        }                        
                    </tbody>
                </table>
            </Col>
        </Row>
    );
};

export default OrderList;