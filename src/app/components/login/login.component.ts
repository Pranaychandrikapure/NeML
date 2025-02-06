import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,BrowserAnimationsModule,ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  login() {
    console.log('Login clicked', { email: this.email, password: this.password, rememberMe: this.rememberMe });
  }

}
