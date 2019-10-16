"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const startup_1 = __importDefault(require("./startup"));
const config_1 = __importDefault(require("./config"));
const app = express_1.default();
app.get('/test', (req, res) => {
    res.send('test');
});
startup_1.default()
    .then(() => app.listen(config_1.default.server.port))
    .then(() => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at port ${config_1.default.server.port}`);
}) // eslint-disable-next-line no-console
    .catch(e => console.log('Server startup error', e));
//# sourceMappingURL=server.js.map