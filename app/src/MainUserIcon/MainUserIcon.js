/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';


class MainUserIcon extends Component {
    render() {
        return <p style={{ textAlign: 'center' }}>{this.props.token !== '' ? `hello ${this.props.token}` : 'not loginned'}</p>;
    }
}

MainUserIcon.contextTypes = {
    token: React.PropTypes.string
};

module.exports = MainUserIcon;