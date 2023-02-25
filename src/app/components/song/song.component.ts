import { Component, Input, Output, EventEmitter } from '@angular/core';
import { AudioService } from 'src/app/services/audio/audio.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.scss']
})
export class SongComponent {

  @Input() track: any
  @Input() index: any

  constructor(private audioService: AudioService){}

  selectedSong() {
    this.audioService.song$.next({song: this.track, index: this.index})
  }

}
