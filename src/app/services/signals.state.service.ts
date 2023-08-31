import { Injectable, WritableSignal, signal } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class SignalsStateService {
  user: WritableSignal<User> = signal({ password: 'password', userName: '' });
  constructor() {}
}
