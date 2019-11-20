"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
let connected = false;
function connect() {
    if (!connected) {
        mongoose_1.default.connection.on('connected', () => console.log('Connected to database'));
        mongoose_1.default.connection.on('reconnected', () => console.log('Reconnected to database'));
        mongoose_1.default.connect(process.env.MONGO_CONNECTION, {
            useNewUrlParser: true,
        });
        connected = true;
    }
    return connected;
}
function createModel(name, schema) {
    connect();
    return mongoose_1.default.model(name, schema);
}
exports.createModel = createModel;
//# sourceMappingURL=DatabaseConnection.js.map