/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import TitlebarTemplate from '../TitlebarTemplate';
import './SettingRacePage.css';

import { Switch, List, ListItem, ListItemContent, ListItemAction, Icon, Button } from 'react-mdl';

// temp track img
import trackImg from '../../img/google_map.png';
import ResultTrack from './ResultTrack';

const tempTrack = {
    trackId: '1234',
    name: '미래관 레이스',
    googleMapToken: '5678',
    distance: '100'
};

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

const SettingComponent = function (props) {
    const { title, children } = props;
    return (
        <div style={{ textAlign: 'center' }}>
            <h1 className="mdl-color-text--accent-contrast">{title}</h1>
            {children}
        </div>
    );
};

const PlayerList = function(props) {
    return (
        <List>
            <ListItem>
                <ListItemContent icon="person">janpro</ListItemContent>
                <ListItemAction><Icon name="star" /></ListItemAction>
            </ListItem>
            <ListItem>
                <ListItemContent icon="person">janpro</ListItemContent>
                <ListItemAction><Icon name="star" /></ListItemAction>
            </ListItem>
            <ListItem>
                <ListItemContent icon="person">janpro</ListItemContent>
                <ListItemAction><Icon name="star" /></ListItemAction>
            </ListItem>
        </List>
    );
};

class SettingRacePage extends Component {
    constructor(props) {
        super(props);
        this.raceStart = this.raceStart.bind(this);

        this.state = {
            track: {},
            isMulti: false,
            players: []
        };
    }

    componentWillMount() {
        const track = this.props.getTrack(0);

        this.setState({ track });
    }

    raceStart(e) {
        this.props.createRace({
            track: this.state.track
        });
        browserHistory.push('/race')
    }

    render() {
        const track = this.state.track;

        const trackComponent = (
            <SettingComponent title={track.name}>
                <ResultTrack
                    containerElementProps={{}}
                    trackCoord={track.trackCoord}
                    zoom={17}
                />
            </SettingComponent>
        );

        const singleMultiSwitch = (
            <Switch ripple onChange={(e) => this.setState({isMulti: !this.state.isMulti})}><div className="mdl-color-text--accent-contrast">Multi Play</div></Switch>
        );

        const playerList = (
            <PlayerList players={this.state.players}></PlayerList>
        );

        return (
            <TitlebarTemplate title="SETTING">
                <div style={{ height: '90%', overflow: 'scroll' }}>
                    {trackComponent}
                    {singleMultiSwitch}
                    {this.state.isMulti ? playerList : null}
                </div>
                <Button onClick={e => browserHistory.push('/race') } raised colored primary ripple style={{ width: '80%' }}>START</Button>
            </TitlebarTemplate>
        );
    }
}

module.exports = SettingRacePage;