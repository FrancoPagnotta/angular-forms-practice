import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.css']
})
export class BasicsComponent implements OnInit {
  myForm: FormGroup = new FormGroup({
    product: new FormControl(''),
    price: new FormControl(''),
    stock: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
