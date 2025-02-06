import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; 
import * as CryptoJS from 'crypto-js'; // Your custom auth service

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private secretKey = 'mySecretKey123!';
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {

    let token = localStorage.getItem('token');

    if (token) {
      return true; 
    }

    this.router.navigate(['/login']); 
    return false;
  }
}