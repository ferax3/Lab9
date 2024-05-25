export class Triangle {
    a: number = 3;
    s: number = 0;
    h: number = 0;
    constructor(a: number) {
        this.a = a;
        this.s = parseFloat(((this.a * this.a * Math.sqrt(3)) / 4).toFixed(2));
        this.h = parseFloat(((this.a * Math.sqrt(3)) / 2).toFixed(2));
    }

}
