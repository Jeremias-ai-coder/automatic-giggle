import { Container, NineSlicePlane, Sprite, Text, Texture } from "pixi.js";
import { Button } from "../ui/Button";
import { keyboard } from "../utils/keyboard";

export class UIDemo extends Container{

    private buttonMouse:Button;
    private lastKeyPressed:Text;
    constructor(){
        super();
        const dialog=new Container();   
        dialog.x=100;
        dialog.y=50;

       //FONDO
        const Fondo_ui =new NineSlicePlane(
            Texture.from("FondoUI"),
            35,35,35,35
        );
        this.addChild(Fondo_ui);
        Fondo_ui.width=500;
        Fondo_ui.height=600;
        Fondo_ui.scale.set(1);


        const background = Sprite.from("Window");
        dialog.addChild(background);
        
        this.buttonMouse= new Button(
            Texture.from("mouse_button"),
            Texture.from("mouse_downbutton"),
            Texture.from("mouse_button")
        );
       this.buttonMouse.on("buttonClick", this.onButtonClick,this);
        this.buttonMouse.width=100;
        this.buttonMouse.height=100;
        this.buttonMouse.y=120;
        this.buttonMouse.x=90;
            
        dialog.addChild(this.buttonMouse);

        const buttonTouch= Sprite.from("touch_button");
        buttonTouch.anchor.set(0.5);
        buttonTouch.width=100;
        buttonTouch.height=100;
        buttonTouch.y=120;
        buttonTouch.x=220;
        dialog.addChild(buttonTouch);

        const buttonPointer= Sprite.from("default_button");
        buttonPointer.anchor.set(0.5);
        buttonPointer.width=100;
        buttonPointer.height=100;
        buttonPointer.y=250;
        buttonPointer.x=155;
        dialog.addChild(buttonPointer);

        this.lastKeyPressed=new Text("Waiting...",{fontSize: 48});
        this.lastKeyPressed.anchor.set(0.2);
        this.lastKeyPressed.x=100;
        this.lastKeyPressed.y=340;
        dialog.addChild(this.lastKeyPressed);

        this.addChild(dialog);

        keyboard.down.on("KeyB", this.onKeyB,this);
        keyboard.up.on("KeyB", this.onKeyBUp,this);
    }
  
    private onButtonClick():void{
        console.log("my new button clicker!", this);
    }
    private onKeyB():void{
        console.log("apreté la B!",this);
    }
    private onKeyBUp():void{
        console.log("solté la B!",this);
    }
 
}