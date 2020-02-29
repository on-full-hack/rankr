import { Schema } from 'mongoose';

export default new Schema({
  creator_id: {
    type: String,
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
});
