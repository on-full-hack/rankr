import { Schema } from 'mongoose';
import { ObjectId } from 'mongodb';

export default new Schema({
  leaguesCreated: [{ type: ObjectId, ref: 'League' }],
  leaguesJoined: [{ type: ObjectId, ref: 'League' }],
  leaguesRequestedToJoing: [{ type: ObjectId, ref: 'League' }],
});
