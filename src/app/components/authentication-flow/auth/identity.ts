import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Identity {
  public storeToken(token: string) {
    localStorage.setItem('token', token);

  }

  public getToken(): string {
    return localStorage.getItem('token') ?? '';
  }

  public clearToken() {
    localStorage.removeItem('token');
  }
}
