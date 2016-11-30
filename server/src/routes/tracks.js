/**
 * Created by janpr on 2016-11-20.
 */

import pollyfill from 'babel-polyfill';
import { Router } from 'express';
import { Track } from '../model';

const router = Router();

router.post('/', (req, res) => {
    // token auth required

    let userId = req.body.userId;
    let googleMapToken = req.body.googleMapToken;
    let markers = req.body.markers;

    let track = new Track({
        googleMapToken: googleMapToken,
        markers: markers
    });

    track.save().then(data => {
        res.status(200).send({
            code: 0,
            msg: 'track created',
            trackId: data._id
        });
    });
});

router.get('/:trackId', (req, res) => {
    let trackId = req.param.tracId;

    Track.findOne({
        _id: trackId
    }).then(track => {
        if (track != null) {
            res.status(200).send({
                code: 0,
                msg: 'track found',
                data: track
            });
        } else {
            res.status(201).send({
                code: 1,
                msg: 'track not found'
            });
        }
    });
});

router.put('/:trackId', (req, res) => {
    let trackId = req.param.trackId;

});

module.exports = router;