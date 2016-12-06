/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import TitlebarTemplate from '../TitlebarTemplate';
import MainTitle from '../MainTitle';
import MainButton from '../MainButton';
import LoginForm from '../LoginForm';
import './SettingRacePage.css';

import { Button, Layout, Content, Grid, Cell } from 'react-mdl';


class SettingRacePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TitlebarTemplate title="SETTING">
                <div>
                    hello
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = SettingRacePage;