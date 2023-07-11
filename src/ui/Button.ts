import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{

    private def: Texture;
    private down: Texture;
    private over: Texture;

    private spr:Sprite;
    constructor(def:Texture, down:Texture, over:Texture){
        super();

        this.def=def;
        this.down=down;
        this.over=over;

        this.spr= Sprite.from(def);
        this.spr.anchor.set(0.5);
        this.addChild(this.spr);

        this.spr.interactive=true;
        this.spr.on("pointerdown", this.onMouseDown,this)
        this.spr.on("pointerup", this.onMouseUp,this)  
        this.spr.on("pointerover", this.onMouseOver,this)
        this.spr.on("pointerout", this.onMouseOut,this)

    }
    //mouse
    private onMouseDown():void{
        this.spr.texture=this.down;
    }
    private onMouseUp():void{
        this.emit("buttonClick")
        this.spr.texture=this.over;
    }
    private onMouseOver():void{
        this.spr.texture=this.over;
    }
    private onMouseOut():void{
        this.spr.texture=this.def;
    }

}

// //botón menú del Scene.ts
      // const botonMenu = new NineSlicePlane(
      //   Texture.from("menu_buttom"),
      //   10,10,10,10
      // );
      // this.addChild(botonMenu);
      // botonMenu.width=160;
      // botonMenu.height=160;
      // botonMenu.scale.set(1);
      // botonMenu.position.x=420;
      // botonMenu.position.y=485;
      
      // //botón reintentar
      // const botonRetry = new NineSlicePlane(
      //   Texture.from("retry_buttom"),
      //   10,10,10,10
      // );
      // this.addChild(botonRetry);
      // botonRetry.width=160;
      // botonRetry.height=160;
      // botonRetry.scale.set(1);
      // botonRetry.position.x=570;
      // botonRetry.position.y=485;

      // //botón siguiente
      // const botonNext = new NineSlicePlane(
      //   Texture.from("next_buttom"),
      //   10,10,10,10
      // );
      // this.addChild(botonNext);
      // botonNext.width=160;
      // botonNext.height=160;
      // botonNext.scale.set(1);
      // botonNext.position.x=720;
      // botonNext.position.y=485;