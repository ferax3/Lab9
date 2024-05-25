import { Component } from '@angular/core';
import { Triangle } from './model/triangle';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  triangle = new Triangle();
  constructor() {}
  ras_S(a: any){
    this.triangle.A = a;
    return this.triangle.S.toFixed(2);
  }
  ras_H(a: any){
    this.triangle.A = a;
    return this.triangle.H.toFixed(2);
  }
}
