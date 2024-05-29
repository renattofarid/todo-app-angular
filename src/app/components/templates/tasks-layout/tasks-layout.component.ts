import { Component } from '@angular/core';
import { NavbarComponent } from '../../molecules';
import { AppState, logout } from '../../../redux';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-tasks-layout',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './tasks-layout.component.html',
  styleUrl: './tasks-layout.component.css',
})
export class TasksLayoutComponent {
  constructor(private store: Store<AppState>) {}

  logout() {
    this.store.dispatch(logout());
  }
}
