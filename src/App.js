import logo from './logo.svg';
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

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/dashBoard">
            <DashBoard />
          </Route>
          <Route path="/orderList">
            <OrderList />
          </Route>
          <Route path="/addService">
            <AddService />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
          </Route>
          <Route path="/manageServices">
            <ManageServices />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
    
    </Router>
  );
}

export default App;
