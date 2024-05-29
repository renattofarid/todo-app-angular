import { Injectable } from '@angular/core';
import { User } from '../models';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  users: User[] = [
    {
      id: '1234-abcd-5678-efgh',
      name: 'Renatto Perleche',
      user: 'renattofarid',
      password: 'password',
      email: 'renattofaridper@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/47273253?v=4',
    },
    {
      id: '5678-efgh-1234-abcd',
      name: 'Karl Navarro',
      user: 'karlnavarro',
      password: 'password',
      email: 'karlnavarro@gmail.com',
      image: 'https://avatars.githubusercontent.com/u/47273253?v=4',
    }
  ]
  login(user: string, password: string): Observable<User | null> {
    let foundUser: User | null = null;
    this.users.forEach((u) => {
      if (u.user === user && u.password === password) {
        foundUser = u;
      }
    });
    return of(foundUser).pipe(
      delay(1500),
    );
  }
}
