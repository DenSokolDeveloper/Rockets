import {StarPort} from './StarPort'

let base = new StarPort();
export let array: any[] = [];
base.getAllRockets();
for (let key of array){
    console.log(`Prepare to the next launch #${array.indexOf(key) + 1}:`);
    key.launch();
}
