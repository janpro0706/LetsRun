/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';
import SignupForm from '../SignupForm';
import './SignupPage.css';

import { Button, Layout, Content, Grid, Cell } from 'react-mdl';


class SignupPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen">
                    {/*<Button onClick={this.onClick}>LOGIN</Button>*/}
                    <SignupForm signup={this.props.signup} />
                </Layout>
            </div>
        );

    }
}

SignupPage.contextTypes = {
    token: React.PropTypes.string
};

module.exports = SignupPage;