/**
 * Created by janpr on 2016-11-20.
 */

import { Router } from 'express';
import users from './users';
import records from './records';
import bestRecords from './bestRecords';
import tracks from './tracks';
import races from './races';
import tokens from './tokens';

let router = Router();

router.use('/users', users);
router.use('/records', records);
router.use('/bestRecords', bestRecords);
router.use('/tracks', tracks);
router.use('/races', races);
router.use('/tokens', tokens);

module.exports = router;