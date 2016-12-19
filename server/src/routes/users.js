/**
 * Created by janpr on 2016-11-20.
 */

import pollyfill from 'babel-polyfill';
import { Router } from 'express';
import { User } from '../model';

const router = Router();

router.post('/', (req, res) => {
    var data = req.body;
    var newUser = new User(data);

    checkDuplicate(newUser.id).then(dup => {
        if (dup) {
            res.status(202).send({
                'code': 2,
                'msg': 'duplicate user id'
            });
        } else {
            newUser.save().then(result => {
                res.status(201).send({
                    code: 0,
                    msg: 'user created'
                });
            });
        }
    });
});

// test
router.get('/', (req, res) => {
    console.log('test');
    User.find().then(result => {
        res.status(201).send({
            code: 0,
            msg: 'find all user',
            users: result
        });
    });
});

const checkDuplicate = async function checkDuplicate(id) {
    let dup = await User.findByUserId(id).then(userArr => {
        return userArr.length != 0 ? true : false;
    }, rej => {
        return rej;
    });

    return dup;
};

module.exports = router;