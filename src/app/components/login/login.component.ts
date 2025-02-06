import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterOutlet } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    RouterOutlet,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData = {
    email: '',
    password: '',
  };
  private secretKey = 'mySecretKey123!'; // **IMPORTANT:**  Store this securely.  Don't hardcode it in production!

  constructor(private router: Router) {}

  onLogin() {
    // Retrieve users from LocalStorage
    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user exists with given email and password
    let foundUser = users.find(
      (user: any) =>
        user.email === this.loginData.email &&
        user.password === this.loginData.password
    );

    if (foundUser) {
      alert('Login successful!');
      
      // Generate a hashed token using SHA-256
      const authToken = CryptoJS.SHA256(foundUser.email + Date.now()).toString();
      console.log('====================================');
      console.log('Token:', authToken);
      console.log('====================================');
      // Store token and user details
      localStorage.setItem('loggedInUser', JSON.stringify(foundUser)); 
      localStorage.setItem('token', authToken);

      this.router.navigate(['/home']); // Redirect to home page
    } else {
      alert('Invalid email or password.');
    }
  }

  navigateToRegi() {
    this.router.navigate(['/register']);
  }
}