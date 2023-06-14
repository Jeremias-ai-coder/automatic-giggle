import { AnimatedSprite, Container, Graphics, Texture,Text } from "pixi.js";
import { TijerasYlapiz } from "./TijerasYlapiz";

export class Scene extends Container{

    constructor(){
        super();
        
        //Clase extendida del Contenedor
        const tijerasYlapiz:TijerasYlapiz= new TijerasYlapiz();
        tijerasYlapiz.scale.set(0.5);
        tijerasYlapiz.x=200;
        tijerasYlapiz.y=300;
        this.addChild(tijerasYlapiz);

        //sprite animado
       const FightAnimated: AnimatedSprite = new AnimatedSprite(
         [
            Texture.from("fight1"),
            Texture.from("fight2"),
            Texture.from("fight3"),
            Texture.from("fight4"),
            Texture.from("fight5"),
            Texture.from("fight6"),
            Texture.from("fight7")
          
         ],
         true
       );
       FightAnimated.play();
       FightAnimated.animationSpeed = 0.2;
       FightAnimated.scale.set(0.1);
       this.addChild(FightAnimated);

       //Graphics
       const myGraphics: Graphics = new Graphics();
       myGraphics.lineStyle({color: 0x0000FF, width:10, alpha:1});
       myGraphics.moveTo(0,0);
       myGraphics.lineTo(300,500);
       myGraphics.lineTo(300,100);
       myGraphics.lineTo(0,0);

       myGraphics.clear();

       myGraphics.lineStyle({color:0xFF0000, width:10, alpha:1});
       myGraphics.beginFill(0x0000FF,1);
       myGraphics.drawCircle(0,0,100);
       myGraphics.endFill();
       myGraphics.drawCircle(50,50,100);

       myGraphics.position.set(1280/2,720/2);
       this.addChild(myGraphics);
       myGraphics.clear();

        //text

        const myText: Text=new Text("Hello World!",{fontSize:35});
        this.addChild(myText);
    }
}