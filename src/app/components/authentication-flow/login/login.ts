import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
})
export class Login {
  loginForm: FormGroup;
  passwordForm: FormGroup;
  confirmForm: FormGroup;

  showPassword = false;
  showConfirmCode = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
    });
    this.confirmForm = this.fb.group({
      code: ['', [Validators.required]],
    });
  }

  checkPhone() {
    const phone = this.loginForm.value.phone;
    if (!phone) return;

    this.authService.checkPhone(phone).subscribe(
      (res: any) => {
        if (res.data?.hasPassword) {
          this.showPassword = true;
          this.showConfirmCode = false;
        } else {
          this.showPassword = false;
          this.showConfirmCode = true;

          //sending a SMS
          this.authService.loginSms(phone, '').subscribe((smsRes) => {
            console.log('SMS sent:', smsRes);
          });
        }
      },
      (err) => console.error('Error checking phone', err)
    );
  }

  //Login with password
  login() {
    const phone = this.loginForm.value.phone;
    const password = this.passwordForm.value.password;

    if (!phone || !password) return;

    this.authService.loginPassword(phone, password).subscribe(
      (res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/panel']);
        } else {
          console.error('Token missing in response:', res);
        }
      },
      (err) => console.error('Wrong password or error', err)
    );
  }

  //Login with code confirm
  confirm() {
    const mobile = this.loginForm.value.phone;
    const code = this.confirmForm.value.code;

    if (!mobile || !code) return;

    this.authService.loginSms(mobile, code).subscribe(
      (res: any) => {
        if (res.token) {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/panel']);
        } else {
          console.error('Token missing in SMS response', res);
        }
      },
      (err) => console.error('Invalid code or error', err)
    );
  }
}