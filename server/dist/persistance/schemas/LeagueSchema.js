"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.default = new mongoose_1.Schema({
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
//# sourceMappingURL=LeagueSchema.js.map