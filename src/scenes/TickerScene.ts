import { Container,Sprite} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";
import { Plataform } from "../game/Plataform";
import { checkCollision } from "../game/IHitbox";




export class TickerScene extends Container implements IUpdateable{

    private playerFighter:Player;
    public speed:number=150;

    private platforms:Plataform[];
    
    constructor(){
        super();
        
        const bg =Sprite.from("fondo_colisiones");
        bg.width=WIDTH;
        bg.height=1400;
        this.addChild(bg);

        this.platforms=[];

        const plat=new Plataform()
        plat.width=500;
        plat.height=300;
        plat.position.set(150,650);
        this.addChild(plat);
        this.platforms.push(plat);

        const plat2=new Plataform()
        plat2.width=500;
        plat2.height=300;
        plat2.position.set(1000,650);
        this.addChild(plat2);
        this.platforms.push(plat2);


        this.playerFighter=new Player();      
        this.playerFighter.x=300;  
        this.playerFighter.y=300;  
        this.addChild(this.playerFighter);
    }
    
    public update(deltaTime:number, _deltaFrame:number):void
    {
        this.playerFighter.update(deltaTime);
       
        console.log(checkCollision(this.playerFighter,this.platforms[0]));

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