import 'material-design-lite/dist/material.pink-lime.min.css';
import 'material-design-lite/material.js';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { browserHistory, Router, Route, IndexRoute } from 'react-router';

import { App, MainPage, LoginPage, SignupPage, SettingRacePage, RacePage, RaceResultPage } from './components';
import RouteTest from './RouteTest';


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={MainPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/setting/race" component={SettingRacePage} />
            <Route path="/race" component={RacePage} />
            <Route path="/race/result" component={RaceResultPage} />
            <Route path="/record" component={RouteTest} />
            <Route path="/rank" component={RouteTest} />

        </Route>
    </Router>,
    document.getElementById('root')
);
