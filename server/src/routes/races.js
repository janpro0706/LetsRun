/**
 * Created by janpr on 2016-11-20.
 */

import pollyfill from 'babel-polyfill';
import { Router } from 'express';
import { Race } from '../model';
import { Schema } from 'mongoose';

const router = Router();

router.post('/', (req, res) => {
    // token auth required

    // resolve userId
    // TEMP req with userId, instead of token
    let userId = Schema.ObjectId(req.body.userId);

    let race = new Race({
        userId: userId,
        isMulti: false,
        status: 0
    });

    race.save().then(data => {
        console.dir(data);
        res.status(200).send({
            code: 0,
            msg: 'race created',
            raceId: data._id
        });
    });
});

module.exports = router;