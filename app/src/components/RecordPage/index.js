/**
 * Created by janpr on 2016-12-20.
 */

import './RecordPage.css';

import _ from 'lodash';
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { DataTable, TableHeader } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';


class RecordPage extends Component {
    render() {
        const records = _.merge([], this.props.getRecords());
        records.map(r => {
            // r.className = 'letsrun-record-page__inner-td';
            return r;
        });

        return (
            <TitlebarTemplate title="RECORD">
                <div style={{ overflowX: 'scroll', width: '100%' }}>
                    <DataTable shadow={0}
                               rows={records}
                    >
                        <TableHeader name="idx">#</TableHeader>
                        <TableHeader name="track">Track</TableHeader>
                        <TableHeader name="distance" cellFormatter={d => `${d.toFixed(1)} m`}>Distance</TableHeader>
                        <TableHeader name="speed" cellFormatter={s => `${s.toFixed(1)} m/s`}>Speed</TableHeader>
                        <TableHeader name="time" cellFormatter={t => `${t} s`}>Time</TableHeader>
                    </DataTable>
                </div>
            </TitlebarTemplate>
        );
    }
}

module.exports = RecordPage;