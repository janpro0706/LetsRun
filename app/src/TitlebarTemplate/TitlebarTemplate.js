/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';
import MainUserIcon from '../MainUserIcon';
import './TitlebarTemplate.css';

import { browserHistory } from 'react-router';

import { Layout, Header, HeaderRow, Button, Content, Grid, Cell } from 'react-mdl';


class TitlebarTemplate extends Component {
    render() {
        return (
            <div>
                <Layout >
                    <Header style={{ display: 'block' }}>   {/* because mdl set display none when small screen */}
                        <HeaderRow title={this.props.title}>
                        </HeaderRow>
                        <button className="goBack mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" onClick={() => browserHistory.go(-1)}><i className="material-icons">＜</i></button>
                    </Header>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>

            </div>
        );
    }
}

module.exports = TitlebarTemplate;