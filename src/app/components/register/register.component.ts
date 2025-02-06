import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
        InputTextModule,
        ButtonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
