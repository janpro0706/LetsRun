/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';

import { Layout, Content, Grid, Cell } from 'react-mdl';


class MainPage extends Component {
    render() {
        return (
            <Layout fixedHeader>
                <Content style={{ width: '100%', height: '100%' }}>
                    <div style={{ minHeight: '20em' }} />
                    <Grid>
                        <Cell col={4} />
                        <Cell col={4}><MainTitle title="LET'S RUN" /></Cell>
                    </Grid>

                    <ul style={{ listStyleType: 'none' }}>
                        <Grid><Cell offset={4} col={4}><MainButton url="/setting/race"><p>START</p></MainButton></Cell></Grid>
                        <Grid><Cell offset={4} col={4}><MainButton url="/record"><p>RECORD</p></MainButton></Cell></Grid>
                        <Grid><Cell offset={4} col={4}><MainButton url="/rank"><p>RANK</p></MainButton></Cell></Grid>
                        <Grid><Cell offset={4} col={4}><MainButton url="/login"><p>LOGIN</p></MainButton></Cell></Grid>
                    </ul>
                </Content>
            </Layout>
        )
    }
}

module.exports = MainPage;