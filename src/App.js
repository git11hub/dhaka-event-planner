import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import OrderList from './components/DashBoard/OrderList/OrderList';
import AddService from './components/DashBoard/AddService/AddService';
import MakeAdmin from './components/DashBoard/MakeAdmin/MakeAdmin';
import ManageServices from './components/DashBoard/ManageServices/ManageServices';
import Review from './components/DashBoard/Review/Review';
import Login from './components/Login/Login';
import { createContext, useState } from 'react';
import EventDetails from './components/EventDetails/EventDetails';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import SignUp from './components/Home/SignUp/SignUp';

export const UserContext = createContext();
export const EventsContext = createContext();
export const AdminsContext = createContext();
export const OrdersContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [events, setEvents] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [orders, setOrders] = useState([]);

  console.log(admins);
  return (
    <AdminsContext.Provider value={[admins, setAdmins]}>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <EventsContext.Provider value={[events, setEvents]}>

          <OrdersContext.Provider value={[orders, setOrders]}>
            <Router>
              <Switch>
                <PrivateRoute path="/dashBoard">
                  <DashBoard />
                </PrivateRoute>
                <PrivateRoute path="/orderList">
                  <OrderList />
                </PrivateRoute>
                <PrivateRoute path="/addService">
                  <AddService />
                </PrivateRoute>
                <PrivateRoute path="/makeAdmin">
                  <MakeAdmin />
                </PrivateRoute>
                <PrivateRoute path="/manageServices">
                  <ManageServices />
                </PrivateRoute>
                <PrivateRoute path="/review">
                  <Review />
                </PrivateRoute>
                <PrivateRoute path="/checkOut">
                  <CheckOut />
                </PrivateRoute>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <PrivateRoute path="/eventDetails/:id">
                  <EventDetails />
                </PrivateRoute>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/home">
                  <Home />
                </Route>
              </Switch>
            </Router>
          </OrdersContext.Provider>

        </EventsContext.Provider>
      </UserContext.Provider>
    </AdminsContext.Provider>
  );
}

export default App;
