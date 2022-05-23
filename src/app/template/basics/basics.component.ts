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

  productNameValidation(): boolean {
    return this.myForm?.controls.product?.touched && this.myForm?.controls.product?.invalid;
  }

  priceValidation(): boolean {
    return this.myForm?.controls.price?.touched && this.myForm?.controls.price?.value < 0;
  }

  save(): void {
    console.log(this.myForm);
  }

}
