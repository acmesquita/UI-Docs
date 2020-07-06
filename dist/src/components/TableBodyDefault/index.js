"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableBodyDefault = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
// import { Container } from './styles';
exports.TableBodyDefault = ({ children }) => {
    return (react_1.default.createElement(core_1.TableBody, null, children));
};
