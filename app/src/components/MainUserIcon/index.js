/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import { Icon } from 'react-mdl';


class MainUserIcon extends Component {
    render() {
        return this.props.token !== ''
            ? <div>
                <Icon className="mdl-color-text--grey" name="account_circle" style={{ fontSize: '20vw' }} />
                <p>{`hello ${this.props.token}`}</p>
            </div>
            : <p>not loginned</p>;
    }
}

MainUserIcon.contextTypes = {
    token: React.PropTypes.string
};

module.exports = MainUserIcon;