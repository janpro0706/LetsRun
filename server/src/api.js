/**
 * Created by janpr on 2016-11-20.
 */

import { Router } from 'express';

let router = Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

module.exports = router;