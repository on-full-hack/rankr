import { Schema } from 'mongoose';

export default new Schema({
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
