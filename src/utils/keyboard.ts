import { utils } from "pixi.js";

export class keyboard{
    
    public static readonly state: Map<string, boolean>= new Map;

    public static readonly down: utils.EventEmitter= new utils.EventEmitter();
    public static readonly up: utils.EventEmitter= new utils.EventEmitter();

    private constructor(){}

    private static initialized:boolean=false;
    public static initialize():void{
        
        if(keyboard.initialized){
            return;
        }
        
        keyboard.initialized=true;
        document.addEventListener("keydown",keyboard.onKeyDown)
        document.addEventListener("keyup",keyboard.onKeyUp)
    }
    private static onKeyDown(e:KeyboardEvent)
    {
        if(keyboard.state.get(e.code)!=true){
            keyboard.down.emit(e.code);
        }
        keyboard.state.set(e.code,true);
    }
    private static onKeyUp(e:KeyboardEvent)
    {   
        keyboard.up.emit(e.code);
    
        keyboard.state.set(e.code, false);
    }
}