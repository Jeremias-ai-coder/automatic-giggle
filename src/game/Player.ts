import { AnimatedSprite, Graphics, Texture } from "pixi.js";
import { PhysicsContainer } from "./PhysicsContainer";
import { keyboard } from "../utils/keyboard";

export class Player extends PhysicsContainer
{
    private static readonly GRAVITY = 600;
    private static readonly MOVE_SPEED = 350;
    public canJump=true;
    private FightAnimated: AnimatedSprite;
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
            
        const auxZero=new Graphics();
        auxZero.beginFill(0x00FF00);
        auxZero.drawCircle(0,0,10);
        auxZero.endFill();
        
        this.addChild(this.FightAnimated);
        this.addChild(auxZero);
        this.scale.x=-1;

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

        // if(keyboard.state.get("ArrowUp"))
        // {
        //     this.Jump();
        // }
    }

    private Jump()
    {
        if(this.canJump)
        {
            this.canJump=false;
            this.speed.y=-600;
        }
    }
}