import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiURL = `${environment.API_URL}/user/me`

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get(this.apiURL)
  }
}
