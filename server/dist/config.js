"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    mongo: {
        retries: +process.env.MONGO_RETRIES || 5,
        url: process.env.MONGO_URL || 'mongodb://localhost:27017/rankr',
    },
    server: {
        port: process.env.SERVER_PORT || 3333,
    },
};
//# sourceMappingURL=config.js.map