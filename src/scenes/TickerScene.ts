import { AnimatedSprite,Container,Graphics,Texture} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { PhysicsContainer } from "../game/PhysicsContainer";
import { HEIGHT, WIDTH } from "..";



export class TickerScene extends Container implements IUpdateable{

    private FightAnimated:AnimatedSprite;
    private PhysFighter: PhysicsContainer;
    public speed:number=150;
    constructor(){
        super();

        this.FightAnimated= new AnimatedSprite(
            [
               Texture.from("fight1"),
               Texture.from("fight2"),
               Texture.from("fight3"),
               Texture.from("fight4"),
               Texture.from("fight5"),
               Texture.from("fight6"),
               Texture.from("fight7")
             
            ],
            false
          );
        this.FightAnimated.play();
        this.FightAnimated.anchor.set(0.7,0.9);
        this.FightAnimated.animationSpeed = 0.2;
        this.FightAnimated.scale.set(0.1);
            
        this.PhysFighter = new PhysicsContainer();
        this.PhysFighter.speed.x=200;
        this.PhysFighter.speed.y=0;
        this.PhysFighter.acceleration.y=400;
        this.addChild(this.PhysFighter);

        const auxZero=new Graphics();
        auxZero.beginFill(0x00FF00);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();
        
        this.PhysFighter.addChild(this.FightAnimated);
        this.PhysFighter.addChild(auxZero);
        this.PhysFighter.scale.x=-1;
    }
    
    public update(deltaTime:number, deltaFrame:number):void
    {
        this.FightAnimated.update(deltaFrame);
        const dt= deltaTime / 1000;
        this.PhysFighter.update(dt); 
        //limitacion de pantalla
        if(this.PhysFighter.x>(WIDTH))
        {
            this.PhysFighter.x=WIDTH;
            this.PhysFighter.speed.x=Math.abs(this.PhysFighter.speed.x)*-1;
            this.PhysFighter.scale.x=1;

        }else if(this.PhysFighter.x<0)
        {
            this.PhysFighter.x=0;
            this.PhysFighter.speed.x=Math.abs(this.PhysFighter.speed.x);
            this.PhysFighter.scale.x=-1;
        }

        if(this.PhysFighter.y>HEIGHT)
        {
            this.PhysFighter.y=HEIGHT;
            this.PhysFighter.speed.y=-500;

              
        }
        
    }
}