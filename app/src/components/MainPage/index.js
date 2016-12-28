/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';
import MainUserIcon from '../MainUserIcon';
import './MainPage.css';

import { Layout, Button } from 'react-mdl';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();

        this.props.logout();

        // login token is managed by App's context, so explicitly call update
        // this.forceUpdate();
    }

    render() {
        // console.log(this.props.token);
        const logInOut = this.props.token === '' ? <MainButton url="/login">LOGIN</MainButton> : <MainButton onClick={this.logout}>LOGOUT</MainButton>;
        const isLoginned = this.props.token !== '';

        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen">
                    <div style={{ height: '40%', margin: '0 auto', position: 'relative' }}>
                        <MainTitle title="LET'S RUN" />
                    </div>

                    <ul style={{ width: '100%', height: '30%', listStyleType: 'none', margin: '0 auto', padding: '0' }}>
                        <MainButton url={isLoginned ? "/setting/race" : "/login"}>START</MainButton>
                        <MainButton url={isLoginned ? "/record" : "/login"}>RECORD</MainButton>
                        <MainButton url={isLoginned ? "/rank" : "/login"}>RANK</MainButton>
                        { logInOut }
                    </ul>

                    <div style={{ height: '30%', textAlign: 'center', marginTop: '10vw' }}>
                        <MainUserIcon token={this.props.token} />
                    </div>
                </Layout>
            </div>

        )
    }
}

MainPage.contextTypes = {
    token: React.PropTypes.string
};

module.exports = MainPage;