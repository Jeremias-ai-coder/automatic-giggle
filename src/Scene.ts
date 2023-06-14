import { AnimatedSprite, Container, Texture } from "pixi.js";
import { TijerasYlapiz } from "./TijerasYlapiz";

export class Scene extends Container{

    constructor(){
        super();
        
        const tijerasYlapiz:TijerasYlapiz= new TijerasYlapiz();
        tijerasYlapiz.scale.set(0.5);
        tijerasYlapiz.x=200;
        tijerasYlapiz.y=300;
        this.addChild(tijerasYlapiz);

       const FightAnimated: AnimatedSprite = new AnimatedSprite(
         [
            Texture.from("fight1"),
            Texture.from("fight2"),
            Texture.from("fight3"),
            Texture.from("fight4"),
            Texture.from("fight5"),
            Texture.from("fight6"),
            Texture.from("fight7"),
            Texture.from("fight6"),
            Texture.from("fight5"),
            Texture.from("fight4"),
            Texture.from("fight3"),
            Texture.from("fight2"),
            Texture.from("fight1")
         ],
         true
       );
       FightAnimated.play();
       FightAnimated.animationSpeed = 0.2;
       FightAnimated.scale.set(0.1);
       this.addChild(FightAnimated);
    }
}