import { Component } from '@angular/core';
import { ITriangleView } from './view/ItriangleView';
import { PresenterService } from './presenter/presenter.service';
import { triangleView } from './view/triangleview';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  view!: ITriangleView;
  constructor(private pr: PresenterService) {
    this.view = new triangleView();
  }
  ras(a: any){
    this.pr.loadTriangle(a, this.view)
  }
}
