import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  isInvalid(control: string) {
    return this.myForm.controls[control].errors 
      && this.myForm.controls[control].touched;
  }

  save(): void {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    } else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

}
