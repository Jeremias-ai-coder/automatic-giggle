import { Container} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";



export class TickerScene extends Container implements IUpdateable{

    private playerFighter:Player; 
    public speed:number=150;
    constructor(){
        super();

        this.playerFighter=new Player();
        this.addChild(this.playerFighter);
    }
    
    public update(deltaTime:number, _deltaFrame:number):void
    {
        this.playerFighter.update(deltaTime);
       
        //limitacion de pantalla
        if(this.playerFighter.x>(WIDTH))
        {
            this.playerFighter.x=WIDTH;
           

        }else if(this.playerFighter.x<0)
        {
            this.playerFighter.x=0;
            
        }

        if(this.playerFighter.y>HEIGHT)
        {
            this.playerFighter.y=HEIGHT;
            this.playerFighter.canJump=true;
        }
        
    }
}