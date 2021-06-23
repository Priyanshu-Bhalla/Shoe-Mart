import React, { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import MainPage from "./pages/MainPage";
import PopularityPage from "./pages/PopularityPage";
import Nav from "./components/Nav";
import Footer1 from "./components/Footer1";
import HighToLow from "./pages/HighToLow";
import LowToHigh from "./pages/LowToHigh";
import Payment from "./pages/Payment";
import Login from './pages/Login';
class App extends Component {
  render() {
    return (
      <div>
                 
         
       
        <Router>
        <Nav />
        
        <Switch>
          <Route path="/" exact component={MainPage} />
          <Route path="/Popularity" component={PopularityPage} />
          <Route path="/HighToLow" component={HighToLow} />
          <Route path="/LowToHigh" component={LowToHigh} />
          <Route path="/Payment" component={Payment} />
          <Route path="/Login" component={Login} />
          </Switch>
          <Footer1/>
        </Router>
  
      </div>
    );
  }
}

export default App;
