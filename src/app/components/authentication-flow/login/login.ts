import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;
  passwordForm: FormGroup;
  confirmForm: FormGroup;

  showPassword = false;
  showConfirmCode = false;

  constructor(private fb: FormBuilder) {
    // Phone input form
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });

    // Password form (only if phone exists in system)
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

    // Confirm code form (for new users)
    this.confirmForm = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  // Step 1: Check phone number
  checkPhone() {
    const phone = this.loginForm.value.phone;
    console.log('Phone entered:', phone);

    // Simulate backend check
    if (phone === '1234567890') {
      // If phone already has a password
      this.showPassword = true;
      this.showConfirmCode = false;
    } else {
      // If new phone, require confirmation code
      this.showPassword = false;
      this.showConfirmCode = true;
    }
  }

  // Step 2a: Login with password
  login() {
    const password = this.passwordForm.value.password;
    console.log('Password entered:', password);

    if (password === '1234') {
      localStorage.setItem('token', 'fake-jwt-token');
      console.log('✅ Login successful, token saved to localStorage');
      // Redirect to panel
      // this.router.navigate(['/panel']);
    } else {
      console.log('❌ Wrong password');
    }
  }

  // Step 2b: Confirm with code
  confirm() {
    const code = this.confirmForm.value.code;
    console.log('Code entered:', code);

    if (code === '9999') {
      localStorage.setItem('token', 'fake-jwt-token');
      console.log('✅ Confirmation successful, token saved to localStorage');
      // Redirect to panel
      // this.router.navigate(['/panel']);
    } else {
      console.log('❌ Invalid code');
    }
  }
}