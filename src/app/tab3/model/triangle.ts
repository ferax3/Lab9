export class Triangle {
    private a: number = 3;
    get A() {
      return this.a;
    }
    private validate(val: number) {
      if (val >= 0) return true
      else
        throw "Від'ємна сторона";
    }
    set A(value) {
      if (this.validate(value))
        this.a = value;
    }
    get S() {
      return (this.a * this.a * Math.sqrt(3))/4;
    }
    get H() {
        return (this.a * Math.sqrt(3))/2;
      }
  }