"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@storybook/react");
const src_1 = require("../src");
react_2.storiesOf('Page', module)
    .add('template', () => react_1.default.createElement(src_1.Page, null));
