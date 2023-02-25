import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private YOU_APP_ID: string = '584724' //para local - cambiar cuando se suba
  private YOU_APP_SECRET: string = '2f4a97cb6e671f1f4d41228f328bc08a'

  constructor(private http: HttpClient) { }

  getToken(code: string | null) {
    return this.http.get(`https://connect.deezer.com/oauth/access_token.php?app_id=${this.YOU_APP_ID}&secret=${this.YOU_APP_SECRET}&code=${code}&output=json`)
  }
}
