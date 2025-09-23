import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Identity } from './identity';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private identity: Identity) {}

  canActivate(): boolean {
    const token = this.identity.getToken();
    if (token) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}