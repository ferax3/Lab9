import { Injectable } from '@angular/core';
import { TriangleMVP } from '../model/equilateralTriangle';
import { ITriangleView } from '../view/ItriangleView';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  triangle!: TriangleMVP;
  view!: ITriangleView;
  loadTriangle(a: number, view: ITriangleView){
    this.view = view;
    this.triangle = new TriangleMVP(a);
    this.view.a = "Сторона = " + this.triangle.a;
    this.view.s = "Площина = " + this.triangle.s.toFixed(2);
    this.view.h = "Висота = " + this.triangle.h.toFixed(2);
  }
  constructor() { }
}
