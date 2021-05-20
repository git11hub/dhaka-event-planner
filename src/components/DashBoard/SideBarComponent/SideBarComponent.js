import React, { useContext, useEffect, useState } from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { UserContext } from '../../../App';

import jwt_decode from "jwt-decode";

const SideBarComponent = () => {

    // const [admins, setAdmins] = useContext(AdminsContext);
    // console.log(admins);

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);

    const [newTestAdmin, setNewTestAdmin] = useState({});

    const [isAdmin, setIsAdmin] = useState(false);

    // const []
    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (token) {
            const decoded = jwt_decode(token);
            console.log(decoded);
            const { name, email } = decoded;
            const user = { name, email };
            // setLoggedInUser(setLoggedInUser)
            setNewTestAdmin(user)

        }
    }, [])

    useEffect(() => {
        fetch('https://tranquil-lowlands-10989.herokuapp.com/admin')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const findAdmin = data.find((admin) => admin.adminEmail === newTestAdmin.email);
                console.log(findAdmin);
                if (findAdmin) {
                    setIsAdmin(true)
                }
            })
    }, []);

    return (
        <SideNav style={{backgroundColor:"black"}, {height: "740px"}} className="bg-"
            onSelect={(selected) => {
            }}
        >
            <SideNav.Toggle />
            <SideNav.Nav className="bg-gray" defaultSelected="home">
                {isAdmin && <>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <a href="/addService">Add Service</a>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            <a href="/makeAdmin">Make Admin</a>
                        </NavText>
                    </NavItem>
                </>}
                <NavItem href="/dashBoard" eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <a href="/orderList">Order list</a>
                    </NavText>
                </NavItem>

                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <a href="/manageServices">Manage Services</a>
                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        <a href="/review">Review</a>
                    </NavText>
                </NavItem>
                {/* <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem>
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>

                    </NavText>
                </NavItem> */}
            </SideNav.Nav>
        </SideNav>
    );
};

export default SideBarComponent;