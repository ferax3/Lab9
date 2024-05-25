export class TriangleMVP {
    a: number = 3;
    s: number = 0;
    h: number = 0;
    constructor(a: number) {
        this.a = a;
        this.s = (this.a * this.a * Math.sqrt(3))/4;
        this.h = (this.a * Math.sqrt(3))/2;
    }
}