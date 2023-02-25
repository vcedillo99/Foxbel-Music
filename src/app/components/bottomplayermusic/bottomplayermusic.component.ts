import { Component } from '@angular/core';
import { AudioService } from 'src/app/services/audio/audio.service';

@Component({
  selector: 'app-bottomplayermusic',
  templateUrl: './bottomplayermusic.component.html',
  styleUrls: ['./bottomplayermusic.component.scss']
})
export class BottomplayermusicComponent {

  files: Array<any> = [];
  track_selected: any
  state: any = {
    playing: false,
    readableCurrentTime: '',
    readableDuration: '',
    duration: undefined,
    currentTime: undefined,
    canplay: false,
    error: false
  };
  currentFile: any = {};

  constructor(private audioService: AudioService) {
    this.audioService.song$.subscribe(val => {
      this.track_selected = val.song
      this.openAudio(val.song.preview, val.index)
      console.log(this.track_selected);
    })
    this.audioService.getState().subscribe(state => {
      this.state = state;
    });
  }

  openAudio(file: string, index: number) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file);
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  playStream(url: string) {
    this.audioService.playStream(url).subscribe(events => {});
  }

  slideVolume(event: any) {
    console.log(event.target.value);
    this.audioService.slideVolume(event.target.value)
  }

}
