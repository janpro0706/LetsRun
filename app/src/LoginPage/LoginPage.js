/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import LoginForm from '../LoginForm';
import './LoginPage.css';

import { Layout } from 'react-mdl';


class LoginPage extends Component {
    render() {
        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen">
                    {/*<Button onClick={this.onClick}>LOGIN</Button>*/}
                    <LoginForm login={this.props.login} />
                </Layout>
            </div>
        );

    }
}

LoginPage.contextTypes = {
    token: React.PropTypes.string
};

module.exports = LoginPage;