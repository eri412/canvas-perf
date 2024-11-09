import {Square} from './square.ts';
import {fpsSetterDecorator} from './fpsSetterDecorator.ts';
import {getObjNum} from '../menu/main.ts';
import './style.css';

const canvas = document.querySelector<HTMLCanvasElement>('.canvas')!;
const context = canvas.getContext('2d')!;

canvas.width = document.documentElement.clientWidth;
canvas.height = document.documentElement.clientHeight;

window.addEventListener('resize', () => {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
});

const render = fpsSetterDecorator(function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    const objNum = getObjNum();
    for (let i = 0; i < objNum; i++) {
        Square.getRandomSquare(canvas.width, canvas.height).render(context);
    }
});

setInterval(render);
