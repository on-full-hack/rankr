"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = __importDefault(require("awilix"));
const LeagueService_1 = __importDefault(require("./services/LeagueService"));
const LeagueController_1 = __importDefault(require("./controllers/LeagueController"));
function buildContainer() {
    const container = awilix_1.default.createContainer();
    container.register({
        leagueService: awilix_1.default.asClass(LeagueService_1.default),
    });
    return {
        LeagueController: container.build(LeagueController_1.default),
    };
}
exports.default = buildContainer;
//# sourceMappingURL=container.js.map