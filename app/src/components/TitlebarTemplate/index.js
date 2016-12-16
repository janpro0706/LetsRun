/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import './TitlebarTemplate.css';

import { browserHistory } from 'react-router';

import { Layout, Header, HeaderRow, Content } from 'react-mdl';


class TitlebarTemplate extends Component {
    render() {
        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen" style={{ textAlign: 'center' }}>
                    <Header style={{ display: 'block' }}>   {/* because mdl set display none when small screen */}
                        <HeaderRow title={this.props.title}>
                        </HeaderRow>
                        <button className="goBack mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" onClick={() => browserHistory.go(-1)}><i className="material-icons">＜</i></button>
                    </Header>
                    <Content style={{ height: '90%' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}

module.exports = TitlebarTemplate;