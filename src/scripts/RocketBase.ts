export abstract class RocketBase {
    abstract name:string;
    launchData():string {
        let data = new Date();
        return data.getHours() + ":" + data.getMinutes();
    }
    launch():void{
        console.log(`The ${this.name} rocket launched at ${this.launchData()}.`);
    }
}
