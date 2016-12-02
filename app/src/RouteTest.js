/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class RouteTest extends Component {
    render() {
        console.log(browserHistory.getCurrentLocation());
        return (
            <div>
                <p>{browserHistory.getCurrentLocation().pathname}</p>
            </div>
        )
    }
}

module.exports = RouteTest;