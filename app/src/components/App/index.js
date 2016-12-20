import React, { Component } from 'react';
// import logo from '../logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.getRecords = this.getRecords.bind(this);
        this.createRecord = this.createRecord.bind(this);
        this.getRaces = this.getRaces.bind(this);
        this.getRace = this.getRace.bind(this);
        this.createRace = this.createRace.bind(this);
        this.getTrack = this.getTrack.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.signup = this.signup.bind(this);

        this.state = {
            token: '',
            races: [],
            tracks: [{
                idx: 0,
                name: '등교길 레이스',
                trackCoord: [
                    {
                        lat: 37.622142894,
                        lng: 127.07860116
                    },
                    {
                        lat: 37.627853,
                        lng: 127.077833
                    }
                ]
            }],
            records: [
                { idx: 0, track: '미래관 레이스', distance: 20, speed: 5, time: 50 }
            ]
        };
    }

    getRecords() {
        return this.state.records;
    }

    createRecord(record) {
        this.state.records.push(record);
        this.setState({
            records: this.state.records
        });
    }

    getRaces() {
        return this.state.races;
    }

    getRace(idx) {
        return this.state.races[idx];
    }

    createRace(race) {
        this.state.races.push(race);
        this.setState({
            races: this.state.races
        })
    }

    getTrack(idx) {
        return this.state.tracks[idx];
    }

    login(form) {
        if (form.id === 'janpro' && form.password === '1234') {
            this.setState({
                token: 'K23gf8e'
            });

            return true;
        }
        return false;
    }

    logout() {
        if (this.state.token !== '') {
            this.setState({
                token: ''
            });
            return true;
        }
        return false;
    }

    signup(form) {
        return true;
    }

    render() {
        // console.log('child props of App');
        // console.dir(this.props.children);

        const childrenWithService = React.Children.map(this.props.children, child => React.cloneElement(child, {
            getRecords: this.getRecords,
            createRecord: this.createRecord,
            getRaces: this.getRaces,
            getRace: this.getRace,
            createRace: this.createRace,
            getTrack: this.getTrack,
            token: this.state.token,
            login: this.login,
            logout: this.logout,
            signup: this.signup
        }));

        return (
            <div className="App">
                { childrenWithService }
            </div>
        );
    }
}

App.childContextTypes = {
    token: React.PropTypes.string
};

module.exports = App;
