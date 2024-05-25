import { PreloadAllModules } from '@angular/router';
import { Injectable } from '@angular/core';
import { Triangle } from '../model/equilateralTriangle';

@Injectable({
  providedIn: 'root'
})
export class TriangleService {
  triangles: Triangle[] = [];
  constructor() { }
  add(a: number){
    let t = new Triangle(a);
    this.triangles.push(t);
  }
}
