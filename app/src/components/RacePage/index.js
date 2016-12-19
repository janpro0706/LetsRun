/**
 * Created by janpr on 2016-12-16.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Grid, Cell, Spinner } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';

import trackImg from '../../img/google_map.png';
import RaceTrack from './RaceTrack';


const trackCoord = [
    {
        lat: 37.622142894,
        lng: 127.07860116
    },
    {
        lat: 37.625607,
        lng: 127.073042
    }
];

// const trackCoord = [
//     {
//         lat: 37.566535,
//         lng: 126.97796919999999
//     },
//     {
//         lat: 37.564835,
//         lng: 126.97796919999999
//     }
// ];

const RecordHUD = function(props) {
    const str = String(props.value);
    const val = str.substr(0, str[2] == '.' ? 2 : 3);
    const len = val.length + 2;

    return (
        <div className="mdl-color--primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '67px', height: '67px', borderRadius: '50%' }}>
            <h1 className="mdl-color-text--primary-contrast" style={{ fontSize: `${40 / len}vw`, marginBottom: '-15px', marginTop: '-10px' }}>{val}</h1>
            <p className="mdl-color-text--primary-contrast" style={{ margin: '0' }}>{props.unit}</p>
        </div>
    );
};

class RacePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hud: {
                speed: 0,
                distance: 0,
                time: 0
            }
        };

        this.updateHud = this.updateHud.bind(this);
        this.onRaceEnd = this.onRaceEnd.bind(this);
        this.onDestReached = this.onDestReached.bind(this);
    }

    updateHud(hud) {
        this.setState({ hud });
    }

    // fired when all player reached goal
    onRaceEnd() {

    }

    // fired when an individual player reached goal
    onDestReached() {
        browserHistory.push('/race/result');
    }

    render() {
        // this.tempRaceEnd();

        const raceTrack = (<RaceTrack
            containerElementProps={{}}
            trackCoord={trackCoord}
            onPlayerChanged={this.updateHud}
            onRaceEnd={this.onRaceEnd}
            onDestReached={this.onDestReached}
            zoom={17}
        />);

        return (
            <TitlebarTemplate title="RACING" goBackConfirm={'r u sure?'} goBackUrl="/">
                <div style={{ height: '70%' }}>
                    <h1 className="mdl-color-text--accent-contrast">미래관 레이스</h1>
                    {/*<img src={trackImg} alt="track img" />*/}
                    {raceTrack}
                </div>
                <div style={{ height: '30%' }}>
                    <Grid>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="bottom"><RecordHUD value={this.props.isMulti ? 3 : this.state.hud.distance} unit={this.props.isMulti ? 'ranks' : 'meters'} /></Cell>
                        <Cell phone={1} align="bottom"><RecordHUD value={this.state.hud.speed} unit="m/s" /></Cell>
                        <Cell phone={1} align="bottom"><RecordHUD value={this.state.hud.time} unit="time" /></Cell>
                        <div className="mdl-layout-spacer" />
                    </Grid>
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = RacePage;