import mongoose, { Schema } from 'mongoose';

let connected = false;
function connect() {
    if (!connected) {
        mongoose.connection.on('connected', () =>
            console.log('Connected to database')
        );
        mongoose.connection.on('reconnected', () =>
            console.log('Reconnected to database')
        );
        mongoose.connect(process.env.MONGO_CONNECTION, {
            useNewUrlParser: true,
        });
        connected = true;
    }
    return connected;
}

export function createModel(name: any, schema: Schema) {
    connect();
    return mongoose.model(name, schema);
}
