import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { PlayerComponent } from 'src/app/mayestro/player/player.component'
import { MatSliderChange } from '@angular/material';
@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  id: any;
  isliked = true;
  isplayed = true;
  muted = false;
  vol = 1;
  isActive = true;
  player = true;
  soundon = false;
  repeated = false;
  checkindex: any;
  isrepeated = true;
  isshuffled = true;
  shuffling = false;
  urls: string;
  name: string;
  artist: string;
  array: any;
  imageURL: any;
  srcnew = 1;
  LikedSong: any;
  songs: any[];
  playing = false;
  playlist: any[];
  value: any;
  index: any;
  ID: any;
  LikedSongs: any[];
  TempSongs: any[];
  queue = false;
  queueexist = false;
  queueindex: any;
  playqueue = false;
  end: any;
  nextsong: any;
  tracksong = false;
  queueimage:any;
  type:any;
  ids:any;
  PlayerTemp:any[];
  playerindex:any;
  x: HTMLAudioElement = new Audio();
  constructor(private http: HttpClient, private auth: AuthService, private route: ActivatedRoute) {

  }
  ngOnInit() {


  }
  /**
   * play the HTML element
   */
  play() {
    this.playing = true;
    this.player = false;
    this.x.play();

  }
  /**
   * pause the HTML element
   */
  pause() {
    this.player = true;
    this.x.pause();
  }
  /**
   * randomize the array of element
   */
  // random(myarray) {

  //   let ctr = myarray.length, temp, index;
  //   while (ctr > 0) {
  //     index = Math.floor(Math.random() * ctr);
  //     ctr--;
  //     temp = myarray[ctr];
  //     myarray[ctr] = myarray[index];
  //     myarray[index] = temp;
  //   }
  //   return myarray;
  // }
   random (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
  /**
   * to mute the audio
   */
  mute() {
    if (this.muted) {
      this.soundon = false;
      this.x.volume = this.vol;
      this.muted = false;
    } else {
      this.soundon = true;
      this.x.volume = 0;
      this.muted = true;
    }
  }
  /**
   * toggle like button
   */
  like() {


    if (this.isliked == true) {
      this.isliked = false;
    }
    else this.isliked = true;

  }
}
