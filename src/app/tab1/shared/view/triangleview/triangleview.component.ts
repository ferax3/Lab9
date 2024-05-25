import { Component, OnInit } from '@angular/core';
import { TriangleService } from '../../controller/triangle.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-triangleview',
  templateUrl: './triangleview.component.html',
  styleUrls: ['./triangleview.component.scss'],
})
export class TriangleviewComponent  implements OnInit {

  triagleForm!: FormGroup;
  triangles!: any[];
  constructor(
    private triangleservice: TriangleService,
    private fb: FormBuilder
  ) {
    this.triagleForm = this.fb.group({
      a: ['3', [Validators.required, Validators.pattern(/^[0-9]*$/)]]
    })

   }

  ngOnInit() {}
  add(triangleForm: any){
    this.triangleservice.add(triangleForm.a);
    this.triangles = this.triangleservice.triangles;
  }
}
