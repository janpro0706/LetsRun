/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';


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
            <li><a href={this.props.url} onClick={this.onClick} style={{ textAlign: 'center' }}>{this.props.children}</a></li>
        );
    }
}

module.exports = MainButton;