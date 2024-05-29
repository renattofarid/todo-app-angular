import { CanActivateFn, Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { AppState, loginFailure, loginSuccess } from '../redux';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = (route, state) => {
  const store = inject(Store<AppState>);
  const router = inject(Router);
  const user$ = store.select('auth');

  const user = localStorage.getItem('user');
  if (user) {
    store.dispatch(loginSuccess({ user: JSON.parse(user) }));
  } else {
    store.dispatch(loginFailure());
    router.navigate(['/auth']);
  }

  let isAuth = false;
  user$.subscribe(({ user }) => {
    console.log(user);
    if (user) {
      isAuth = true;
    }
  });
  return isAuth;
};
