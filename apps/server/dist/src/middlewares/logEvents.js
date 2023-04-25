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
exports.logger = exports.logEvent = void 0;
const date_fns_1 = require("date-fns");
const fs_1 = __importDefault(require("fs"));
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const logEvent = (message, logName) => __awaiter(void 0, void 0, void 0, function* () {
    const dateTime = `${(0, date_fns_1.format)(new Date(), 'yyyyMMdd\tHH:mm:ss')}`;
    const logItem = `${dateTime}\n${message}`;
    try {
        if (!fs_1.default.existsSync(path_1.default.join(__dirname, '..', 'logs'))) {
            yield promises_1.default.mkdir(path_1.default.join(__dirname, '..', 'logs'));
        }
        yield promises_1.default.appendFile(path_1.default.join(__dirname, '..', 'logs', logName), logItem);
    }
    catch (err) {
        throw new Error('Failed to write the event');
    }
});
exports.logEvent = logEvent;
const logger = (req, res, next) => {
    var _a;
    (0, exports.logEvent)(`${req.method}\t${(_a = req.headers) === null || _a === void 0 ? void 0 : _a.origin}\t${req.url}`, 'reqLog.txt');
    next();
};
exports.logger = logger;
//# sourceMappingURL=logEvents.js.map