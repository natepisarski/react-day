//@flow
import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import {Provider} from "react-redux";
import App from "./App";
import {applyMiddleware, compose, createStore} from "redux";
import reduceReducers from 'reduce-reducers';

class RealApp extends Component {

    reduxDevTools = () => window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    loggingMiddleware = store => next => action => { console.debug(action); next(action) };

    render() {
        const defaultStoreReducer = (state = {}, action) => state;

        // const ourStoresStore = createStore(
        //     reduceReducers(defaultStoreReducer),
        //     {hello: 'Redux Message'},
        //     compose(this.reduxDevTools(), applyMiddleware(this.loggingMiddleware))
        // );

        return (
                <div className="App">
                    <Router>
                        <Route exact path="/" component={App}/>
                    </Router>
                </div>
        );
    }
}

export default RealApp;
