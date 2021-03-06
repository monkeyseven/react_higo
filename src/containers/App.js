/* App */
import React, {Component} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./Home/index";
import Cart from "./Cart/index";
import Topic from "./Topic/index";
import Category from "./Category/index";
import User from "./User/index";
import BNavBar from "../componnets/BNavbar/index";
//import {ConnectedRouter} from 'react-router-redux'
import '../common/style/reset.less'
export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/topic" component={Topic}></Route>
                        <Route path="/cart" component={Cart}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/category" component={Category}></Route>
                    </Switch>
                    <BNavBar/>
                </div>
            </Router>
        )
    }
}