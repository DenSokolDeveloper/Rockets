"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RocketBase = void 0;
class RocketBase {
    launchData() {
        let data = new Date();
        return data.getHours() + ":" + data.getMinutes();
    }
    launch() {
        console.log(`The ${this.name} rocket launched at ${this.launchData()}.`);
    }
}
exports.RocketBase = RocketBase;
