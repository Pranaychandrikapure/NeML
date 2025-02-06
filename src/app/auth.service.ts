import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  // Simulating login state (Modify as per your actual authentication logic)
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');  // Check if token exists
  }

  login(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}
