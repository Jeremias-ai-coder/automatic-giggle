import { AnimatedSprite, Container, Graphics, Texture,Text, NineSlicePlane} from "pixi.js";
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

        //Nine-Slice Plane
        
        //Fondo

      const panel=new NineSlicePlane(
          Texture.from("fondo"),
          35,35,35,35
      );
      this.addChild(panel);
      panel.width=170;
      panel.height=220;
      panel.scale.set(3);
      panel.position.x=400;
      panel.position.y=50;
        //cartel

      const Cartel= new NineSlicePlane(
          Texture.from("cartel"),
          35,35,35,35
      );
      this.addChild(Cartel);
      Cartel.width=270;
      Cartel.height=120;
      Cartel.scale.set(2);
      Cartel.position.x=390;
      Cartel.position.y=20;
        //texto cartel
      
      const textoCartel: Text=new Text("Eres terrible!",{fontSize:45, fill:0xFFFFFF});
      this.addChild(textoCartel);
      textoCartel.position.x=530;
      textoCartel.position.y=115;

      //estrella completa
      const estrellCompleta =new NineSlicePlane(
          Texture.from("estrella-com"),
          35,35,35,35
      );
      this.addChild(estrellCompleta);
      estrellCompleta.width=150;
      estrellCompleta.height=150;
      estrellCompleta.scale.set(1);
      estrellCompleta.position.x=450;
      estrellCompleta.position.y=190;

      //estrella vacia

      const estrellaVacia = new NineSlicePlane(
          Texture.from("estrella-incom"),
          35,35,35,35
      );
      this.addChild(estrellaVacia);
      estrellaVacia.width=160;
      estrellaVacia.height=160;
      estrellaVacia.scale.set(0.94);
      estrellaVacia.position.x=570;
      estrellaVacia.position.y=185;

      const estrellaVacia2 = new NineSlicePlane(
        Texture.from("estrella-incom2"),
        35,35,35,35
    );
    this.addChild(estrellaVacia2);
    estrellaVacia2.width=160;
    estrellaVacia2.height=160;
    estrellaVacia2.scale.set(0.94);
    estrellaVacia2.position.x=700;
    estrellaVacia2.position.y=185;
    }
}