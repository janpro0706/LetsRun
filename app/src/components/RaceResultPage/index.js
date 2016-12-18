/**
 * Created by janpr on 2016-12-17.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Grid, Cell } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';

import trackImg from '../../img/google_map.png';


const RecordHUD = function(props) {
    const len = props.value.length + 2;

    return (
        <div className="mdl-color--primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '67px', height: '67px', borderRadius: '50%' }}>
            <h1 className="mdl-color-text--primary-contrast" style={{ fontSize: `${40 / len}vw`, marginBottom: '-15px', marginTop: '-10px' }}>{props.value}</h1>
            <p className="mdl-color-text--primary-contrast" style={{ margin: '0' }}>{props.unit}</p>
        </div>
    );
};

class RaceResultPage extends Component {
    render() {
        return (
            <TitlebarTemplate title="RESULT" goBackUrl="/">
                <div style={{ height: '70%' }}>
                    <h1 className="mdl-color-text--accent-contrast">미래관 레이스</h1>
                    <img src={trackImg} alt="track img" />
                </div>
                <div style={{ height: '30%' }}>
                    <Grid>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="bottom"><RecordHUD value="3" unit="ranks" /></Cell>
                        <Cell phone={1} align="bottom"><RecordHUD value="20" unit="km/h" /></Cell>
                        <Cell phone={1} align="bottom"><RecordHUD value="30:02" unit="time" /></Cell>
                        <div className="mdl-layout-spacer" />
                    </Grid>
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = RaceResultPage;