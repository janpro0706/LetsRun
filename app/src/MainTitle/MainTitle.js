/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';


class MainTitle extends Component {
    render() {
        return (
            <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
                <h1 style={{ textAlign: 'center' }}>{this.props.title}</h1>
            </div>
        );
    }
}

module.exports = MainTitle;