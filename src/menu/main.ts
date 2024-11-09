import './style.css';

let hidden = false;
const menu = document.querySelector('.menu')!;
const hideButton = menu.querySelector('.menu-hideButton')!;
const objNum = menu.querySelector<HTMLInputElement>('#menu-objNum')!;
const fpsCount = menu.querySelector('#menu-fpsCount')!;

hideButton.addEventListener('click', () => {
    if (hidden) {
        hideButton.textContent = '<';
        menu.classList.remove('menu_hidden');
    } else {
        hideButton.textContent = '>';
        menu.classList.add('menu_hidden');
    }
    hidden = !hidden;
});

export function getObjNum() {
    return objNum.valueAsNumber || 0;
}

export function setFps(fps: number) {
    fpsCount.textContent = String(fps.toFixed(1));
}
