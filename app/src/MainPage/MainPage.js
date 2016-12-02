/**
 * Created by janpr on 2016-12-04.
 */

import React, { Component } from 'react';

import MainTitle from '../MainTitle';
import MainButton from '../MainButton';


class MainPage extends Component {
    render() {
        return (
            <div>
                <MainTitle title="LET'S RUN" />
                <ul>
                    <MainButton url="/setting/race"><p>START</p></MainButton>
                    <MainButton url="/record"><p>RECORD</p></MainButton>
                    <MainButton url="/rank"><p>RANK</p></MainButton>
                    <MainButton url="/login"><p>LOGIN</p></MainButton>
                </ul>
            </div>
        )
    }
}

module.exports = MainPage;