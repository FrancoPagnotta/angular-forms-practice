import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm!: FormGroup;
  add!: FormControl;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.createControl();
  }

  createForm(): void {
    this.myForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      favorites: this.formBuilder.array([], [Validators.required])
    });
  }

  createControl(): void {
    this.add = this.formBuilder.control('', [Validators.required, Validators.minLength(4)]);
  }

  isInvalid(control: string) {
    return this.myForm.controls[control].errors 
      && this.myForm.controls[control].touched;
  }

  get favoritesFormArray(): FormArray {
    return this.myForm.controls.favorites as FormArray;
  }

  addFavorite(): void {
    if (this.add.invalid) {
      return;
    }
    this.favoritesFormArray.push(this.formBuilder.control(this.add.value, Validators.required));
    this.add.reset();
  }

  deleteFavorite(index: number): void {
    this.favoritesFormArray.controls.splice(index, 1);
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
