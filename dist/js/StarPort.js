"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StarPort = void 0;
const SpaceXRocket_1 = require("./SpaceXRocket");
const NasaRocket_1 = require("./NasaRocket");
const MillitaryRocket_1 = require("./MillitaryRocket");
const index_1 = require("./index");
class StarPort {
    getAllRockets() {
        let counter = 0;
        while (counter < 10) {
            let randomNumber = Math.random() * (100) + 1;
            randomNumber <= 33.33 ? index_1.array.push(new SpaceXRocket_1.SpaceXRocket()) :
                randomNumber <= 66.66 ? index_1.array.push(new NasaRocket_1.NasaRocket()) : index_1.array.push(new MillitaryRocket_1.MilitaryRocket());
            counter++;
        }
        return index_1.array;
    }
}
exports.StarPort = StarPort;
