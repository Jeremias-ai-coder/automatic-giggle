import { Application, Container, Loader, Point, Sprite } from 'pixi.js'

const app = new Application({
	view: document.getElementById("pixi-canvas") as HTMLCanvasElement,
	resolution: window.devicePixelRatio || 1,
	autoDensity: true,
	backgroundColor: 0x6495ed,
	width: 1280,
	height: 720
});

window.addEventListener("resize",()=>{
	const scaleX=window.innerWidth/app.screen.width; 
	const scaleY=window.innerHeight/app.screen.height;
	const scale= Math.min(scaleX,scaleY);

	const gameWidth=Math.round( app.screen.width * scale);
	const gameHeight= Math.round(app.screen.height * scale);

	const marginHorizontal= Math.floor((window.innerWidth - gameWidth) / 2);
	const marginVertical= Math.floor((window.innerHeight - gameHeight) / 2);

	app.view.style.width= gameWidth + "px";
	app.view.style.height= gameHeight + "px";

	app.view.style.marginLeft= marginHorizontal + "px";
	app.view.style.marginRight= marginHorizontal + "px";

	app.view.style.marginTop= marginVertical + "px";
	app.view.style.marginBottom=marginVertical + "px";
});
window.dispatchEvent(new Event ("resize"));

Loader.shared.add({url: "./tijeras.png", name: "nuestraTijera"});
Loader.shared.add({url: "./lapiz.png",name:"lapiz"});

Loader.shared.onComplete.add(()=>{
	const tijeras: Sprite = Sprite.from("nuestraTijera");

	const lapiz: Sprite= Sprite.from("lapiz");

	lapiz.position.set(240,60);
	lapiz.scale.set(1.2);

	const tijerasYlapiz:Container= new Container();

	tijerasYlapiz.addChild(tijeras);
	tijerasYlapiz.addChild(lapiz); 

	tijerasYlapiz.scale.set(0.5);
	tijerasYlapiz.x=200;
	tijerasYlapiz.y=300;

	console.log(lapiz.toGlobal(new Point()));							//muestra en pantalla la posicion del lapiz en el global
	console.log(lapiz.parent.toGlobal(lapiz.position));

	lapiz.angle=-120;

	//const aux= lapiz.parent.toLocal(new Point(640,360));
	//lapiz.position.x=aux.x;
	//lapiz.position.y=aux.y;

	app.stage.addChild(tijerasYlapiz);

})
Loader.shared.load();