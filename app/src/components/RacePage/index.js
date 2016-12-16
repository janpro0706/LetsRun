/**
 * Created by janpr on 2016-12-16.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Grid, Cell } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';

import trackImg from '../../img/google_map.png';


const RecordHUD = function(props) {
    const len = props.value.length + 1;

    return (
        <div>
            <h1 style={{ fontSize: `${40 / len}vw`, marginBottom: '-20px' }}>{props.value}</h1>
            <p>{props.unit}</p>
        </div>
    );
};

class RacePage extends Component {
    tempRaceEnd() {
        setTimeout(() => {
            browserHistory.push('/race/result');
        }, 5000);
        let i = 5;
        setInterval(() => {
            console.log(i--);
        }, 1000);
    }

    render() {
        // tempRaceEnd();

        return (
            <TitlebarTemplate title="RACING">
                <div style={{ height: '70%' }}>
                    <h1>미래관 레이스</h1>
                    <img src={trackImg} alt="track img" />
                </div>
                <div style={{ height: '30%' }}>
                    <Grid>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="middle"><RecordHUD value="3" unit="ranks" /></Cell>
                        <Cell phone={1} align="middle"><RecordHUD value="20" unit="km/h" /></Cell>
                        <Cell phone={1} align="middle"><RecordHUD value="30:02" unit="time" /></Cell>
                        <div className="mdl-layout-spacer" />
                    </Grid>
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = RacePage;