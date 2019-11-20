"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Repository_1 = __importDefault(require("./Repository"));
class LeagueRepository extends Repository_1.default {
    constructor(leagueModel) {
        super(leagueModel);
        this.leagueModel = leagueModel;
    }
}
exports.default = LeagueRepository;
//# sourceMappingURL=LeagueRepository.js.map