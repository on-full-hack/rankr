import { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

export default new Schema({
  creator_id: {
    // type: ObjectId,
    // ref: 'User',
    type: String, // change to ObjectId when user will be implemented
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  discipline: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  playersWaitingToJoin: [
    {
      // type: ObjectId, ref: 'User'
      type: String, //change to ObjectId in the future
    },
  ],
  players: [{ type: ObjectId, ref: 'User' }],
});
