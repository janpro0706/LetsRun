/**
 * Created by janpr on 2016-11-26.
 */

import mongoose from 'mongoose';
import { users } from './schema';

users.statics.findByUserId = async function(id) {
    return await this.find({ id: id }).then(res => res);
};

module.exports = mongoose.model('User', users);