import { Component } from '@angular/core';
import { LoginButtonComponent, LoginInputComponent } from '../../atoms';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState, login, selectError } from '../../../redux';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-login',
  standalone: true,
  imports: [
    LoginInputComponent,
    LoginButtonComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './form-login.component.html',
})
export class FormLoginComponent {
  form = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
  });

  error$: Observable<boolean> = new Observable<boolean>();

  constructor(private fb: FormBuilder, private store: Store<AppState>) {}

  ngOnInit() {
    this.error$ = this.store.select(selectError);
  }

  toLogin() {
    if (!this.form.valid) return;

    const { user, password } = this.form.value;

    if (user && password) {
      this.store.dispatch(login({ user, password }));
    } else {
      console.log('User or password is missing');
    }
  }
}
