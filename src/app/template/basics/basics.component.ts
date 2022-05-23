import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  @ViewChild('myForm') myForm!: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  productNameValid(): boolean {
    return this.myForm?.controls.product?.touched && this.myForm?.controls.product?.invalid;
  }

  save(): void {
    console.log(this.myForm);
  }

}
