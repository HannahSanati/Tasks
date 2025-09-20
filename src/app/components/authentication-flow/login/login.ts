import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10)]]
    });

    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });

    this.confirmForm = this.fb.group({
      code: ['', [Validators.required]]
    });
  }

  checkPhone() {
    const phone = this.loginForm.value.phone;
    this.authService.checkPhone(phone).subscribe(res => {
      if (res.hasPassword) {
        this.showPassword = true;
        this.showConfirmCode = false;
      } else {
        this.showPassword = false;
        this.showConfirmCode = true;
        // this is for sending SMS
        this.authService.loginSms(phone, '').subscribe();
      }
    }, err => console.error(err));
  }

  login() {
    const phone = this.loginForm.value.phone;
    const password = this.passwordForm.value.password;
    this.authService.loginPassword(phone, password).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/panel']);
    }, err => console.error('Wrong password or error', err));
  }

  confirm() {
    const phone = this.loginForm.value.phone;
    const code = this.confirmForm.value.code;
    this.authService.loginSms(phone, code).subscribe(res => {
      localStorage.setItem('token', res.token);
      this.router.navigate(['/panel']);
    }, err => console.error('Invalid code or error', err));
  }
}