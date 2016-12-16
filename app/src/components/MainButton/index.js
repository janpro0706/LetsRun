/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Button } from 'react-mdl';

class MainButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();

        browserHistory.push(this.props.url);
    }

    render() {
        return (
            <li style={{ textAlign: 'center', marginBottom: '10px' }}><Button onClick={this.onClick} raised colored ripple primary style={{ width: '50%' }}>{this.props.children}</Button></li>
        );
    }
}

module.exports = MainButton;