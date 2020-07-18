"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.array = void 0;
const StarPort_1 = require("./StarPort");
let base = new StarPort_1.StarPort();
exports.array = [];
base.getAllRockets();
for (let key of exports.array) {
    console.log(`Prepare to the next launch #${exports.array.indexOf(key) + 1}:`);
    key.launch();
}
