import { Component, OnInit } from '@angular/core';
import { TrackService } from 'src/app/services/track/track.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  tracks: Array<any> = []
  artist: any = {}

  constructor(private trackService: TrackService) {
    this.trackService.search_text$.subscribe((valor: any) => {
      this.trackService.searchTracks(valor).subscribe((res: any) => {
        console.log(res);
        this.tracks = res.data
        this.obtenerArtist(this.tracks[0].artist.id)
      })
    })
  }

  ngOnInit(): void {
    this.trackService.getTracks().subscribe((res: any) => {
      this.tracks = res.data
      console.log(this.tracks);
      this.obtenerArtist(this.tracks[0].artist.id)
    })
  }

  obtenerArtist(id: number) {
    this.trackService.getArtist(id).subscribe(res => {
      console.log(res);
      this.artist = res
      console.log(this.artist);
    })
  }

}
