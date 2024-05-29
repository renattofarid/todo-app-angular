import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../components/templates';
import { LoginGridComponent } from '../../components/organism';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent, LoginGridComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor() {}

  login() {
    console.log('Login');
  }

  onInput(value: string) {
    console.log(value);
  }
}
