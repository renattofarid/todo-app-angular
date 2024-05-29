import { Component } from '@angular/core';
import { AuthLayoutComponent } from '../../components/templates';
import { LoginGridComponent } from '../../components/organism';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AuthLayoutComponent, LoginGridComponent],
  template: `
    <app-auth-layout>
      <login-grid></login-grid>
    </app-auth-layout>
  `,
})
export class LoginComponent {}
