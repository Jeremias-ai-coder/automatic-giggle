import { Container } from "pixi.js";
import { TijerasYlapiz } from "./TijerasYlapiz";

export class Scene extends Container{

    constructor(){
        super();
        const tijerasYlapiz:TijerasYlapiz= new TijerasYlapiz();

        tijerasYlapiz.scale.set(0.5);
        tijerasYlapiz.x=200;
        tijerasYlapiz.y=300;
    
       this.addChild(tijerasYlapiz);
    }
}