import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private iss = {
    login: 'http://recipeapp.test/api/login',
    signup: 'http://recipeapp.test/api/signup'
  }

  // Handles token (called in login.component.ts)
  handle(token) {
    this.set(token);
    console.log(this.isValid());
  }

  // Save token in local storage
  set(token) {
    localStorage.setItem('token', token);
  }

  // Returns token
  get() {
    return localStorage.getItem('token');
  }

  // Removes token
  remove() {
    return localStorage.removeItem('token');
  }

  // Check if token is valid, if so returns payload
  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  // Returns payload
  payload(token) {
    const payload = token.split('.')[1];

    return this.decode(payload);
  }

  // Decodes payload
  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

}
