import { Container, NineSlicePlane, Sprite, Text, Texture } from "pixi.js";

export class UIDemo extends Container{
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
        
        const buttonMouse= Sprite.from("mouse_button");
        buttonMouse.anchor.set(0.5);
        buttonMouse.width=100;
        buttonMouse.height=100;
        buttonMouse.y=120;
        buttonMouse.x=90;
        dialog.addChild(buttonMouse);

        const buttonTouch= Sprite.from("touch_button");
        buttonTouch.anchor.set(0.5);
        buttonTouch.width=100;
        buttonTouch.height=100;
        buttonTouch.y=120;
        buttonTouch.x=220;
        dialog.addChild(buttonTouch);

        const lastKeyPressed=new Text("Waiting...",{fontSize: 48});
        lastKeyPressed.anchor.set(0.2);
        lastKeyPressed.x=100;
        lastKeyPressed.y=340;
        dialog.addChild(lastKeyPressed);

        this.addChild(dialog);
    }
}