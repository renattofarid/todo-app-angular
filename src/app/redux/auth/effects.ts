import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { login, loginSuccess, loginFailure } from './actions';
import { AuthService } from '../../services';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.user, action.password).pipe(
          map((user) => {
            if (user) {
              return loginSuccess({ user });
            } else {
              return loginFailure();
            }
          }),
          catchError(() => of(loginFailure()))
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}
