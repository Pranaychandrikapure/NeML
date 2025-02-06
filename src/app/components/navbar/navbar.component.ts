import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMenuOpen: boolean = false;
  isToken: boolean = false;
  constructor() {
    this.isToken = localStorage.getItem('token') ? true : false;
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  onLogout() {
    // Clear local storage on logout
    localStorage.removeItem('token');
    alert('Logged out successfully!');
  }
}
