import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router, RouterOutlet } from '@angular/router';

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
  phoneChecked = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router){
    this.loginForm = this.fb.group({
      phone: ['', [Validators.required, Validators.minLength(10)]],
    });
    this.passwordForm = this.fb.group({
      password: ['', [Validators.required]],
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
        this.phoneChecked = true;
        if (res.data?.hasPassword) {
          this.showPassword = true;
          this.showConfirmCode = false;
        } else {
          this.showPassword = false;
          this.showConfirmCode = true;
        }
      },
      (err) => console.error(err)
    );
  }

  login() {
    const phone = this.loginForm.value.phone;
    const password = this.passwordForm.value.password;
  
    if (!phone || !password) return;
  
    this.authService.loginPassword(phone, password).subscribe(
      (res: any) => {
        const token = res?.data?.token;   
        if (token) {
          localStorage.setItem('token', token); 
          console.log('token saved');
          this.router.navigate(['/authentication-flow/panel']);
          } else {
          console.error('token missing in res', res);
        }
      },
      (err) => {
        console.error('login failed', err);
      }
    );
  }

  confirm() {
    const mobile = this.loginForm.value.phone;
    const code = this.confirmForm.value.code;

    if (!mobile || !code) return;

    this.authService.loginSms(mobile, code).subscribe(
      (res: any) => {
        const token = res?.data?.token;   
        if (token) {
          localStorage.setItem('token', token); 
          console.log('token saved');
          this.router.navigate(['/authentication-flow/panel']);
        } else {
          console.error('token missing in res', res);
        }
      },
      (err) => console.error('SMS login failed', err)
    );
  }
}