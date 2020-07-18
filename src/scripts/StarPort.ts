import {SpaceXRocket} from "./SpaceXRocket";
import {NasaRocket} from "./NasaRocket";
import {MilitaryRocket} from "./MillitaryRocket";
import {array} from "./index";

export class StarPort {
    getAllRockets(): Array<any>{
        let counter: number = 0;
        while (counter<10){
            let randomNumber:number = Math.random()*(100)+1;
            randomNumber<=33.33? array.push(new SpaceXRocket()):
                randomNumber<=66.66? array.push(new NasaRocket()):array.push(new MilitaryRocket());
            counter++;
        }
        return array;
    }
}

