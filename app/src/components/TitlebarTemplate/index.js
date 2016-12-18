/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';import './TitlebarTemplate.css';

import { browserHistory } from 'react-router';

import { Layout, Header, HeaderRow, Content } from 'react-mdl';


class TitlebarTemplate extends Component {
    render() {
        const goBack = () => {
            this.props.goBackUrl ? browserHistory.replace(this.props.goBackUrl) : browserHistory.go(-1);
        };

        return (
            <div>
                <Layout className="letsrun_mdl_layout__fullscreen" style={{ textAlign: 'center' }}>
                    <Header style={{ display: 'block' }}>   {/* because mdl set display none when small screen */}
                        <HeaderRow title={this.props.title} className="mdl-color-text--primary-contrast">
                        </HeaderRow>
                        <button className="goBack mdl-layout-icon mdl-button mdl-js-button mdl-button--icon" onClick={goBack}><i className="material-icons mdl-color--primary">keyboard_arrow_left</i></button>
                    </Header>
                    <Content style={{ height: '88%', left: '0', top: '0' }}>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}

module.exports = TitlebarTemplate;