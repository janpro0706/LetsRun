/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';
import MainUserIcon from '../MainUserIcon';
import './MainPage.css';

import { browserHistory } from 'react-router';

import { Layout, Button, Content, Grid, Cell } from 'react-mdl';


class MainPage extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(e) {
        e.preventDefault();

        this.props.logout();

        // login token is managed by App's context, so explicitly call update
        this.forceUpdate();
    }

    render() {
        console.log(this.context.token);
        const logInOut = this.context.token === '' ? <MainButton url="/login"><p>LOGIN</p></MainButton> : <Button onClick={this.logout} raised colored ripple primary>LOGOUT</Button>;

        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen">
                    <div style={{ height: '40%', margin: '0 auto', position: 'relative' }}>
                        <MainTitle title="LET'S RUN" />
                    </div>

                    <ul style={{ height: '30%', listStyleType: 'none', margin: '0 auto', padding: '0' }}>
                        <MainButton url="/setting/race"><p>START</p></MainButton>
                        <MainButton url="/record"><p>RECORD</p></MainButton>
                        <MainButton url="/rank"><p>RANK</p></MainButton>
                        { logInOut }
                    </ul>

                    <div style={{ height: '30%' }}>
                        <MainUserIcon />
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