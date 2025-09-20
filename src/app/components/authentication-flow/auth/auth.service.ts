import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://heylub.com/back/public/api/v1';

  constructor(private http: HttpClient) {}

  checkPhone(phone: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/check/mobile`, { mobile: phone });
  }

  loginPassword(phone: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login/password`, { mobile: phone, password });
  }

  loginSms(phone: string, code: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login/sms`, { mobile: phone, code });
  }

  resendCode(phone: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/resend/confirmcode`, { mobile: phone });
  }

  setPassword(phone: string, password: string): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth/set/password`, { mobile: phone, password });
  }
}