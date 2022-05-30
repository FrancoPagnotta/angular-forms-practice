import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {
  
  myForm: FormGroup = this.fb.group({
    genre: ['F', Validators.required],
    notifications: [true, Validators.required],
    conditions: [true, [Validators.requiredTrue]]
  });

  person = {
    genre: 'F',
    notifications: true
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  isInvalid(): boolean {
    return this.myForm.invalid && this.myForm.touched;
  }

  save(): void {
    if (this.myForm.invalid) {
      console.log('invalid form')
    } else {
      const formValue = this.myForm.value;
      delete formValue.conditions;

      this.person = formValue;
      this.myForm.reset({...this.person, conditions: true});
    }
  }

}
