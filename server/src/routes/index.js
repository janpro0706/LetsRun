/**
 * Created by janpr on 2016-11-20.
 */

import { Router } from 'express';
import users from './users';

let router = Router();

router.use('/users', users);

module.exports = router;