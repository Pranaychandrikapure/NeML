import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userEmail: string | null = '';
  private secretKey = 'mySecretKey123!'; // Use the same key as in login

  ngOnInit() {
    // Retrieve encrypted token from localStorage
    let encryptedToken = localStorage.getItem('token');

    if (encryptedToken) {
      try {
        // Decrypt the token to get the email
        let bytes = CryptoJS.AES.decrypt(encryptedToken, this.secretKey);
        this.userEmail = bytes.toString(CryptoJS.enc.Utf8);
      } catch (error) {
        console.error('Error decrypting token:', error);
      }
    }
  }
}

