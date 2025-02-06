import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Route, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
        InputTextModule,
        ButtonModule,
        FormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router: Router) { }

  user = {
    name: '',
    email: '',
    phone: '',
    password: ''
  };

  onSignup() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(this.user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! User added to localStorage.');
    this.navigateToLogin();
  }

  navigateToLogin(){
    this.router.navigate(['/login']);
  }

}
