import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notfound from "./components/Notfound/Notfound";
import Header from "./components/Header/Header";
import Chocolate from "./components/Chocolate/Chocolate";
import Milkshake from "./components/Milkshake";
import Navbar from "./components/Navbar/Navbar";

import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Navbar />
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
