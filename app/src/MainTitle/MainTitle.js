/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';


class MainTitle extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}

module.exports = MainTitle;