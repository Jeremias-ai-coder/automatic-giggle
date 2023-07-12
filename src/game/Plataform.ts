import { Container, Graphics, Rectangle, Sprite,} from "pixi.js";
import { IHitbox } from "./IHitbox";

export class Plataform extends Container implements IHitbox{
    
    private hitBox: Graphics;
    
    constructor(){
        super();
        
        const spr= Sprite.from("Plataform");
        this.addChild(spr);

        this.hitBox=new Graphics();
        this.hitBox.beginFill(0x0000FF,0.3);
        this.hitBox.drawRect(0,0,1077,550);
        this.hitBox.x=10;
        this.hitBox.y=70;
        this.hitBox.endFill();

        this.addChild(this.hitBox);
        
    }
    getHitbox(): Rectangle {
        return this.hitBox.getBounds();
    }
}