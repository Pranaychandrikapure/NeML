import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { UserService } from '../../user.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    JsonPipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  userEmail: string | null = '';
  private secretKey = 'mySecretKey123!';
  
  users: any[] = [];// Use the same key as in login

  constructor(private userSrv:UserService) {  
  }

  


  ngOnInit() {
    // Retrieve encrypted token from localStorage
    let encryptedToken = localStorage.getItem('token');
    this.userSrv.getUsers().subscribe((users:any)=>{
      this.users = users;
    }); 

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

