"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const config_1 = __importDefault(require("./config"));
let client = null;
exports.getDb = () => __awaiter(void 0, void 0, void 0, function* () {
    if (client === null) {
        // First connection, initialize the DB
        client = yield mongodb_1.MongoClient.connect(config_1.default.mongo.url, {
            useNewUrlParser: true
        });
    }
    return client.db();
});
/**
 * Promise resolves when connection with database is established
 * @param {number} retries - number of tries
 * @param {number} delay - time between retries
 * @returns {Promise<void>} - resolves when connected, throws otherwise
 */
function waitForConnection(retries = 3, delay = 1000) {
    return __awaiter(this, void 0, void 0, function* () {
        let lastErr;
        for (let retry = 0; retry < retries; retry++) {
            // Try to connect with DB and remember last error
            const db = yield exports.getDb().catch(err => {
                lastErr = err;
                return null;
            });
            // Verify the connection
            if (db && client && client.isConnected()) {
                // eslint-disable-next-line no-console
                console.log('🖥️  Connected to MongoDB');
                return;
            }
            if (retry) {
                // Hide message for first failure - popular use case in development
                // eslint-disable-next-line vazco/no-console
                console.info(`Cannot connect to db, will retry ${retries - retry} more times`);
            }
            // Not yet connected, wait and try again
            yield new Promise(resolve => setTimeout(resolve, delay));
        }
        throw lastErr;
    });
}
exports.waitForConnection = waitForConnection;
//# sourceMappingURL=mongo.js.map