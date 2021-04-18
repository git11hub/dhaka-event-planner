import React from 'react';
import { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import { EventsContext } from '../../../App';
import SideBarComponent from '../SideBarComponent/SideBarComponent';

const ManageServices = () => {

    const [events, setEvents] = useContext(EventsContext); 
    console.log(events);

    return (
        <>
            <Row>
                <Col md={3}>
                    <SideBarComponent></SideBarComponent>
                </Col>
                <Col md={9}>
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.map(event => <h3>hi</h3>)
                            }
                            {/* {
                                orders.map(order =>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{order.event}</td>
                                        <td>{order.price}</td>
                                        <td>Pending</td>
                                    </tr>)
                            } */}
                        </tbody>
                    </table>
                </Col>
            </Row>
        </>
    );
};

export default ManageServices;