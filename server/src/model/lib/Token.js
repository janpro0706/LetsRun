/**
 * Created by janpr on 2016-11-27.
 */

import mongoose from 'mongoose';
import { tokens } from './schema';

module.exports = mongoose.model('Token', tokens);