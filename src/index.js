import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from "./components/Header/Header";
import Chocolate from "./components/Chocolate/Chocolate";
import Milkshake from "./components/Milkshake";
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/chocolate">Chocolate</Link>
                        </li>
                        <li>
                            <Link to="/milkshake">Milkshake</Link>
                        </li>
                    </ul>
                    <Route exact path="/" component={Header} />
                    <Route path="/chocolate" component={Chocolate} />
                    <Route path="/milkshake" component={Milkshake} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Routing />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
