import { Component } from '@angular/core';
import { LoginButtonComponent, LoginInputComponent } from '../../atoms';
import {
  FormBuilder, ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [LoginInputComponent, LoginButtonComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {

  form = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  login() {
    if (this.form.valid) {
      const formValues = this.form.value;
      console.log('Login successful with values:', formValues);
      // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    } else {
      console.log('Form is invalid');
    }
  }
}
