import {setFps} from '../menu/main.ts';

const FRAME_CALC_CUTOFF = 60;

export function fpsSetterDecorator(f: () => void) {
    let frames = 0;
    let lastTimeStamp = performance.now();
    return function () {
        f();
        frames++;
        if (frames % FRAME_CALC_CUTOFF === 0) {
            const curTimeStamp = performance.now();
            setFps(FRAME_CALC_CUTOFF * 1000 / (curTimeStamp - lastTimeStamp));
            lastTimeStamp = curTimeStamp;
        }
    };
}
