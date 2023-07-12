import { Rectangle } from "pixi.js";

export interface IHitbox{

    getHitbox():Rectangle;
}

export function checkCollision(objA:IHitbox,objB:IHitbox):boolean
{
    const rA=objA.getHitbox();      //rA=rectangulo A
    const rB=objB.getHitbox();      //rB=rectangulo B

    const rightmostLeft= rA.left < rB.left ? rB.left : rA.left;
    const leftmostRight= rA.right > rB.right ? rB.right : rA.right;
    const bottommostTop= rA.top < rB.top ? rB.top : rA.top;
    const topmostBottom= rA.bottom > rB.bottom ? rB.bottom : rA.bottom;

    //"make scence" means that left is left and right is right
    const makesScenceHorizontal = rightmostLeft < leftmostRight;
    const makesScenceVertical = bottommostTop > topmostBottom;
    if (makesScenceHorizontal && makesScenceVertical)
    {
        return true;
    }else
    {
        return false;
    }
}