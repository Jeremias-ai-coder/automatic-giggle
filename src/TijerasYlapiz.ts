import { Container, Sprite } from "pixi.js";

export class TijerasYlapiz extends Container{

    constructor(){
        super();
        
        const tijeras: Sprite = Sprite.from("nuestraTijera");

	    const lapiz: Sprite= Sprite.from("lapiz");

	    lapiz.position.set(240,60);
	    lapiz.scale.set(1.2);
        lapiz.angle=-120;
        
	    this.addChild(tijeras);
	    this.addChild(lapiz); 
	
    }
}