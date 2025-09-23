import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormService } from '../services/form.service';
import { CommonModule } from '@angular/common';
import { RemoveNumbersPipe } from "../pipes/remove-numbers-pipe";
import { LimitSelection } from '../directives/limit-selection';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule, RemoveNumbersPipe, LimitSelection, RouterModule],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  form: FormGroup;
  options: string[] = [];
  selected: string[] = [];

  constructor(private fb: FormBuilder, private service: FormService) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      birthday: ['', [Validators.required, Validators.pattern(/^\d{2}\/\d{2}\/\d{4}$/)]]
    });

    this.options = this.service.getOptions();

    // dont allow numbers in name input
    this.form.get('name')?.valueChanges.subscribe(val => {
      const cleaned = val.replace(/[0-9]/g, '');
      if (val !== cleaned) this.form.get('name')?.setValue(cleaned, { emitEvent: false });
    });
    this.form.get('lastName')?.valueChanges.subscribe(val => {
      const cleaned = val.replace(/[0-9]/g, '');
      if (val !== cleaned) this.form.get('lastName')?.setValue(cleaned, { emitEvent: false });
    });
  }

  selectOption(option: string) {
    if (this.selected.length < 3 && !this.selected.includes(option)) {
      this.selected.push(option);
    }
  }

  removeOption(option: string) {
    this.selected = this.selected.filter(item => item !== option);
  }

  submit() {
    console.log('Form Values:', this.form.value);
    console.log('Selected Options:', this.selected);
  }
}