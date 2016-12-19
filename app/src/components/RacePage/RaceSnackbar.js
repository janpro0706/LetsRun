/**
 * Created by janpr on 2016-12-20.
 */

import React, { Component } from 'react';
import { Snackbar } from 'react-mdl';


function RaceSnackbar(props) {
    return (
        <Snackbar active={props.isActive} onTimeout={() => {}}>{props.msg}</Snackbar>
    )
}

module.exports = RaceSnackbar;