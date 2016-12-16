/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import TitlebarTemplate from '../TitlebarTemplate';
import './SettingRacePage.css';

import { Switch, List, ListItem, ListItemContent, ListItemAction, Icon, Button } from 'react-mdl';

// temp track img
import trackImg from '../img/google_map.png';

const tempTrack = {
    trackId: '1234',
    name: '미래관 레이스',
    googleMapToken: '5678',
    distance: '100'
};

const SettingComponent = function (props) {
    const { title, children } = props;
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>{title}</h1>
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

        this.state = {
            track: {},
            isMulti: false,
            players: []
        };
    }

    render() {
        const trackComponent = (
            <SettingComponent title={tempTrack.name}>
                <img src={trackImg} alt="track img" />
                <p>Distrance: {tempTrack.distance}</p>
            </SettingComponent>
        );

        const singleMultiSwitch = (
            <Switch ripple onChange={(e) => this.setState({isMulti: !this.state.isMulti})}>Multi Play</Switch>
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
                <Button primary style={{ position: 'absolute', bottom: '0' }}>START</Button>
            </TitlebarTemplate>
        );
    }
}

module.exports = SettingRacePage;