import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  /**
   *  to install app 
   */
download()
{
  window.open("https://download.scdn.co/SpotifySetup.exe");
}
}
