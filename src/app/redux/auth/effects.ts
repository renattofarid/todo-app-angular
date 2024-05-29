import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import {
  login,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logout,
} from './actions';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      exhaustMap((action) =>
        this.authService.login(action.user, action.password).pipe(
          map((user) => {
            if (user) {
              this.route.navigate(['/tasks']);
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

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(logout),
      map(() => {
        this.route.navigate(['/auth']);
        return logoutSuccess();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private route: Router
  ) {}
}
