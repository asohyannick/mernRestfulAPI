"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_config_1 = __importDefault(require("./config/db.config"));
const app = (0, express_1.default)();
const PORT = parseInt((_a = process.env.PORT) !== null && _a !== void 0 ? _a : '5000') || 5000;
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.get('/', function (req, res, next) {
    res.send("API is working...");
});
// db
(0, db_config_1.default)();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
