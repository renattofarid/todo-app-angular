import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './redux';
import { Observable } from 'rxjs';
import { selectLoading } from './redux/auth/selectors';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todo-app';
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.loading$ = this.store.select(selectLoading);
  }
}
