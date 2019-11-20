"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LeagueSchema_1 = __importDefault(require("./schemas/LeagueSchema"));
const DatabaseConnection_1 = require("./DatabaseConnection");
exports.LeagueModel = DatabaseConnection_1.createModel('League', LeagueSchema_1.default);
//# sourceMappingURL=models.js.map