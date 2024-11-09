export class Square {
    #x: number;
    #y: number;
    #rot: number;

    constructor(x: number, y: number, rot: number) {
        this.#x = x;
        this.#y = y;
        this.#rot = rot;
    }

    render(context: CanvasRenderingContext2D) {
        const SQUARE_SIDE_LEN = (this.constructor as typeof Square).SQUARE_SIDE_LEN;
        context.translate(this.#x, this.#y);
        context.rotate(this.#rot);
        context.fillRect(
            0 - SQUARE_SIDE_LEN / 2,
            0 - SQUARE_SIDE_LEN / 2,
            SQUARE_SIDE_LEN / 2,
            SQUARE_SIDE_LEN / 2,
        );
        context.resetTransform();
    }

    static SQUARE_SIDE_LEN = 40;

    static getRandomSquare(canvasWidth: number, canvasHeight: number) {
        const x = this.SQUARE_SIDE_LEN + Math.random() * (canvasWidth - this.SQUARE_SIDE_LEN * 2);
        const y = this.SQUARE_SIDE_LEN + Math.random() * (canvasHeight - this.SQUARE_SIDE_LEN * 2);
        const rot = Math.random() * Math.PI * 2;
        return new Square(x, y, rot);
    }
}
