import { Component } from '@angular/core';
import { AppState, selectUser } from '../../../redux';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user$: Observable<User | null> = new Observable<User | null>();
  name: string = 'User Name';

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.user$ = this.store.select(selectUser);
    this.user$.subscribe((user) => {
      if (user) {
        this.name = user.name;
      }
    });
  }

}
