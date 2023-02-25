import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    const token = localStorage.getItem('token')
    return token
  }

  setExpires(expires: number) {
    localStorage.setItem('expires', expires.toString())
  }

  getExpires() {
    const expires = localStorage.getItem('expires')
    return expires
  }
}
