import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styleUrls: ['./dynamics.component.css']
})
export class DynamicsComponent implements OnInit {
  myForm!: FormGroup;
  addFav!: FormControl;

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
    this.addFav = this.formBuilder.control('', Validators.required);
  }

  isInvalid(control: string) {
    return this.myForm.controls[control].errors 
      && this.myForm.controls[control].touched;
  }

  addFavControlIsInvalid() {
    return this.favoritesFormArray.controls.length === 0 
      && this.addFav.touched
  }

  get favoritesFormArray(): FormArray {
    return this.myForm.controls.favorites as FormArray;
  }

  addFavorite(): void {
    if (this.addFav.invalid) {
      return;
    }
    this.favoritesFormArray.push(this.formBuilder.control(this.addFav.value, Validators.required));
    this.addFav.reset();
  }

  deleteFavorite(index: number): void {
    this.favoritesFormArray.removeAt(index);
  }

  save(): void {
    if (this.myForm.invalid || this.favoritesFormArray.controls.length === 0) {
      this.myForm.markAllAsTouched();
      this.addFav.markAsTouched();
    } else {
      console.log(this.myForm.value);
      this.myForm.reset();
    }
  }

}
