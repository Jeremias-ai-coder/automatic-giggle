import { Container, Texture, TilingSprite} from "pixi.js";
import { IUpdateable } from "../utils/IUpdateable";
import { HEIGHT, WIDTH } from "..";
import { Player } from "../game/Player";
import { Plataform } from "../game/Plataform";
import { checkCollision } from "../game/IHitbox";


export class TickerScene extends Container implements IUpdateable{

    private playerFighter:Player;
    public speed:number=150;

    private platforms:Plataform[];

    private world:Container;
    private  background: TilingSprite;

    private gameSpeed:number=200;
    private timePassed:number=0;
    
    constructor(){
        super();
        this.world=new Container;
        
        this.background = new TilingSprite(Texture.from("fondo_colisiones"));
        this.background.scale.set(0.5)
        this.background.width=WIDTH*6;
        this.background.height=HEIGHT*4;
        this.addChild(this.background);

        this.platforms=[];

        let plat=new Plataform()
        plat.width=500;
        plat.height=300;
        plat.position.set(150,650);
        this.world.addChild(plat);
        this.platforms.push(plat);

        plat=new Plataform()
        plat.width=500;
        plat.height=300;
        plat.position.set(1000,450);
        this.world.addChild(plat);
        this.platforms.push(plat);

        plat=new Plataform()
        plat.width=500;
        plat.height=300;
        plat.position.set(1800,300);
        this.world.addChild(plat);
        this.platforms.push(plat);

        

        this.playerFighter=new Player();      
        this.playerFighter.x=300;  
        this.playerFighter.y=300;  
        this.playerFighter.scale.set(0.8);
        this.world.addChild(this.playerFighter);

        this.addChild(this.world);
    }
    
    public update(deltaTime:number, _deltaFrame:number):void
    {   
        this.timePassed+=deltaTime;
        if(this.timePassed > (2000*200/this.gameSpeed))
        {
            this.gameSpeed+=10;
            this.timePassed=0;
            const plat=new Plataform()
            plat.width=500;
            plat.height=300;
            plat.position.set(WIDTH,Math.random()*1080);
            this.world.addChild(plat);
            this.platforms.push(plat);
        }

        this.playerFighter.update(deltaTime);
       
        for(let Plataform of this.platforms){
            Plataform.speed.x= -this.gameSpeed;
            Plataform.update(deltaTime/1000);
            const overlap=checkCollision(this.playerFighter,Plataform);
        if(overlap !=null)
        {
            this.playerFighter.separate(overlap,Plataform.position);
        }
            
        if(Plataform.getHitbox().right<0){
            Plataform.destroy();
        }

       }

       this.platforms= this.platforms.filter((elem)=> !elem.destroyed);

       
       this.background.tilePosition.x -= this.gameSpeed *deltaTime/1000;

    }
}