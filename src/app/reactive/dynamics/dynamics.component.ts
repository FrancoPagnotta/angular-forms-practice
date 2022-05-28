import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm!: FormGroup;
  favorite: string = '';

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      favorites: this.formBuilder.array([], [Validators.required])
    });
  }

  isInvalid(control: string) {
    return this.myForm.controls[control].errors 
      && this.myForm.controls[control].touched;
  }

  get favoritesFormArray(): FormArray {
    return this.myForm.controls.favorites as FormArray;
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
