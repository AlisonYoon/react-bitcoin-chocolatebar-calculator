import React from 'react';

import Header from "../Header/Header";
import Chocolate from "../Chocolate/Chocolate";
import Milkshake from "../Milkshake";
import Notfound from "../Notfound/Notfound";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/chocolate">About</Link>
                    </li>
                    <li>
                        <Link to="/milkshake">Contact Us</Link>
                    </li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Header} />
                    <Route path="/chocolate" component={Chocolate} />
                    <Route path="/milkshake" component={Milkshake} />
                    <Route component={ Notfound } />
                </Switch>
            </div>
        )
    }
}

export default Navbar