/**
 * Created by janpr on 2016-12-20.
 */

import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { DataTable, TableHeader } from 'react-mdl';

import TitlebarTemplate from '../TitlebarTemplate';


class RecordPage extends Component {
    render() {
        const records = this.props.getRecords();

        return (
            <TitlebarTemplate title="RECORD">
                <DataTable shadow={0}
                    rows={records}
                >
                    <TableHeader name="idx">#</TableHeader>
                    <TableHeader name="track">Track</TableHeader>
                    <TableHeader name="distance" cellFormatter={d => `${d.toFixed(1)} m`}>Distance</TableHeader>
                    <TableHeader name="speed" cellFormatter={s => `${s.toFixed(1)} m/s`}>Speed</TableHeader>
                    <TableHeader name="time" cellFormatter={t => `${t} s`}>Time</TableHeader>
                </DataTable>
            </TitlebarTemplate>
        )
    }
}

module.exports = RecordPage;