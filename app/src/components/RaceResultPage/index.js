/**
 * Created by janpr on 2016-12-17.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import { Grid, Cell } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';

import trackImg from '../../img/google_map.png';
import ResultTrack from './ResultTrack';


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
    let val;
    let len;

    if (props.isTimeHud) {
        if (typeof props.value !== 'number') {
            console.error(`RecordHUD type not matched: expected number but it's ${typeof props.value}`);
        }
        let h, m, s;
        h = Math.floor(props.value / 3600);
        m = Math.floor((props.value / 60) % 60);
        s = Math.floor(props.value % 60);

        h = h < 10 ? `0${h}` : '' + h;
        m = m < 10 ? `0${m}` : '' + m;
        s = s < 10 ? `0${s}` : '' + s;

        val = (h != '00' ? h + ':' : '') + m + ':' + s;
    } else {
        let str = String(props.value);
        let dotIdx = str.indexOf('.');
        val = str.substr(0, dotIdx >= 3 ? dotIdx : 3);
    }
    len = val.length + 2;

    return (
        <div className="mdl-color--primary" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '67px', height: '67px', borderRadius: '50%' }}>
            <h1 className="mdl-color-text--primary-contrast" style={{ fontSize: `${40 / len}vw`, marginBottom: '-15px', marginTop: '-10px' }}>{val}</h1>
            <p className="mdl-color-text--primary-contrast" style={{ margin: '0' }}>{props.unit}</p>
        </div>
    );
};

class RaceResultPage extends Component {
    render() {
        const track = this.props.getTrack(0);
        const records = this.props.getRecords();
        const record = records[records.length - 1];

        return (
            <TitlebarTemplate title="RESULT" goBackUrl="/">
                <div style={{ height: '70%' }}>
                    <h1 className="mdl-color-text--accent-contrast" style={{ fontSize: 60 / track.name.length + 'vw' }}>{track.name}</h1>
                    {/*<img src={trackImg} alt="track img" />*/}
                    <ResultTrack
                        containerElementProps={{}}
                        trackCoord={track.trackCoord}
                        zoom={17}
                    />
                </div>
                <div style={{ height: '30%' }}>
                    <Grid>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="bottom"><RecordHUD value={this.props.isMulti ? 3 : record.distance} unit={this.props.isMulti ? 'ranks' : 'meters'} /></Cell>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="bottom"><RecordHUD value={record.speed} unit="m/s" /></Cell>
                        <div className="mdl-layout-spacer" />
                        <Cell phone={1} align="bottom"><RecordHUD value={record.time} unit="time" /></Cell>
                        <div className="mdl-layout-spacer" />
                    </Grid>
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = RaceResultPage;