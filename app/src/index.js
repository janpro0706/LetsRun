import 'material-design-lite/material.css';
import 'material-design-lite/material.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import App from './App';
import MainPage from './MainPage';
import RouteTest from './RouteTest';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="/setting/race" component={RouteTest} />
            <Route path="/record" component={RouteTest} />
            <Route path="/rank" component={RouteTest} />
            <Route path="/login" component={RouteTest} />
        </Route>
    </Router>,
    document.getElementById('root')
);
