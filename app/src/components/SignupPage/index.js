/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import SignupForm from '../SignupForm';
import './SignupPage.css';

import { Layout } from 'react-mdl';


class SignupPage extends Component {
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