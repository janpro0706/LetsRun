/**
 * Created by janpr on 2016-11-27.
 */

import mongoose from 'mongoose';
import { records } from './schema';

module.exports = mongoose.model('Record', records);