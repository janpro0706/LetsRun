/**
 * Created by janpr on 2016-11-26.
 */

import { Schema } from 'mongoose';

const ObjectId = Schema.ObjectId;


const users = new Schema({
    id: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String },
    birth: { type: String },
    gender: { type: String }
});

const records = new Schema({
    userId: { type: ObjectId, required: true },
    raceId: { type: ObjectId, required: true },
    distance: { type: Number, default: 0 },
    speed: { type: Number, default: 0 },
    time: { type: Number, default: 0 }
});

let recordType = {
    value: { type: Number, default: 0 },
    raceId: { type: ObjectId, required: true }
};

const bestRecords = new Schema({
    userId: { type: ObjectId, required: true },
    distance: recordType,
    speed: recordType,
    time: recordType
});

const tracks = new Schema({
    googleMapToken: { type: String, required: true },
    markers: [
        {
            lat: { type: Number, required: true },
            lng: { type: Number, required: true }
        }
    ],
    distance: { type: Number, required: true }
});

const races = new Schema({
    trackId: { type: ObjectId },
    userId: { type: ObjectId, required: true },
    isMulti: { type: Boolean, default: false },
    racers: [ { ObjectId } ],
    status: { type: Number, default: 0 }
});

const tokens = new Schema({
    token: { type: String, required: true, unique: true }
});

module.exports = { users, records, bestRecords, tracks, races, tokens };