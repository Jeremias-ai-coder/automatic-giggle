import { AnimatedSprite, Graphics,ObservablePoint,Rectangle,Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";
import { keyboard } from "../utils/keyboard";
import { IHitbox } from "./IHitbox";

export class Player extends PhysicsContainer implements IHitbox
{
    
    private static readonly GRAVITY = 600;
    private static readonly MOVE_SPEED = 0;
    private static readonly JUMP_SPEED= 700;

    public canJump=true;
    private FightAnimated: AnimatedSprite;
    private hitBox:Graphics;

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
        this.FightAnimated.anchor.set(0.71,0.87);
        this.FightAnimated.animationSpeed = 0.2;
        this.FightAnimated.scale.set(0.1);
            
        const auxZero=new Graphics();
        auxZero.beginFill(0x00FF00);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();
        
        this.hitBox=new Graphics();
        this.hitBox.beginFill(0x00FF00,0.3);
        this.hitBox.drawRect(0,0,600,2800);
        this.hitBox.endFill();
        this.hitBox.x=-310;
        this.hitBox.y=-2800;


        this.addChild(this.FightAnimated);
        this.scale.x=-1;
        this.addChild(auxZero);
        this.FightAnimated.addChild(this.hitBox);
        

        this.acceleration.y=Player.GRAVITY;
        keyboard.down.on("ArrowUp",this.Jump,this);
    }

    public override destroy(options:any)
    {
        super.destroy(options);
        keyboard.down.off("ArrowUp",this.Jump);
    }

    public override update(deltaMS:number): void 
    {
        super.update(deltaMS/1000);
        this.FightAnimated.update(deltaMS/(1000/60));

        if(keyboard.state.get("ArrowRight"))
        {
            this.speed.x=Player.MOVE_SPEED;
            this.scale.x=-1;
        }else if(keyboard.state.get("ArrowLeft"))
        {
            this.speed.x=-Player.MOVE_SPEED;
            this.scale.x=1;
        }else{
            this.speed.x=0;
        }

        if(keyboard.state.get("ArrowDown"))
        {
            this.acceleration.y= Player.GRAVITY*5;
        }else
        {
            this.acceleration.y= Player.GRAVITY;
        }
    }

    private Jump()
    {
        if(this.canJump)
        {
            this.canJump=false;
            this.speed.y=-Player.JUMP_SPEED;
        }
    }

    public getHitbox():Rectangle
    {
        return this.hitBox.getBounds();
    }

    public separate(overlap: Rectangle, Plataform: ObservablePoint<any>) {
        if(overlap.width<overlap.height){

            if(this.x>Plataform.x)
            {
                this.x+=overlap.width;
            }else if(this.x<Plataform.x)
            {
                this.x-=overlap.width;
            }
            
        }else{
            if(this.y>Plataform.y)
            {
                this.y-=overlap.height;
                this.speed.y=0;
                this.canJump=true;
            }else if(this.y<Plataform.y)
            {
                this.y+=overlap.height;
            }
            
        }
    }
}