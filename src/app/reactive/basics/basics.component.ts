import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  // myForm: FormGroup = new FormGroup({
  //   product: new FormControl(''),
  //   price: new FormControl(''),
  //   stock: new FormControl(''),
  // });
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      product: [''],
      price: [0],
      stock: [0]
    });
  }

}
