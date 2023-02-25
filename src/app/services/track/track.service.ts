import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private apiURL = `${environment.API_URL}`
  public search_text$ = new Subject<string>()

  constructor(private http: HttpClient) {}

  getTracks() {
    return this.http.get(`${this.apiURL}/chart/0/tracks`)
  }

  getTrack(track: string | number) {
    return this.http.get(`${this.apiURL}/track/${track}`)
  }

  getArtist(id: number) {
    return this.http.get(`${this.apiURL}/artist/${id}`)
  }

  searchTracks(valor: string) {
    return this.http.get(`${this.apiURL}/search?q=${valor}`)
  }
}
